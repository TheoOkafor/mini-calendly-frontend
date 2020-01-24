import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import TimeButton from './TimeButton';

afterEach(cleanup);

const time = {
  hour: 12,
  time: '2020-01-24 14:49:23.786829+00:00'
}
describe('TimeButton.jsx', () => {
  test('render TimeButton correctly', () => {
    const component = render(
      <TimeButton
        time={time}
      />
    );
    
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  test.skip('render that button clicks', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <TimeButton
        time={time}
        handleClick={handleClick}
      />
    );

    const dateBtn = getByText('12');
    dateBtn.onclick = handleClick;
    fireEvent.click(dateBtn);

    expect(handleClick).toHaveBeenCalled();
  });
});
