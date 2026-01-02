import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '~/components/ui/Input';

describe('Input Component', () => {
  it('should render input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should accept and display value', async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'Hello World');
    expect(input).toHaveValue('Hello World');
  });

  it('should handle onChange events', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'A');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should accept placeholder text', () => {
    render(<Input placeholder="Enter text here" />);
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('should accept controlled value', () => {
    render(<Input value="Controlled" readOnly />);
    expect(screen.getByRole('textbox')).toHaveValue('Controlled');
  });

  it('should support different input types', () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" />);
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password');
  });

  it('should apply custom className', () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('custom-input');
  });

  it('should support required attribute', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('should support min and max length', () => {
    render(<Input minLength={5} maxLength={10} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('minLength', '5');
    expect(input).toHaveAttribute('maxLength', '10');
  });
});
