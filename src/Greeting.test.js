import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('affiche le message correct', () => {
  render(<Greeting name="Asma" />);
  expect(screen.getByText('Bonjour, Asma')).toBeInTheDocument();
});

test('affiche le role si fourni', () => {
  render(<Greeting name="Asma" role="Developpeuse" />);
  expect(screen.getByText('Role : Developpeuse')).toBeInTheDocument();
});

test('n affiche pas le role si non fourni', () => {
  render(<Greeting name="Asma" />);
  expect(screen.queryByText(/Role/)).not.toBeInTheDocument();
});