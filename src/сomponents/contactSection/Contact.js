import React, { useState, useEffect } from 'react';
import './index.css';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

function Contact() {
  const [isFilled, setIsFilled] = useState({ name: false, phone: false, email: false, text: false });

  useEffect(() => {
    const inputs = document.querySelectorAll('.contact__input input, .contact__input textarea');
    inputs.forEach(input => {
      const checkInput = () => {
        setIsFilled(prev => ({ ...prev, [input.id]: input.value.trim() !== '' }));
      };

      // Проверяем ввод сразу при загрузке страницы и при каждом изменении
      checkInput();
      input.addEventListener('input', checkInput);

      // Очистка обработчика событий при удалении компонента
      return () => {
        input.removeEventListener('input', checkInput);
      };
    });
  }, []);

  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__title h2">
          Have a question?
        </div>
        <div className="contact__subtitle h2">
          Get in touch
        </div>
        <div className="contact__descr">
          <div>We value your feedback, questions, and inquiries. Whether</div>
          <div>you have a suggestion, require assistance, or just want to</div>
          <div>reach out to us, we are always here to provide support and</div>
          <div>assistance.</div>          
        </div>
        <div className="contact__icons">
          {/* ... Иконки и контактная информация ... */}
        </div>
      </div>
      <div className="contact__form">
        <form action="#" className="contact__feed-form">
          <div className="contact__input">
            <input 
              required 
              name="name" 
              type="text" 
              id="name" 
              placeholder="Your name" 
              className={isFilled.name ? 'input filled' : 'input'} 
            />
            <label htmlFor="name"></label>
          </div>
          <div className="contact__input">
            <input 
              required 
              name="phone" 
              type="tel" 
              id="phone" 
              placeholder="Phone number" 
              className={isFilled.phone ? 'input filled' : 'input'} 
            />
            <label htmlFor="phone"></label>
          </div>
          <div className="contact__input">
            <input 
              required 
              name="email" 
              type="email" 
              id="email" 
              placeholder="Your email" 
              className={isFilled.email ? 'input filled' : 'input'}
            />
            <label htmlFor="email"></label>
          </div>
          <div className="contact__comment">
            <textarea 
              name="text" 
              id="text" 
              className={isFilled.text ? 'filled' : ''}
              placeholder="How can we help you? Feel free to get in touch with us!"></textarea>
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
  );
}

export default Contact;

