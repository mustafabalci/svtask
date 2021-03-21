import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineDribbble,
  AiFillGithub,
} from "react-icons/ai";
import SocialIcon from "../../SocialIcon/SocialIcon";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="FooterText">
            <p className={`${styles.TopText} color-primary`}>
              Thank you for supporting us!
            </p>
            <p>Let's get in touch on any of these platforms.</p>
          </div>
          <div className={styles.SocialIcons}>
            <SocialIcon
              bgColor="#1DA1F2"
              icon={<AiOutlineTwitter size={16} color="#FFFFFF" />}
            />
            <SocialIcon
              bgColor="#3B5999"
              icon={<AiFillFacebook size={16} color="#FFFFFF" />}
            />
            <SocialIcon
              bgColor="#EA4C89"
              icon={<AiOutlineDribbble size={16} color="#FFFFFF" />}
            />
            <SocialIcon
              bgColor="#222222"
              icon={<AiFillGithub size={16} color="#FFFFFF" />}
            />
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <p>
            &copy; 2021{" "}
            <span className="font-weight-bold color-primary">Şikayetvar</span>
          </p>
          <Link
            to="/"
            className={`${styles.FooterLink} ml-auto font-weight-bold`}
          >
            Posts
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
