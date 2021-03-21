import React from "react";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { openModal } from "../../actions/modalActions";
import { selectedPost } from "../../actions/postActions";
import { useHistory } from "react-router-dom";

const ListItem = ({ dispatch, order, post }) => {
  const history = useHistory();

  const editPost = () => {
    dispatch(selectedPost(post));
    dispatch(openModal());
  };

  return (
    <div className="d-flex align-items-center py-3 px-3">
      <div className="font-weight-bold">{order}</div>
      <p className="my-0 ml-2">{post.body.substring(0, 75)}</p>
      <div className="d-flex ml-auto flex-gap-1">
        <Button
          text="DETAY"
          type="info"
          onClick={() => history.push(`/post-detail/${post.id}`)}
        />
        <Button text="DÜZENLE" type="success" onClick={editPost} />
        <Button text="SİL" type="warn" />
      </div>
    </div>
  );
};

export default connect()(ListItem);
