import React from 'react';

interface Props {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary' | 'default' | 'error';
  styles?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  styles,
  variant = 'default',
  disabled
}) => {
  return (
    <button
      className={`${variant} text-white transition duration-300 hover:bg-opacity-90 font-medium rounded text-base px-4 py-1 text-center block ${
        styles ? styles : null
      } ${disabled ? 'opacity-20 cursor-not-allowed' : null}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
