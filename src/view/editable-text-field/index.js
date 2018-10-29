import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.span`
    display: inline-block;
    width: ${props => (props.isEditing ? "100%" : "auto")};
    font-size: ${props => props.fontSize}px;
`;

const Text = styled.span`
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

const Input = styled.input`
    ${commonEditStyle};
    font-size: ${props => props.fontSize}px;
`;

const TextArea = styled.textarea`
    ${commonEditStyle};
    font-size: ${props => props.fontSize}px;
    height: 50px;
    font-family: "Helvetica", "Arial", sans-serif;
`;

class EditableTextField extends Component {
    static defaultProps = {
        fontSize: 16,
        isSingleLine: true,
        onChange: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            text: props.text || "",
            isEditing: false
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.onDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onDocumentClick);
    }

    componentDidUpdate() {
        this.inputRef && this.inputRef.focus();
    }

    onDocumentClick = event => {
        if (this.nodeRef && !this.nodeRef.contains(event.target)) {
            this.onSave();
        }
    };

    onKeyPress = event => {
        if (event.key === "Enter") {
            this.onSave();
        }
    };

    onSave = () => {
        if (this.state.isEditing) {
            this.setState({ isEditing: false });
            this.props.onChange && this.props.onChange(this.state.text);
        }
    };

    render() {
        const { isSingleLine, fontSize } = this.props;
        const { isEditing, text } = this.state;

        const EditComponent = isSingleLine ? Input : TextArea;

        return (
            <Wrapper
                ref={ref => (this.nodeRef = ref)}
                onClick={() => this.setState({ isEditing: true })}
                fontSize={fontSize}
                isEditing={isEditing}
            >
                {isEditing ? (
                    <EditComponent
                        type="text"
                        ref={ref => (this.inputRef = ref)}
                        value={text}
                        onChange={event =>
                            this.setState({ text: event.target.value })
                        }
                        onKeyPress={this.onKeyPress}
                        fontSize={fontSize}
                    />
                ) : (
                    <Text fontSize={fontSize}>{text}</Text>
                )}
            </Wrapper>
        );
    }
}

export default EditableTextField;
