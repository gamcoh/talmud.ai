import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '~/components/ui/ProgressBar';

describe('ProgressBar Component', () => {
  it('should render progress bar', () => {
    render(<ProgressBar value={0.5} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should display correct progress percentage', () => {
    render(<ProgressBar value={0.75} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
  });

  it('should handle 0% progress', () => {
    render(<ProgressBar value={0} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('should handle 100% progress', () => {
    render(<ProgressBar value={1} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('should clamp values above 1 to 100%', () => {
    render(<ProgressBar value={1.5} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('should clamp negative values to 0%', () => {
    render(<ProgressBar value={-0.5} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('should show percentage text when showPercent is true', () => {
    render(<ProgressBar value={0.65} showPercent={true} />);
    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  it('should hide percentage text when showPercent is false', () => {
    render(<ProgressBar value={0.65} showPercent={false} />);
    expect(screen.queryByText('65%')).not.toBeInTheDocument();
  });

  it('should apply ocean variant styles', () => {
    const { container } = render(<ProgressBar value={0.5} variant="ocean" />);
    const progressFill = container.querySelector('.bg-gradient-to-r.from-ocean-500.to-ocean-300');
    expect(progressFill).toBeInTheDocument();
  });

  it('should apply warm variant styles', () => {
    const { container } = render(<ProgressBar value={0.5} variant="warm" />);
    const progressFill = container.querySelector('.bg-gradient-to-r.from-sand-500.to-gold-400');
    expect(progressFill).toBeInTheDocument();
  });

  it('should apply sage variant styles', () => {
    const { container } = render(<ProgressBar value={0.5} variant="sage" />);
    const progressFill = container.querySelector('.bg-gradient-to-r.from-sage-500.to-sage-300');
    expect(progressFill).toBeInTheDocument();
  });

  it('should set correct aria attributes', () => {
    render(<ProgressBar value={0.42} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-valuenow', '42');
  });
});
