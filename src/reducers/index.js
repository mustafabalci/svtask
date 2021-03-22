import { combineReducers } from "redux";

import postsReducer from "./postReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import warnReducer from "./warnReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  user: userReducer,
  warnBox: warnReducer,
});

export default rootReducer;
