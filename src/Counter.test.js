import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('affiche compteur a 0 au depart', () => {
  render(<Counter />);
  expect(screen.getByText('Compteur : 0')).toBeInTheDocument();
});

test('incremente le compteur au clic', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});

test('decremente le compteur au clic', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByText('Compteur : -1')).toBeInTheDocument();
});

test('remet le compteur a 0 au reset', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('Compteur : 0')).toBeInTheDocument();
});