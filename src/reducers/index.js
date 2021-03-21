import { combineReducers } from "redux";

import postsReducer from "./postReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
});

export default rootReducer;
