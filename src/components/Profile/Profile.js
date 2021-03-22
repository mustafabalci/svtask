import React, { useState } from "react";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  const [hideText, setHideText] = useState(true);

  const toggleText = () => {
    setHideText(!hideText);
  };

  const renderText = () => {
    const content =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem fugit harum ipsam neque nesciunt numquam quis sunt tempora vel. Ab et, impedit itaque laborum nihil non praesentium similique voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dignissimos earum eum minima possimus quaerat! Consequuntur deserunt, ipsam laudantium maxime modi nemo nesciunt nulla sed temporibus voluptatibus. Corporis, quisquam, similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fuga illo quae suscipit ut! Aliquid animi cumque dignissimos, distinctio, doloremque dolores ducimus eos expedita officiis porro quas sequi tenetur, vel!";
    return hideText ? (
      <p className="text-center paragraph">{content.substring(0, 350)}</p>
    ) : (
      <p className="text-center paragraph">{content}</p>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between border-bottom pb-3">
        <div className="d-flex flex-column">
          <p className={styles.ProfileTitle}>{user.name}</p>
          <p>{user.address.city}</p>
          <div className={styles.LabelWrapper}>
            <p className={styles.Label}>Username</p>
            <p className="my-">{user.username}</p>
            <p className={styles.Label}>Email</p>
            <p className="my-">{user.email}</p>
            <p className={styles.Label}>Phone</p>
            <p className="my-">{user.phone}</p>
            <p className={styles.Label}>Company</p>
            <p className="my-">{user.company.name}</p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="500"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            tabIndex="0"
          />
        </div>
      </div>
      <div>{renderText()}</div>
      <div className="d-flex justify-content-center">
        <a className={styles.ShowMore} onClick={toggleText}>
          {hideText ? "Show More" : "Show Less"}
        </a>
      </div>
    </>
  );
};

export default Profile;
