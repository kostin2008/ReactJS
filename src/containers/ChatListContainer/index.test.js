import React from "react";
import { Provider } from "react-redux";
import { store } from '../../store';
import { render, fireEvent, screen, } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

import { ChatListContainer } from "./index";


describe('Тестируем компонент-контейнер (единственный) ChatListContainer', () => {

  
  it("проверяем отрисовку компонента с текстом '+'", () => {
  
    
    render(<Provider store={store}><BrowserRouter><ChatListContainer/></BrowserRouter></Provider>);

    const result = screen.getByText('+');

    expect(result).toBeInTheDocument();
    
   

  });
  it("проверяем отрисовку компонента с текстом лэйбла 'чат'", () => {
  
    
    render(<Provider store={store}><BrowserRouter><ChatListContainer/></BrowserRouter></Provider>);

    expect(screen.getByLabelText(/чат/i)).toBeInTheDocument();

  });

  it("проверяем отстуствие значений в поле input до ввода", () => {
  
    
    render(<Provider store={store}><BrowserRouter><ChatListContainer/></BrowserRouter></Provider>);

    expect(screen.getByLabelText(/чат/i)).toBeEmptyDOMElement();

  });

})
