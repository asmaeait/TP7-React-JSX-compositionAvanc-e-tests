import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre principal', () => {
  render(<App />);
  expect(screen.getByText('TP JSX et Composition')).toBeInTheDocument();
});

test('affiche la section Demo JSX', () => {
  render(<App />);
  expect(screen.getByText('Demo JSX')).toBeInTheDocument();
});

test('affiche la section HOC', () => {
  render(<App />);
  expect(screen.getByText('Higher-Order Component (HOC)')).toBeInTheDocument();
});

test('affiche la section Render Props', () => {
  render(<App />);
  expect(screen.getByText('Render Props')).toBeInTheDocument();
});
