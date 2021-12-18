import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { ChatList } from "./index";
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Тестируем презентационный компонент (единственный) ChatList', () => {
  
  it("проверяем вызов функции addChat при клике на кнопку 'добавить чат'", () => {
    const addChat = jest.fn();
    const component = render(
        <Provider store={store}>
            <ChatList addChat={addChat}  chats={[]} />
        </Provider>
    );
    fireEvent.click(component.getByText('+'));
    expect(addChat).toBeCalled();
    
  });

  it("проверяем вызов функции changeChatName при внесении изменений в поле для ввода названия чата", () => {
    const changeChatName = jest.fn();
    const component = render(
        <Provider store={store}>
            <ChatList changeChatName={changeChatName}  chats={[]} />
        </Provider>
    );
    fireEvent.change(component.getByLabelText(/создать чат/i), {target: {value: 'sldkfj'}});
    expect(changeChatName).toBeCalled();

  });
})