import React from "react";
import "./Footer.css";
import sairam_logo from "../../static/sairam-logo.png";
import LinkedInSVG from "../../static/social/linkedin2x.png";
import MapSVG from "../../static/social/Map.png";
import InstagramSVG from "../../static/social/instagram2x.png";
import FaceBookSVG from "../../static/social/facebook2x.png";
export default function Footer() {
  return (
    <div className="footer_div">
      <div className="footer_logo">
        <a referrerPolicy="no-referrer" target="_blank" href="https://sairam.edu.in/">
        <img src={sairam_logo} alt="logo" />
        </a>
        <div
          style={{ height: "50px", backgroundColor: "white", width: "2px" }}
        />
        <div className="text">
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </div>
      </div>
      <div className="footer_social">
      <a referrerPolicy="no-referrer" target="_blank" href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9602223,80.0552184,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071">
        <div className="footer_social_icon">
          <img src={MapSVG} alt="map social" />
        </div>
        </a>
      <a referrerPolicy="no-referrer" target="_blank" href="https://www.facebook.com/SairamEnggCSE">
        <div className="footer_social_icon">
          <img src={FaceBookSVG} width="32px" alt="facebook social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.instagram.com/synsara_2022/">
        <div className="footer_social_icon">
          <img src={InstagramSVG} width="32px" alt="instagram social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.linkedin.com/school/sri-sairam-engineering-college/">
        <div className="footer_social_icon">
          <img src={LinkedInSVG} width="32px" alt="linkedin social" />
        </div>
        </a>
      </div>
    </div>
  );
}
