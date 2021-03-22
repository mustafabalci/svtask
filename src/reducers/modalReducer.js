import * as actions from "../actions/modalActions";

export const initialState = {
  show: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return { show: true };
    case actions.HIDE_MODAL:
      return { show: false };
    default:
      return state;
  }
}
