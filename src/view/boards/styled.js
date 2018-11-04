import styled from "styled-components";

export const BoardsWrapper = styled.div`
    width: 400px;
    margin: 50px auto;
`;

export const ControlsWrapper = styled.div`
    display: flex;
`;

export const Input = styled.input`
    width: 70%;
    padding: 8px;
    font-size: 20px;
`;

export const Button = styled.button`
    width: 30%;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
`;

export const LinkWrapper = styled.div`
    display: block;
    text-align: center;
    margin: 20px 0;
    & a {
        display: inline-block;
        box-sizing: border-box;
        font-weight: bold;
        width: 100%;
        text-align: center;
        text-decoration: none;
        background-color: #eceff1;
        padding: 10px 15px;
        border-radius: 5px;
    }
`;
