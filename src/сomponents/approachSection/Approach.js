import React, { useState, useEffect } from 'react';
import './index.css';
import img2 from '../../img/promo__page_img/Img2.png';
import img2_mobile from '../../img/promo__page_img/Img2_mobile.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Approach() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
		animationApproach();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSource = windowWidth >= 425 ? img2 : img2_mobile; // предполагаем, что 768px - это пороговое значение для мобильных устройств

	function animationApproach() {

		const tlImages = gsap.timeline({
			scrollTrigger: {
				trigger: ".promo",
				start: "top top",
				end: "+=50%",
				scrub: 1,
			},
		});
		
		tlImages.to(".approach", {
			duration: 1,
			opacity: 1,
			y: 0,
		});
		tlImages.fromTo(
			".img2",
			{ y: 80 },
			{
				y: -40,
			},
			"<"
		);
		
  }
  return (
    <div>
      <section className="approach">
        <div className="approach__wrapper">
          <h2 className="approach__title h2">
            While you spent time with your family, our solutions work towards your success.
          </h2>
          <p className="p1">
            We leverage top-tier Internet marketing tools to ensure the success of our valued partners. Our commitment includes a customer-centric approach, delivering predictable results, and an unwavering focus on enhancing profitability.
          </p>
        </div>
				<img src={imageSource} alt="Approach" className="img2" />

      </section>
    </div>
  );
}

export default Approach;

