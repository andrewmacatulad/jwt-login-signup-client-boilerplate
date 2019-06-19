import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import testReducer from "./testReducer";
import asyncReducer from "../features/async/asyncReducer";
import signInReducer from "../../component/signin/signInReducer";
import protectedReducer from "../../component/ProtectedAuth/protectedReducer";

const rootReducer = combineReducers({
  test: testReducer,
  toastr: toastrReducer,
  async: asyncReducer,
  user: signInReducer,
  page: protectedReducer
});

export default rootReducer;
