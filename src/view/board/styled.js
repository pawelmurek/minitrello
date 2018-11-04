import styled from "styled-components";

export const BoardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 25px;
`;

export const AddList = styled.div`
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
    color: #1a0dab;
    line-height: 0.5;
    border-radius: 100%;
    &:hover {
        background-color: rgba(127, 127, 127, 0.25);
    }
    cursor: pointer;
`;

export const LinkWrapper = styled.div`
    margin: 15px 25px;
    & a {
        text-decoration: none;
    }
`;
