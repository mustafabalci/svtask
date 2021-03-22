import * as actions from "../actions/warnActions";

export const initialState = {
  show: false,
};

export default function warnReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_WARN_BOX:
      return { show: true };
    case actions.HIDE_WARN_BOX:
      return { show: false };
    default:
      return state;
  }
}
