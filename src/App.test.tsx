import { getByText, render, screen } from "@testing-library/react";
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  
  expect(screen.getByRole("h1")).toHaveTextContent(/BOCA/);
  //expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(screen.getByRole("a")).toHaveTextContent(/auth/);
  expect(screen.getByRole("nav")).toBeInTheDocument();
});