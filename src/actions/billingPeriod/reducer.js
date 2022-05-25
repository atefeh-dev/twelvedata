/** @format */

import { billingPeriodActionType } from "./actionType";

const initialState = {
  billingPeriod: "monthly",
};
export const billingPeriodReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(billingPeriodActionType.setBillingPeriod);
  console.log(action.period);

  switch (action.type.setBillingPeriod) {
    case billingPeriodActionType.setBillingPeriod:
      console.log("hi");

      return {
        ...state,
        billingPeriod: action.period,
      };
    default:
      return {
        ...state,
      };
  }
};
