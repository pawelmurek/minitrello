import styled from "styled-components";

export const ListWrapper = styled.div`
    position: relative;
    width: 400px;
    min-height: 50px;
    border-radius: 5px;
    padding: 10px;
    background-color: #cfd8dc;
    & .card-wrapper {
        padding-top: 15px;
    }
    &:not(:last-child) {
        margin-right: 20px;
    }
    & .add-card,
    & .remove-list {
        visibility: hidden;
    }
    &:hover .add-card,
    &:hover .remove-list {
        visibility: visible;
    }
`;

export const ListTitle = styled.h4`
    text-align: center;
    margin: 10px 0;
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
