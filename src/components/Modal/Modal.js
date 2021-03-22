import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { onUpdatePost } from "../../actions/postActions";

const Modal = ({ dispatch, show, selected }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setBody(selected.body);
    }
  }, [selected]);

  const updateModalPost = (e) => {
    e.preventDefault();
    dispatch(onUpdatePost({ id: selected.id, title, body }));
  };

  return (
    <div
      className={styles.ModalWrapper}
      style={{ display: `${show ? "flex" : "none"}` }}
    >
      <div className={styles.Modal}>
        <div className={styles.ModalTop}>
          <p className="my-0">Düzenle</p>
          <span
            className="ml-auto cursor-pointer"
            onClick={() => dispatch(closeModal())}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className={styles.ModalContent}>
          <form className="mt-2">
            <div className="d-flex flex-column">
              <label htmlFor="title" className={styles.FormLabel}>
                Title
              </label>
              <input
                type="text"
                className={styles.FormControl}
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="body" className={styles.FormLabel}>
                Body
              </label>
              <textarea
                className={styles.FormControl}
                id="body"
                rows="4"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </div>
          </form>
        </div>
        <div className={`${styles.ModalActions} d-inline-flex`}>
          <Button text="GÜNCELLE" onClick={updateModalPost} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  show: state.modal.show,
  selected: state.posts.selected,
});

export default connect(mapStateToProps)(Modal);
