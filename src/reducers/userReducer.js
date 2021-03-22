import * as actions from "../actions/userActions";

export const initialState = {
  user: null,
  loading: false,
  failed: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return { ...state, loading: true };
    case actions.GET_USER_SUCCESS:
      return { user: action.payload, loading: false, failed: false };
    case actions.GET_USER_FAILURE:
      return { ...state, loading: false, failed: true };
    default:
      return state;
  }
}
