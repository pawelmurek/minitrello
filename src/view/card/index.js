// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import {
    selectCard,
    setTitle,
    setDescription,
    removeCard
} from "state/actions/cards";
import { getTitle, getDescription, isSelected } from "state/selectors/cards";

import EditableTextField from "view/editable-text-field";
import RemoveImage from "view/img/remove.svg";

import { CardWrapper, Title, RemoveIcon } from "./styled";

import type { CardId, ListId } from "state/types";

type Props = {
    id: CardId,
    listId: ListId,
    title: string,
    description: string,
    isSelected: boolean,
    selectCard: CardId => void,
    setTitle: (CardId, string) => void,
    setDescription: (CardId, string) => void,
    removeCard: (CardId, ListId) => void
};

class CardComponent extends Component<Props> {
    static defaultProps = {
        listId: ""
    };

    setTitle = (text: string) => {
        !text && !this.props.description
            ? this.props.removeCard(this.props.id, this.props.listId)
            : this.props.setTitle(this.props.id, text);
    };

    setDescription = (text: string) => {
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
                    <div style={{ marginRight: "20px" }}>
                        <RemoveIcon
                            src={RemoveImage}
                            alt="Delete card"
                            onClick={() => this.props.removeCard(id, listId)}
                        />
                        <div>
                            <EditableTextField
                                text={title}
                                maxLength={30}
                                onChange={this.setTitle}
                            />
                        </div>
                        <div>
                            <EditableTextField
                                text={description}
                                placeholder="Add description"
                                fontSize={13}
                                isSingleLine={false}
                                onChange={this.setDescription}
                            />
                        </div>
                    </div>
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
