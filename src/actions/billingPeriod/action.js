/** @format */

import { billingPeriodActionType } from "./actionType";

export const setRate = (period) => {
  return async (dispatch, getState) => {
    dispatch({ type: billingPeriodActionType, period: period });
  };
};
