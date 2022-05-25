/** @format */

import { billingPeriodActionType } from "./actionType";

export const setBillingPeriod = (period) => {
  return async (dispatch, getState) => {
    dispatch({ type: billingPeriodActionType, period: period });
  };
};
