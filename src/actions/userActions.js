export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUser = () => ({
  type: GET_USER,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});

export function fetchUser(userId) {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      console.log(data);

      dispatch(getUserSuccess(data));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}
