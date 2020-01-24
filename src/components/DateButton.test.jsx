import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DateButton from './DateButton';

afterEach(cleanup);

describe('DateButton.jsx', () => {
  test('render date Buttons correctly', () => {
    const handleClick = jest.fn();
    const component = render(
      <DateButton
        date={[12]}
        handleClick={handleClick}
      />
    );
    
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
  test('render that button clicks', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <DateButton
        date={[12]}
        handleClick={handleClick}
      />
    );

    const dateBtn = getByText('12');
    dateBtn.onclick = handleClick;
    fireEvent.click(dateBtn);

    expect(handleClick).toHaveBeenCalled();
  });
});
