import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function;
};
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className='button' onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
};

export default Button;
