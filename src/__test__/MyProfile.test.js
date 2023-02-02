import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MyProfile from '../pages/MyProfile';

describe('MyProfile test', () => {
  test('to render profile page: ', () => {
    const myProfile = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});
