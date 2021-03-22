export const SHOW_WARN_BOX = "SHOW_WARN_BOX";
export const HIDE_WARN_BOX = "HIDE_WARN_BOX";

export const showWarnBox = () => ({
  type: SHOW_WARN_BOX,
});

export const hideWarnBox = () => ({
  type: HIDE_WARN_BOX,
});

export function openWarnBox() {
  return (dispatch) => {
    dispatch(showWarnBox());
  };
}

export function closeWarnBox() {
  return (dispatch) => {
    dispatch(hideWarnBox());
  };
}
