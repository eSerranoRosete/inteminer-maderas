import { useEffect, useState } from "react";

const API_URL = "https://payload-api.up.railway.app/api/clients/";

interface IFData {
  errors?: string[];
  firstName: string;
  lastName: string;
  email: string;
}

export const useClientData = (clientID: string) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch(API_URL + clientID)
      .then((res) => res.json())
      .then((data: IFData) => {
        if (data?.errors) {
          console.log(data.errors);
        } else {
          setName(data.firstName + " " + data.lastName);
          setEmail(data.email);
          setReady(true);
        }
      })
      .catch((e) => console.log(e));
  }, [clientID]);

  return { data: { name, email }, ready };
};
