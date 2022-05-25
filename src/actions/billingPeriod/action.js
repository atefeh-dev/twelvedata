/** @format */

import { billingPeriodActionType } from "./actionType";

export const setBillingPeriod = (period) => {
  console.log(period);
  return async (dispatch, getState) => {
    dispatch({
      type: billingPeriodActionType.setBillingPeriod,
      period: period,
    });
  };
};
