import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import 'jest-fetch-mock';
import Home from '../Components/Home';

const mockStore = configureMockStore();

describe('test missions ', () => {
  it('Render missions', () => {
    const mockData = {
      animelist: [{
        id: 1,
        images: { webp: { large_image_url: 'one-piece.jpg' } },
        titles: 'One-piece',
        score: 9.9,
        rank: 1,
      }, {
        id: 2,
        images: { webp: { large_image_url: 'one-piece.jpg' } },
        titles: 'jujutsu-kaisen',
        score: 9.9,
        rank: 2,
      }],
      genrelist: [{ id: 0, genre: 'Any' }, { id: 1, genre: 'Action' },
        { id: 2, genre: 'Adventure' }, { id: 6, genre: 'Demons' },
        { id: 9, genre: 'Ecchi' }, { id: 10, genre: 'Fantasy' },
        { id: 11, genre: 'Game' }, { id: 17, genre: 'Martial Arts' },
        { id: 27, genre: 'Shounen' }, { id: 30, genre: 'Sports' },
        { id: 31, genre: 'Super Power' }, { id: 37, genre: 'Supernatural' }],
      selected: 0,
      search: '',
      isLoading: true,
    };

    const store = mockStore({
      anime: mockData,
    });

    store.dispatch = jest.fn(() => Promise.resolve());

    render(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
        ,
      </>,
    );

    const elementsWithClass = screen.getAllByTestId('animelist');
    expect(elementsWithClass).toHaveLength(2);
  });
});
