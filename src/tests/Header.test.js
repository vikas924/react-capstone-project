import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Header from '../Components/Header';

describe('Header', () => {
  it('should render the Header component', () => {
    // Arrange
    render(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
        ,
      </>,

    );

    // Assert
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
