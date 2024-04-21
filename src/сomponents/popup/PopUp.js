import React, { useState, useEffect } from 'react';
import './index.css';
import popUpImg from '../../img/promo__page_img/PopUp.png';
import miniCross from "../../icons/miniCross.svg";
import PopUpBtn from '../popUpBtn/PopUpBtn';

const PopUp = ({ onClose }) => {
  // Состояние для отслеживания видимости PopUp
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Устанавливаем видимость в зависимости от ширины окна
      setIsVisible(window.innerWidth > 727);
    };

    // Вызываем handleResize при монтировании компонента,
    // чтобы установить начальное состояние видимости
    handleResize();

    // Добавляем обработчик события resize для отслеживания изменений размера окна
    window.addEventListener('resize', handleResize);

    // Убираем обработчик события при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Рендерим PopUp только если isVisible === true
  if (!isVisible) {
    return null;
  }

  return (
    <div className='popup'>
      <a href='#' onClick={(event)=>{
				event.preventDefault();
				onClose();
			}}>
        <img src={miniCross} alt="popup__cross" className="popup__cross"/>
      </a>
      <div className='popup__wrapper'>
        <img src={popUpImg} alt="popup__img" className="popup__img" />
        <div className='popup__content'>
          <div className='popup__header'>Unlock Your Web Wisdom!</div>
          <div className='popup__descr'>Take Our Quick Quiz and Discover How Well You Know Our Company and Services. Ready to Dive In?</div>
          <PopUpBtn />
        </div>
      </div>
    </div>
  );
}

export default PopUp;

