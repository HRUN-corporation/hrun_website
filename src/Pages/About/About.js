import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";
import arrow from "../../icons/arrow-small.svg";
import PrimaryBtn from "../../сomponents/primaryBtn/PrimaryBtn";
import Valerii from "../../img/Val.png";
import Paul from "../../img/Pavlo.png";

import img__about1 from "../../img/about__page_img/img__about1.png";
import img__about1_mobile from "../../img/about__page_img/img__about1_mobile.png";
import img__about2 from "../../img/about__page_img/img__about2.png";
import img__about2_mobile from "../../img/about__page_img/img__about2_mobile.png";
import img__about3 from "../../img/about__page_img/img__about3.png";
import img__about3_mobile from "../../img/about__page_img/img__about3_mobile.png";
import img__about4 from "../../img/about__page_img/img__about4.png";
import img__about4_mobile from "../../img/about__page_img/img__about4_mobile.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);

  useEffect(() => {
		animationAbout()
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSource = isMobile ? img__about1_mobile : img__about1;

	function animationAbout() {
    gsap.to(".valueBlock", {
			stagger: 1.3,
			duration: 1,
      opacity: 1,
      // yPercent: -60,
      scrollTrigger: {
        trigger: ".about__values",
        start: "top 30%",
				toggleActions: "play none none reverse",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }
	function animationApproach() {
		const tlImages = gsap.timeline({
			scrollTrigger: {
				trigger: ".sectionHeader",
				start: "top top",
				end: "+=50%",
				scrub: 1,
			},
		});
		
		tlImages.to(".about__values", {
			duration: 1,
			opacity: 1,
			y: 0,
		});
		tlImages.fromTo(
			".about__value_img",
			{ y: 80 },
			{
				y: -40,
			},
			"<"
		);		
  }

  return (
    <div className="sectionHeader">
      <h1 className="h1 about__header">{title}</h1>
      <div className="about__header_block">
        <img src={imageSource} alt="About" className="about_header_image" />
        <div className="about__descr p1">
          We are the first company in Moncton offering comprehensive web and
          mobile development services with a focus on WEB3 technology. Our team
          consists of dedicated professionals who specialize in empowering
          startups and local campaigns to achieve growth through the internet.
          <div className="about__subtitle p2">
            If your business is not on the Internet, then your business will be
            out of business.
            <span className="about__name">Bill Gates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const ValueBlock = ({ title, description, img, animation }) => (
  <div className="valueBlock">
    <div className="value__title__wrapper">
      <h3 className="h3 value__title">{title}</h3>
      <img src={img} alt={title} className="valueImage" />
    </div>
    <p className="p1">{description}</p>
    <img src={animation} className="about__value_img" />
  </div>
);

ValueBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

const TeamMember = ({ name, position, imageSrc }) => (
  <div className="teamMember">
    <img src={imageSrc} alt={name} className="team__img" />
    <h3 className="h3">{name}</h3>
    <p className="p1 teamMember_position">{position}</p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const About = () => (
  <div className="about">
    <SectionHeader title="WHY WE ARE THE BEST ?" />

    <div className="about__values">
      <div className="h1">VALUES AND VISION</div>
      <div className="values__wrapper">
        <ValueBlock
          title="Quality"
          description="We deliver high-quality digital solutions, websites, and apps that meet industry standards and provide value to clients."
          img={arrow}
          animation={img__about2_mobile}
        />
        <ValueBlock
          title="Efficiency"
          description="We deeply engage with our clients' business objectives, providing solutions that yield optimal results."
          img={arrow}
          animation={img__about3_mobile}
        />
        <ValueBlock
          title="Innovation"
          description="We promote continuous innovation, empowering employees to explore new ideas and technologies to meet client needs."
          img={arrow}
          animation={img__about4_mobile}
        />
      </div>
    </div>

    <div className="about__team">
      <div className="h1">OUR TEAM</div>
      <div className="team__section">
        <TeamMember name="Valerii Kryshtal" position="CEO" imageSrc={Valerii} />
        <TeamMember name="Paul Savage" position="Co-Founder" imageSrc={Paul} />
    
      </div>
    </div>

    <PrimaryBtn className="mobile-only-btn" />
  </div>
);

export default About;

