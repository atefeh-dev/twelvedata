/** @format */

import { billingPeriodActionType } from "./actionType";

const initialState = {
  billingPeriod: "monthly",
};
export const billingPeriodReducer = (state = initialState, action) => {
  console.log(action.rate);

  switch (action.type) {
    case billingPeriodActionType.setBillingPeriod:
      return {
        ...state,
        rates: [
          ...state,
          {
            billingPeriod: action.period,
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
};
