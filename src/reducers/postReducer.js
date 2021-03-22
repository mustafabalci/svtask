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
    case actions.UPDATE_POST:
      return { ...state };
    case actions.UPDATE_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return { ...state, posts: updatedPosts, failed: false };
    case actions.UPDATE_POST_FAILURE:
      return { ...state, loading: false, failed: true };

    case actions.DELETE_POST:
      return { ...state };
    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
        failed: false,
      };
    default:
      return state;
  }
}
