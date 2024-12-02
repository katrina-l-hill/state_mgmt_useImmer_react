import React from 'react';
import { useImmer } from 'use-immer';

const ShoppingListWithImmer = () => {
    const [shoppingList, updateShoppingList] = useImmer([
      {
        id: 1,
        name: 'Apples',
        quantity: 3,
        details: {
          category: 'Fruit',
          notes: 'Preferably organic'
        }
      },

    ]);
  
    const addItem = (newItem) => {
        updateShoppingList(draft => {
          draft.push(newItem);
        });
      };

    const updateItem = (id, updatedAttributes) => {
        updateShoppingList(draft => {
          const item = draft.find(item => item.id === id);
          if (item) {
            Object.assign(item, updatedAttributes);
          }
        });
    };

    const removeItem = (id) => {
        updateShoppingList(draft => {
          const index = draft.findIndex(item => item.id === id);
          if (index !== -1) {
            draft.splice(index, 1);
          }
        });
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
            {shoppingList.map(item => (
                <li key={item.id}>
                {item.name} - {item.quantity} ({item.details.category})
                <button onClick={() => removeItem(item.id)}>Remove</button>
                <button onClick={() => updateItem(item.id, { name: 'Updated Name' })}>Update</button>
                {/* Add more buttons/inputs for updating items */}
                </li>
            ))}
            </ul>
            <button onClick={() => addItem({
            id: shoppingList.length + 1,
            name: 'New Item',
            quantity: 1,
            details: { category: 'Misc', notes: '' }
            })}>Add Item</button>
        </div>
    );
};
  
export default ShoppingListWithImmer;