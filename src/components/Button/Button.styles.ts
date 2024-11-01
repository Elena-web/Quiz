import styled from "styled-components";

export const ButtonComponent = styled.button<{
    $isPurple?: boolean
    $secondary?: boolean
    width: string
}>`
    font-family: "Plus Jakarta Sans", sans-serif;
    width: ${props => props.width ? props.width + 'px' : '100%'};
    height: 48px;
    border-radius: 24px;
    background: ${props => props.$isPurple ? 'rgb(99, 95, 199)' : "white"};
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;

    &:hover {
    background: ${props => props.$secondary ? 'rgb(168, 164, 255)' : 'rgb(99, 95, 199)'};
    border: 1px solid transparent;
    transition: all .5s ease-in-out;
}
`;
