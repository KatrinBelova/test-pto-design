import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<Props> = ({
  variant = 'contained',
  type,
  size = 'lg',
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const { btn, btnContained, btnOutlined, btnSm, btnLg } = classes;

  return (
    <button
      className={classNames(btn, {
        [btnContained]: variant === 'contained',
        [btnOutlined]: variant === 'outlined',
        [btnSm]: size === 'sm',
        [btnLg]: size === 'lg',
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
