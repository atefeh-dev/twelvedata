/** @format */

import { combineReducers } from "redux";
import { billingPeriodReducer } from "../actions/billingPeriod/reducer";

export default combineReducers({
  billingPeriod: billingPeriodReducer,
});
