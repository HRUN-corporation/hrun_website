import React from 'react';
import "./index.css";
import logo from "../../icons/Logo.png";
import fb from "../../icons/social/facebook.svg";
import fb_hover from "../../icons/social/facebook_hover.svg";
import inst from "../../icons/social/inst.svg";
import inst_hoevr from "../../icons/social/inst_hover.svg";
import linkedin from "../../icons/social/linkedin.svg";
import linkedin_hover from "../../icons/social/linkedin_hover.svg";
import { Link } from "react-router-dom"; // Импорт Link из react-router-dom

function Footer() {
	
  return (
    <footer>
      <div className="footer__item footer__item_social">
        <div className="footer__logo">
          <Link to="/">
            <img src={logo} alt="footer logo" className="footer__img" />
          </Link>
        </div>
        <div className="footer__social">
          <a className='footer__social_icons' href="https://www.facebook.com/profile.php?id=100093553358240" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="facebook" className="footer__social_icon" id="footer__social_icon"/>
						<img src={fb_hover} alt="facebook" className="footer__social_icon_hover" />
          </a>

          <a className='footer__social_icons' href="#" target="_blank" rel="noopener noreferrer">
            <img src={inst} alt="instagram" className="footer__social_icon"/>
						<img src={inst_hoevr} alt="facebook" className="footer__social_icon_hover" />
          </a>

          <a className='footer__social_icons' href="https://www.linkedin.com/company/hrundigital" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="footer__social_icon"/>
						<img src={linkedin_hover} alt="facebook" className="footer__social_icon_hover" />
          </a>
        </div>
        <div className="footer__copyrite">Copyright 2023. All rights reserved</div>
      </div>
      <div className="footer__item footer__item_newsletter">
        <h4 className="footer__item_news">Get our newsletter</h4>
        <div className="footer__input">
          <input
            required
            name="email"
            type="text"
            id="footer__input_email"
            placeholder="Your email address"
						className="p2"
          />

          <label htmlFor="footer__input_email"></label>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__heading">Company</div>
        <div className="footer__subheader">
          <Link to="/services" className="footer__subheader_item">Services</Link>
          <Link to="/about" className="footer__subheader_item">About us</Link>
          <Link to="/work" className="footer__subheader_item">Our work</Link>
          <Link className="footer__subheader_item">Blog</Link>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__heading">Location</div>
        <div className="footer__subheader">
          <div className="footer__subheader_item">Moncton, NB, Canada</div>
          <div className="footer__subheader_item">
            Email: <br /> 
						<a className='footer__subheader_item' href="mailto:marketing@hrun.pro">marketing@hrun.pro</a>
          </div>
          <div className="footer__subheader_item">
						<a className='footer__subheader_item' href="tel:+15065676777">+1506 567 6777</a>
					</div>
        </div>
      </div>{" "}
    </footer>
  );
}

export default Footer;
