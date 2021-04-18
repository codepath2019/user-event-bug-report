import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Selectbox from './Selectbox';

describe('Selectbox', () => {
  const mockOnClick = jest.fn()
  const menuItems = [
    {
      labelText: "Space Pony",
      value: "spacePony",
    },
    {
      labelText: "Unicorn Tail",
      value: "unicornTail",
    },
  ];

  beforeEach(() => {
    render(
      <Selectbox
        onClick={mockOnClick}
        menuItems={menuItems}
      />
    )
  })

  it('can be clicked', () => {
    userEvent.click(screen.getByText(menuItems[0].labelText))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
