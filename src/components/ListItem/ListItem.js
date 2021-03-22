import React from "react";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { openModal } from "../../actions/modalActions";
import { selectedPost } from "../../actions/postActions";
import { useHistory } from "react-router-dom";
import styles from "./ListItem.module.css";
import { openWarnBox } from "../../actions/warnActions";

const ListItem = ({ dispatch, order, post }) => {
  const history = useHistory();

  const editPost = () => {
    dispatch(selectedPost(post));
    dispatch(openModal());
  };

  const deletePost = () => {
    dispatch(selectedPost(post));
    dispatch(openWarnBox());
  };

  return (
    <div className={styles.ListItem}>
      <div className="font-weight-bold">{order}</div>
      <p className="my-0 ml-2">{post.body.substring(0, 75)}</p>
      <div className="d-flex ml-auto flex-gap-1">
        <Button
          text="DETAY"
          type="info"
          onClick={() => history.push(`/post-detail/${post.id}`)}
        />
        <Button text="DÜZENLE" type="success" onClick={editPost} />
        <Button text="SİL" type="warn" onClick={deletePost} />
      </div>
    </div>
  );
};

export default connect()(ListItem);
