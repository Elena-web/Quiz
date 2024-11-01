import { ButtonComponent } from './Button.styles';
import React from 'react';

export interface IButtonProps {
    children: string
    isPurple?: boolean
    secondary?: boolean
    width: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: (event: React.FormEvent) => void
}

export const Button = ({
    children,
    isPurple = true,
    secondary = true,
    width,
    type = 'button',
    onClick,
   }: IButtonProps) => {
    const buttonHandler = (event: React.FormEvent) => {
      if (onClick) {
        event.preventDefault()
        onClick(event)
      }
    }
    return (
        <ButtonComponent
          $isPurple={isPurple}
          $secondary={secondary}
          width={width}
          type={type}
          onClick={buttonHandler}
        >
          {children}
        </ButtonComponent>
    )
}
export default Button;


