/**
 * Formats float into USD currency
 * @param number
 * @returns
 */

export function formatCurrency(number: number) {
  return `${new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(number)}`;
}

export interface IFDataInput {
  landPrice: number;
  area: number;
  payment: number;
  term: number;
  limitToMSI?: boolean;
}
// Result computation
export function computeResult(data: IFDataInput) {
  const lockedLandPrice = data.landPrice * data.area;

  let payment = lockedLandPrice * (data.payment / 100);

  if (payment < 5000) {
    payment = 5000;
  }

  const initialDebt = lockedLandPrice - payment;

  let months = data.term * 12;

  let debt = initialDebt;

  const periodPayment1 = debt / months;
  months -= 36;
  debt -= periodPayment1 * 36;

  const periodPayment2 = (debt * 0.01) / (1 - Math.pow(1.01, -months));
  const periodTerm2 = 120 - 36;

  for (let i = 0; i < periodTerm2; i++) {
    const interest = debt * 0.01;
    const capital = periodPayment2 - interest;
    debt -= capital;
    months--;
  }

  const periodPayment3 = (debt * 0.0125) / (1 - Math.pow(1.0125, -months));
  const periodTerm3 = months;

  const resultData: IFResultData = {
    lockedLandPrice: lockedLandPrice,
    payment: payment,
    initialDebt: initialDebt,
    period1: {
      term: 36,
      amount: periodPayment1,
    },
    ...(!data.limitToMSI && {
      period2: {
        term: periodTerm2 > 0 ? periodTerm2 : null,
        amount: periodTerm2 > 0 ? periodPayment2 : null,
      },
      period3: {
        term: periodTerm3 > 0 ? periodTerm3 : null,
        amount: periodTerm3 > 0 ? periodPayment3 : null,
      },
    }),
  };

  return resultData;
}

export interface IFResultData {
  lockedLandPrice: number;
  payment: number;
  initialDebt: number;
  period1: {
    term: number;
    amount: number;
  };
  period2?: {
    term: number | null;
    amount: number | null;
  };
  period3?: {
    term: number | null;
    amount: number | null;
  };
}
