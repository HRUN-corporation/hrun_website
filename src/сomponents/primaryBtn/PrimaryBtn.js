import React, { useState } from 'react';
import './index.css';

function PrimaryBtn({ className, onClick }) {
  const buttonClassName = `btn ${className || ''}`;

  return (
    <div className={buttonClassName} onClick={onClick}>
      Contact us
    </div>
  );
}

export default PrimaryBtn;


