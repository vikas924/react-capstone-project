import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import 'jest-fetch-mock';
import Items from '../Components/Itemspage';

const mockStore = configureMockStore();

describe('test itemspage ', () => {
  it('Render items', () => {
    const mockData = {
      animelist: [],
      genrelist: [{ id: 0, genre: 'Any' }, { id: 1, genre: 'Action' },
        { id: 2, genre: 'Adventure' }, { id: 6, genre: 'Demons' },
        { id: 9, genre: 'Ecchi' }, { id: 10, genre: 'Fantasy' },
        { id: 11, genre: 'Game' }, { id: 17, genre: 'Martial Arts' },
        { id: 27, genre: 'Shounen' }, { id: 30, genre: 'Sports' },
        { id: 31, genre: 'Super Power' }, { id: 37, genre: 'Supernatural' }],
      selected: 21,
      search: '',
      isLoading: true,
    };
    const mockdetail = {
      details: {
        data: {
          mal_id: 21,
          images: { webp: { large_image_url: 'https://cdn.myanimelist.net/images/anime/6/73245l.webp' } },
          title: 'One Piece',
          score: 8.7,
          rank: 57,
          synopsis: 'hello',
          genres: [{ name: 'Action' }, { name: 'Fantasy' }, { name: 'Shounen' }],
          trailer: { embed_url: 'https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1' },
          status: 'Currently Airing',
          rating: 'PG-13 - Teens 13 or older',
          aired: { string: 'Oct 20, 1999 to ?' },
        },
      },
      id: 21,
      navigation: 'homepage',
      isLoading: false,
    };
    const store = mockStore({
      anime: mockData,
      animebyid: mockdetail,
    });

    store.dispatch = jest.fn(() => Promise.resolve());

    render(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <Items />
          </Provider>
        </BrowserRouter>
        ,
      </>,
    );
    const elementsWithClass = screen.getByTestId('title');
    const text = elementsWithClass.textContent;
    expect(text).toEqual('One Piece');
  });
});
