import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleTextarea from './SimpleTextarea';

function setup(params = {}) {
  const {
    placeholder,
    value,
  } = params;

  const mockOnChange = jest.fn();
  const mockOnEnter = jest.fn();

  const component = render(
    <SimpleTextarea
      placeholder={placeholder}
      value={value}
      onChange={mockOnChange}
      onEnter={mockOnEnter}
    />
  );

  return {
    component,
    mockOnChange,
    mockOnEnter,
  }
};

describe('SimpleTextarea', () => {
  it.only('does not change the cursor position while user is typing', () => {
    const placeholder = 'Write a comment...';
    setup({ placeholder })
    const commentInput = screen.getByPlaceholderText(placeholder)
    expect(commentInput.selectionStart).toBe(0)
    userEvent.type(commentInput, 'acd')
    expect(commentInput.selectionStart).toBe(3)
    commentInput.setSelectionRange(1, 1)
    expect(commentInput.selectionStart).toBe(1)
    userEvent.keyboard('b')
    expect(commentInput).toHaveDisplayValue('abcd')
    expect(commentInput.selectionStart).toBe(2)
  })
})
