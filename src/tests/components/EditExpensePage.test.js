import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, history, expense, match, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    expense = expenses[2];
    match = {
        params: {
            id: expense.id
        }
    };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expense}
            match={match}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle startRemoveExpense', () => {
    const id = expense.id;
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id});
});
