import React from 'react';
import PromoSection from '../../сomponents/promoSection/PromoSection';
import './index.css';
import Approach from '../../сomponents/approachSection/Approach';
import Service from '../../сomponents/serviceSection/ServiceSection';
import Contact from '../../сomponents/contactSection/Contact';
import ContactWindow from '../../сomponents/contactWindow/ContactWindow';

function Home() {
	return (
		<div>
			<PromoSection />
			{/* <ContactWindow /> */}
			<Approach />
			<Service />
			<Contact />
		</div>
	)
}

export default Home

