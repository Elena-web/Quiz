import styled from "styled-components";

export const ButtonComponent = styled.button<{
    $isBlock?: boolean
    width: string
    $isBorder?: boolean
    $borderRadius: String
    $answer: boolean
    $isPurple?: boolean
    $color?: boolean
    $marginBottom?: string
    $secondary?: boolean
}>`
    display:  ${props => props.$isBlock ? 'block' : 'inline'};
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    width: ${props => props.width==='M' ? '80%' : '255' + 'px'};
    height: 48px;
    border:  ${props => props.$isBorder ? '1px solid #dedbdb' : "white"};
    border-radius:  ${props => props.$borderRadius==='S' ? '3px' : '24px'};
    background: ${props => props.$isPurple ? 'rgb(99, 95, 199)' : "white"};
    color:  ${props => props.$color ? 'black' : "white"};
    margin-bottom: ${props => props.$marginBottom}px;

    &:hover {
    background: ${props => props.$secondary ? 'rgb(168, 164, 255)' : 'white'};
    border:  ${props => props.$isBorder ? '1px solid #646cff' : '1px solid transparent'};
    transition: all .5s ease-in-out;
}
`;
