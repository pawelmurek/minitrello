import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    min-height: 20px;
    border-radius: 5px;
    background-color: ${props => (props.isSelected ? "#B2EBF2" : "#ECEFF1")};
    box-shadow: 0px 1px 3px 1px rgba(173, 173, 173, 1);
    cursor: ${props => (props.isSelected ? "normal" : "pointer")};
`;

export const Title = styled.div`
    padding: 5px;
    margin: 5px 0;
`;

export const RemoveIcon = styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    cursor: pointer;
`;
