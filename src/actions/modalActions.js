export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export function openModal() {
  return (dispatch) => {
    dispatch(showModal());
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch(hideModal());
  };
}
