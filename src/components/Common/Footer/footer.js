import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
      CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
      <a href="https://github.com/daharwalmohan4" target="_blank">
          <GitHubIcon className="social-link" />
        </a>
        <a href="https://www.facebook.com/daharwalmohan4/" target="_blank">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:daharwalmohan4@gmail.com" target="_blank">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://twitter.com/daharwalmohan4" target="_blank">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/daharwalmohan4/" target="_blank">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;