import React from "react";
import { shallow } from "enzyme";

import EditableTextField from "./index";
import { Input, TextArea } from "./styled";

describe("Editable Text Field", () => {
    it("should use Input edit component", () => {
        const wrapper = shallow(<EditableTextField isSingleLine />);

        wrapper.simulate("click");
        expect(wrapper.find(Input).length).toEqual(1);
        expect(wrapper.find(TextArea).length).toEqual(0);
    });

    it("should use TextArea edit component", () => {
        const wrapper = shallow(<EditableTextField isSingleLine={false} />);

        wrapper.simulate("click");
        expect(wrapper.find(TextArea).length).toEqual(1);
        expect(wrapper.find(Input).length).toEqual(0);
    });

    it("should change edit mode after click", () => {
        const wrapper = shallow(<EditableTextField />);

        wrapper.simulate("click");
        expect(wrapper.state().isEditing).toEqual(true);

        wrapper.find(Input).simulate("keyPress", { key: "Enter" });
        expect(wrapper.state().isEditing).toEqual(false);
    });
});
