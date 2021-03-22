export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const SELECT_POST = "SELECT_POST";

export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const selectPost = (post) => ({
  type: SELECT_POST,
  payload: post,
});

export const updatePost = () => ({
  type: UPDATE_POST,
});

export const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  payload: post,
});

export const updatePostFailure = () => ({
  type: UPDATE_POST_FAILURE,
});

export const deletePost = () => ({
  type: DELETE_POST,
});

export const deletePostSuccess = (post) => ({
  type: DELETE_POST_SUCCESS,
  payload: post,
});

export const deletePostFailure = () => ({
  type: DELETE_POST_FAILURE,
});

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}

export function selectedPost(post) {
  return (dispatch) => {
    dispatch(selectPost(post));
  };
}

export function onUpdatePost(post) {
  return async (dispatch) => {
    dispatch(updatePost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      const data = await response.json();

      dispatch(updatePostSuccess(data));
    } catch (error) {
      dispatch(updatePostFailure());
    }
  };
}

export function onDeletePost(post) {
  return async (dispatch) => {
    dispatch(deletePost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      dispatch(deletePostSuccess(post));
    } catch (e) {
      deletePostFailure();
    }
  };
}
