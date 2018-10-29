import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
    selectCard,
    setTitle,
    setDescription,
    removeCard
} from "state/actions/cards";
import { getTitle, getDescription, isSelected } from "state/selectors/cards";

import EditableTextField from "view/editable-text-field";
import RemoveImage from "view/img/remove.svg";

const CardWrapper = styled.div`
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

const Title = styled.div`
    padding: 5px;
    margin: 5px 0;
`;

const RemoveIcon = styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    cursor: pointer;
`;

class CardComponent extends Component {
    static defaultProps = {
        listId: ""
    };

    setTitle = text => {
        !text && !this.props.description
            ? this.props.removeCard(this.props.id, this.props.listId)
            : this.props.setTitle(this.props.id, text);
    };

    setDescription = text => {
        !text && !this.props.title
            ? this.props.removeCard(this.props.id, this.props.listId)
            : this.props.setDescription(this.props.id, text);
    };

    render() {
        const {
            id,
            listId,
            title,
            description,
            isSelected,
            selectCard
        } = this.props;

        return (
            <CardWrapper isSelected={isSelected} onClick={() => selectCard(id)}>
                {isSelected ? (
                    <>
                        <RemoveIcon
                            src={RemoveImage}
                            alt="Delete card"
                            onClick={() => this.props.removeCard(id, listId)}
                        />
                        <div>
                            <EditableTextField
                                text={title}
                                onChange={this.setTitle}
                            />
                        </div>
                        <div>
                            <EditableTextField
                                text={description}
                                fontSize={13}
                                isSingleLine={false}
                                onChange={this.setDescription}
                            />
                        </div>
                    </>
                ) : (
                    <Title>{title}</Title>
                )}
            </CardWrapper>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        title: getTitle(state, ownProps.id),
        description: getDescription(state, ownProps.id),
        isSelected: isSelected(state, ownProps.id)
    }),
    dispatch => ({
        selectCard: id => dispatch(selectCard(id)),
        setTitle: (id, text) => dispatch(setTitle(id, text)),
        setDescription: (id, text) => dispatch(setDescription(id, text)),
        removeCard: (id, listId) => dispatch(removeCard(id, listId))
    })
)(CardComponent);
