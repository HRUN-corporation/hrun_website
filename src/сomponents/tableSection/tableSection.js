import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import smallBusinessData from "./smallBusinessData/smallBusinessData";
import mediumBusinessData from "./mediumBusinessData/mediumBusinessData";
import largeBusinessData from "./largeBusinessServices/largeBusinessData";
import img__service1 from '../../img/Service__page_img/Img_service1.png';
import img__service1_mobile from '../../img/Service__page_img/Img__service1_mobile.png';
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceItem = ({ title, description }) => (
  <div className="serviceItem">
    <h3 className="h3 service__title">{title}</h3>
    <p className="p1 serviceItem__descr">{description}</p>
  </div>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


function animationService() {
	const tlPromo = gsap.timeline({});
	tlPromo
		.to(".service__section", {
			duration: 1.2,
			y: 0,
			ease: "back.out(1.1)",
		},
		"<"
	);
}

const CategoryRow = ({ category, services, img }) => (
	<article className="categoryRow">
    <div className="categoryHeader">
      <div className="h3 category">{category}</div>
      <img src={img} alt={category} className="serviceImage__arrow" />
    </div>
    <div className="servicesWrapper">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </article>

 
);

CategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  img: PropTypes.string.isRequired,
};

const BusinessSection = ({ title, subtitle, data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
		animationService();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSource = windowWidth >= 425 ? img__service1 : img__service1_mobile; 

  return (
    <div className="service__section">
      <header className="service__header">
        <h2 className="h1 table__header">{title}</h2>
        <img src={imageSource} alt="Service" className="serviceImage" />
      </header>
      <div className="table__subheader">{subtitle}</div>
      {data.map((table, index) => (
        <CategoryRow key={index} {...table} />
      ))}
    </div>
  );
};

BusinessSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      services: PropTypes.array.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Table() {
  return (
    <section className="service">
      <BusinessSection
        title="BASIC PACKAGE"
        subtitle="Fundamentals for your Business"
        data={smallBusinessData}
      />
      <BusinessSection
        title="STANDARD PACKAGE"
        subtitle="Enhanced capabilities for growth"
        data={mediumBusinessData}
      />
      <BusinessSection
        title="PREMIUM PACKAGE"
        subtitle="Full immersion into the world of innovation"
        data={largeBusinessData}
      />
    </section>
  );
}

export default Table;

