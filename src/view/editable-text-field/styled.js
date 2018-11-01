import styled from "styled-components";

export const Wrapper = styled.span`
    display: inline-block;
    width: ${props => (props.isEditing ? "100%" : "auto")};
    font-size: ${props => props.fontSize}px;
`;

export const Text = styled.span`
    display: inline-block;
    min-width: 50px;
    min-height: ${props => props.fontSize}px;
    padding: 5px;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
        background-color: rgba(127, 127, 127, 0.1);
    }
`;

const commonEditStyle = `
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    border-width: 0;
    padding: 5px;
    margin: 5px 0;
`;

export const Input = styled.input`
    ${commonEditStyle};
    font-size: ${props => props.fontSize}px;
`;

export const TextArea = styled.textarea`
    ${commonEditStyle};
    font-size: ${props => props.fontSize}px;
    height: 50px;
    font-family: "Helvetica", "Arial", sans-serif;
`;
