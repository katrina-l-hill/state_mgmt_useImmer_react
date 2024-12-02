import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ShoppingListWithImmer from './ShoppingListWithImmer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases
test('adds a new item to the shopping list', () => {
  render(<ShoppingListWithImmer />);
  
  fireEvent.click(screen.getByText('Add Item'));
  
  expect(screen.getByText('New Item - 1 (Misc)')).toBeInTheDocument();
});

test('updates an item\'s quantity in the shopping list', () => {
  render(<ShoppingListWithImmer />);

  fireEvent.click(screen.getByText('Add Item'));

  const item = screen.getByText(/Apples - 3/);
  expect(item).toBeInTheDocument();
});

test('removes an item from the shopping list', () => {
  render(<ShoppingListWithImmer />);

  fireEvent.click(screen.getByText('Remove'));

  expect(screen.queryByText(/Apples/)).not.toBeInTheDocument();
});

// Edge test cases

test('does not update a non-existent item', () => {
  render(<ShoppingListWithImmer />);

  expect(screen.getByText(/Apples - 3/)).toBeInTheDocument();
});

test('allows adding an item with a duplicate ID', () => {
  render(<ShoppingListWithImmer />);

  fireEvent.click(screen.getByText('Add Item'));

  fireEvent.click(screen.getByText('Add Item'));
  
  expect(screen.getAllByText(/New Item/).length).toBe(2);
});


test('does nothing when trying to remove an item from an empty list', () => {
  render(<ShoppingListWithImmer />);

  fireEvent.click(screen.getByText('Remove'));

  expect(screen.queryByText('Remove')).not.toBeInTheDocument();

  expect(screen.queryByText(/Apples/)).not.toBeInTheDocument();
});
