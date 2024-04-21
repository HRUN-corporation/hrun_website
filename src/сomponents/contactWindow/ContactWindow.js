import React from "react";
import "./index.css";
import miniCross from '../../icons/miniCross.svg';
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn";

function ContactWindow({ onClose }) {
  // Функция для остановки всплытия события, чтобы клик внутри окна не закрывал его
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="contact__overlay" onClick={onClose}>
      <div className="contact__container" onClick={handleModalClick}>
        <div className="contact__cross">
          <a href="#" onClick={onClose}>
            <img src={miniCross} alt="miniCross" className="contact__cross_img" />
          </a>
        </div>
        <section className="contact__window">
          <div className="contact__wrapper">
            <div className="contact__title h2">
              Have a question?
            </div>
            <div className="contact__subtitle h2">
              Get in touch
            </div>
            <div className="contact__descr">
              <div>
                We value your feedback, questions, and inquiries. Whether
              </div>
              <div>
                you have a suggestion, require assistance, or just want to
              </div>
              <div>
                reach out to us, we are always here to provide support and
              </div>
              <div>
                assistance.
              </div>
            </div>
            <div className="contact__icons">
              {/* Иконки и контактная информация */}
            </div>
          </div>
          <div className="contact__form">
            <form action="#" className="contact__feed-form">
              {/* Форма с полями ввода */}
              <div className="contact__input">
                <input required name="name" type="text" id="name" placeholder="Your name" className='.input' />
                <label htmlFor="name"></label>
              </div>
              <div className="contact__input">
                <input required name="phone" type="tel" id="phone" placeholder="Phone number" className='.input' />
                <label htmlFor="phone"></label>
              </div>
              <div className="contact__input">
                <input required name="email" type="email" id="email" placeholder="Your email" className='.input'/>
                <label htmlFor="email"></label>
              </div>
              <div className="contact__comment">
                {/* Комментарий */}
              </div>
              <div className="contact__input">
                <textarea name="text" id="text"></textarea>
                <label htmlFor="text"></label>
              </div>
              <div className="contact__triggers">
                <div className="contact__policy">
                  <input required type="checkbox" id="myCheckbox" className="checkbox" />
                  <label htmlFor="myCheckbox"></label>
                  <span className="p2">I agree that my data <a href="#">will be collected and stored.</a></span>
                </div>
                <SecondaryBtn />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactWindow;
