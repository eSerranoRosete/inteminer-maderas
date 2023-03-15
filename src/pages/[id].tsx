import { type NextPage } from "next";
import { ChangeEvent, FormEventHandler, useCallback, useState } from "react";

import { locations } from "./../lib/locations";
import { computeResult } from "../lib/computeResult";
import { useRouter } from "next/router";
import { useClientData } from "../lib/hooks/useClientData";
import { appContext } from "../context/contextActions";
import { Form } from "../components/Form";
import { IFRequestBody } from "./api/mail";
import { LoadingScreen } from "../components/LoadingScreen";
import Result from "../components/Result";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, ready } = useClientData(id as string);
  const { actions, state } = appContext(locations);
  const [resultData, setResultData] = useState<IFRequestBody>();

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      const { landPrice, term, payment, area } = state;
      const result = computeResult({
        landPrice,
        term,
        payment,
        area,
      });

      if (!data.email) return console.error("No email was provided");

      const requestBody: IFRequestBody = {
        inputs: state,
        lead: {
          name: state.name,
          email: state.email,
          phone: state.phone,
        },
        resultData: result,
        targetEmail: data.email,
        locationName: state.community,
      };

      // Hit API for sending lead email
      // fetch("/api/mail", {
      //   method: "POST",
      //   body: JSON.stringify(requestBody),
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data))
      //   .catch((e) => console.log(e.message));

      setResultData(requestBody);
    },
    [state, data.email]
  );

  // Update community and landprice on select change
  const updateCommunity = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      actions.setCommunity(e.target.value);
      const landPrice = e.target.options[e.target.selectedIndex]?.dataset.lp;
      landPrice && actions.setLandPrice(landPrice);
    },
    [state.community]
  );

  if (!ready || !data.email || !data.name) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* <Form
        locations={locations}
        displayName={data.name}
        currentArea={state.area}
        currentTerm={state.term}
        currentLocation={state.community}
        onSubmit={onSubmit}
        onLocationChange={updateCommunity}
        onAreaChange={actions.setArea}
        onTermChange={actions.setTerm}
        onPaymentChange={actions.setPayment}
        setName={actions.setName}
        setEmail={actions.setEmail}
        setPhone={actions.setPhone}
      />
      {resultData && <Result />} */}
      <Result resultData={resultData} />
    </>
  );
};

export default Home;
