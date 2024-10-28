import styled from "styled-components";

export const ButtonComponent = styled.button`
    font-family: "Plus Jakarta Sans", sans-serif;
    width: 255px;
    height: 48px;
    border-radius: 24px;
    background: rgb(99, 95, 199);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    &:hover {
    background: rgb(168, 164, 255);
    border: 1px solid transparent;
    transition: all .5s ease-in-out;
}
`;
