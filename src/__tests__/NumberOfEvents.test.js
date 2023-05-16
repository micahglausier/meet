import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} updateEvents={() => {}}/>); 
    });

    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    test('32 events display by default', () => {
        expect(NumberOfEventsWrapper.find('input.number').prop('type')).toBe('number');
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
    })

    test('renders selection correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
    });

    test('change number when user changes it', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
        NumberOfEventsWrapper.find('input.number').simulate('change', {
        target: { value: 9 },
        });
        expect(NumberOfEventsWrapper.state('number')).toBe(9);
    });


});

