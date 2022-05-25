/** @format */

import { billingPeriodActionType } from "./actionType";

const initialState = {
  billingPeriod: "monthly",
};
export const billingPeriodReducer = (state = initialState, action) => {
  switch (action.type) {
    case billingPeriodActionType.setBillingPeriod:
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
