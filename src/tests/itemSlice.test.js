import itemReducer, { navigation, Home } from '../redux/itemDetail/itemSlice';

describe('test detailPage', () => {
  it('Type of navigation', () => {
    const action = navigation();
    const ecpectedAction = {
      type: 'animelist/navigation',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('Type of Home', () => {
    const action = Home();
    const ecpectedAction = {
      type: 'animelist/Home',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('update id and navigation', () => {
    const state = {
      details: [],
      navigation: 'homepage',
      id: '',
      isLoading: true,
    };

    const action = navigation(10);
    const result = itemReducer(state, action);

    const newState = {
      details: [],
      navigation: 'detailspage',
      id: 10,
      isLoading: true,
    };

    expect(newState).toMatchObject(result);
  });

  it('update navigation to homepage', () => {
    const state = {
      details: [],
      navigation: 'detailspage',
      id: '',
      isLoading: true,
    };

    const action = Home();
    const result = itemReducer(state, action);

    const newState = {
      details: [],
      navigation: 'homepage',
      id: '',
      isLoading: true,
    };

    expect(newState).toMatchObject(result);
  });
});
