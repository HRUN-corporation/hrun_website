import React, { useState } from 'react';
import './index.css';

function SliderBtn({ className, onClick }) {
  const buttonClassName = `btn__slider ${className || ''}`;

  return (
    <div className={buttonClassName} onClick={onClick}>
      Learn more
    </div>
  );
}

export default SliderBtn;
