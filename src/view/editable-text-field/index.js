// @flow

import React, { Component } from "react";

import { Wrapper, Text, Input, TextArea } from "./styled";

type Props = {
    text: string,
    placeholder: string,
    fontSize: number,
    maxLength: number | void,
    isSingleLine: boolean,
    onChange: string => void
};

type State = {
    text: string,
    isEditing: boolean
};

class EditableTextField extends Component<Props, State> {
    static defaultProps = {
        text: "",
        placeholder: "",
        fontSize: 16,
        maxLength: undefined,
        isSingleLine: true,
        onChange: () => {}
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            text: props.text || "",
            isEditing: false
        };
    }

    nodeRef: ?HTMLElement;

    inputRef: ?HTMLElement;

    componentDidMount() {
        document.addEventListener("mousedown", this.onDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onDocumentClick);
    }

    componentDidUpdate() {
        this.inputRef && this.inputRef.focus();
    }

    onDocumentClick = (event: MouseEvent) => {
        if (
            this.nodeRef &&
            event.target instanceof Node &&
            !this.nodeRef.contains(event.target)
        ) {
            this.onSave();
        }
    };

    onKeyPress = (event: SyntheticKeyboardEvent<any>) => {
        if (event.key === "Enter") {
            this.onSave();
        }
    };

    onSave = () => {
        if (this.state.isEditing && this.state.text) {
            this.setState({ isEditing: false });
            this.props.onChange && this.props.onChange(this.state.text);
        }
    };

    render() {
        const { isSingleLine, fontSize, maxLength, placeholder } = this.props;
        const { isEditing, text } = this.state;

        const EditComponent: any = isSingleLine ? Input : TextArea;

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
                        maxLength={maxLength}
                        onChange={(event: SyntheticInputEvent<any>) =>
                            this.setState({ text: event.target.value })
                        }
                        onKeyPress={this.onKeyPress}
                        fontSize={fontSize}
                    />
                ) : (
                    <Text
                        fontSize={fontSize}
                        showPlaceholder={placeholder && !text}
                    >
                        {text || placeholder}
                    </Text>
                )}
            </Wrapper>
        );
    }
}

export default EditableTextField;
