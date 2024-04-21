import React, { useState } from 'react';
import './index.css';

function PopUpBtn({ className, onClick }) {
  const buttonClassName = `btn__popup ${className || ''}`;

  return (
    <div className={buttonClassName} onClick={onClick}>
      Get started
    </div>
  );
}

export default PopUpBtn;

