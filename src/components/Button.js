import React from 'react';

const Button = ({ label, onClick }) => (
    <button onClick={onClick} className='timer-btn btn btn btn-primary'>{label}</button>
);

export default Button;
