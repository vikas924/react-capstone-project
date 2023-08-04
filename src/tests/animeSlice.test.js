import animeReducer, { filtergenre, searchanime } from '../redux/animelist/animeSlice';

describe('test animelist', () => {
  it('Type of filter genre', () => {
    const action = filtergenre(3);
    const ecpectedAction = {
      payload: 3,
      type: 'animelist/filtergenre',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('Type of searchanime anime', () => {
    const action = searchanime();
    const ecpectedAction = {
      type: 'animelist/searchanime',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('filter genre', () => {
    const state = {
      animelist: [],
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

    const action = filtergenre(3);
    const result = animeReducer(state, action);

    const newState = {
      animelist: [],
      genrelist: [
        { id: 0, genre: 'Any' },
        { id: 1, genre: 'Action' },
        { id: 2, genre: 'Adventure' },
        { id: 6, genre: 'Demons' },
        { id: 9, genre: 'Ecchi' },
        { id: 10, genre: 'Fantasy' },
        { id: 11, genre: 'Game' },
        { id: 17, genre: 'Martial Arts' },
        { id: 27, genre: 'Shounen' },
        { id: 30, genre: 'Sports' },
        { id: 31, genre: 'Super Power' },
        { id: 37, genre: 'Supernatural' },
      ],
      selected: 3,
      search: '',
      isLoading: true,
    };

    expect(newState).toMatchObject(result);
  });

  it('Search anime', () => {
    const state = {
      animelist: [],
      genrelist: [{ id: 0, genre: 'Any' }, { id: 1, genre: 'Action' },
        { id: 2, genre: 'Adventure' }, { id: 6, genre: 'Demons' },
        { id: 9, genre: 'Ecchi' }, { id: 10, genre: 'Fantasy' },
        { id: 11, genre: 'Game' }, { id: 17, genre: 'Martial Arts' },
        { id: 27, genre: 'Shounen' }, { id: 30, genre: 'Sports' },
        { id: 31, genre: 'Super Power' }, { id: 37, genre: 'Supernatural' }],
      selected: 3,
      search: '',
      isLoading: false,
    };

    const obj = 'abc';

    const action = searchanime(obj);
    const result = animeReducer(state, action);

    const newState = {
      animelist: [],
      genrelist: [
        { id: 0, genre: 'Any' },
        { id: 1, genre: 'Action' },
        { id: 2, genre: 'Adventure' },
        { id: 6, genre: 'Demons' },
        { id: 9, genre: 'Ecchi' },
        { id: 10, genre: 'Fantasy' },
        { id: 11, genre: 'Game' },
        { id: 17, genre: 'Martial Arts' },
        { id: 27, genre: 'Shounen' },
        { id: 30, genre: 'Sports' },
        { id: 31, genre: 'Super Power' },
        { id: 37, genre: 'Supernatural' },
      ],
      selected: 3,
      search: 'abc',
      isLoading: false,
    };

    expect(newState).toMatchObject(result);
  });
});
