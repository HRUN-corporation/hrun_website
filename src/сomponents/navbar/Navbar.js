import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link
import '../../responsive.css';
import './index.css';
import logo from '../../icons/Logo.png';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import NavMenu from '../navMenu/NavMenu';
import ContactWindow from '../contactWindow/ContactWindow';

const Navbar = () => {
  const [isContactWindowVisible, setContactWindowVisibility] = useState(false);

  const handleContactBtnClick = () => {
    setContactWindowVisibility(true);
  };

  const handleContactWindowClose = () => {
    setContactWindowVisibility(false);
  };

  return (
    <nav className='nav'>
      <div className="promo__logo">
        <Link to="/"> {/* Добавьте Link вокруг изображения */}
          <img src={logo} alt="Home" className='logo'/>
        </Link>
      </div>

      <NavMenu />
      
      <PrimaryBtn className="nav__btn" onClick={handleContactBtnClick} />
      
      {isContactWindowVisible && <ContactWindow onClose={handleContactWindowClose} />}
    </nav>
  );
}

export default Navbar;




