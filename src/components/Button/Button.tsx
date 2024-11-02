import { ButtonComponent } from './Button.styles';
import React from 'react';

export interface IButtonProps {
    children: string
    value: string
    width: 'S' | 'M'
    isBlock?: boolean
    isBorder?: boolean
    borderRadius: 'S' | 'M'
    answer?: boolean
    isPurple?: boolean
    color?: boolean
    secondary?: boolean
    marginBottom?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: (event: React.FormEvent) => void
}

export const Button = ({
    children,
    value,
    width = 'M',
    isBlock = false,
    isBorder = true,
    borderRadius = 'S',
    answer = true,
    isPurple = false,
    color = true,
    secondary = false,
    marginBottom,
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
          value={value}
          width={width}
          $isBlock={isBlock}
          $isBorder={isBorder}
          $borderRadius={borderRadius}
          $answer={answer}
          $isPurple={isPurple}
          $color={color}
          $secondary={secondary}
          $marginBottom={marginBottom}
          type={type}
          onClick={buttonHandler}
        >
          {children}
        </ButtonComponent>
    )
}
export default Button;


