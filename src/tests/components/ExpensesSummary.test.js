import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test('should correctly render ExpensesSummary with 1 expense', function() {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', function() {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={944534}/>);
    expect(wrapper).toMatchSnapshot();
});