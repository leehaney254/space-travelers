import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

describe('Mission test', () => {
  test('to render all missions: ', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
