import * as actions from "../actions/postActions";

export const initialState = {
  posts: [],
  loading: true,
  failed: false,
  selected: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, failed: false };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, failed: true };
    case actions.SELECT_POST:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
