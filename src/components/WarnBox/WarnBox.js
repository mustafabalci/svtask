import React from "react";
import styles from "./WarnBox.module.css";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { closeWarnBox } from "../../actions/warnActions";
import { onDeletePost } from "../../actions/postActions";

const WarnBox = ({ dispatch, selected, show }) => {
  const onDelete = () => {
    dispatch(onDeletePost(selected));
    dispatch(closeWarnBox());
  };

  return (
    <div className={styles.Wrapper} style={{ display: show ? "flex" : "none" }}>
      <div className={styles.WarnBox}>
        <div>
          <p className="my-0">Emin misiniz?</p>
        </div>
        <div className="d-flex flex-gap-1 mt-2">
          <Button text="VAZGEÇ" onClick={() => dispatch(closeWarnBox())} />
          <Button type="warn" text="SİL" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  show: state.warnBox.show,
  selected: state.posts.selected,
});

export default connect(mapStateToProps)(WarnBox);
