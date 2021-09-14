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
  it('changes cursor position while user is typing correctly', () => {
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

  it('changes the cursor position when using keyboard arrowleft', () => {
    const placeholder = 'Write a comment...';
    setup({ placeholder })
    const commentInput = screen.getByPlaceholderText(placeholder)
    expect(commentInput.selectionStart).toBe(0)
    userEvent.type(commentInput, 'acd')
    expect(commentInput.selectionStart).toBe(3)
    userEvent.keyboard("{arrowleft}")
    expect(commentInput.selectionStart).toBe(2)
    userEvent.keyboard("{arrowleft}")
    expect(commentInput.selectionStart).toBe(1)
  })

  it('changes the cursor position when using type arrowleft', () => {
    const placeholder = 'Write a comment...';
    setup({ placeholder })
    const commentInput = screen.getByPlaceholderText(placeholder)
    expect(commentInput.selectionStart).toBe(0)
    userEvent.type(commentInput, 'acd')
    expect(commentInput.selectionStart).toBe(3)
    userEvent.type(commentInput, "{arrowleft}")
    expect(commentInput.selectionStart).toBe(2)
    userEvent.type(commentInput, "{arrowleft}")
    expect(commentInput.selectionStart).toBe(1)
  })
})
