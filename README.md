# State Management with Immer in React 

## Author: Katrina Hill

### Description
This React project demonstrates how to manage complex state using the useImmer hook from the Immer library. It facilitates easier and more readable state updates for nested structures, specifically for a shopping list application.

### Features
1. Display Shopping List
    - Dynamically renders a list of shopping items.
    - Each item displays its name, quantity, and category.
2. Add New Items
    - Adds a new item to the shopping list with default attributes.
    - Example attributes for new items:
        - name: "New Item"
        - quantity: 1
        - details.category: "Misc"
3. Update Existing Items
    - Updates attributes of an existing item by id.
    - Allows modifying multiple properties of an item (e.g., name, quantity, details).
4. Remove Items
    - Removes an item from the shopping list by its id.
5. Immutable State Management
    - Leverages the use-immer hook to manage immutable state updates effortlessly.
    - Simplifies working with deeply nested objects like details.

### Files
- `ShoppingListWithImmer.js`: this file contains the core React component for the user profile with immer.
- `App.test.js`: this file contains test cases for the application, ensuring correct functionality of the task logic.

### How to run
- clone the repository: https://github.com/katrina-l-hill/state_mgmt_useImmer_react
- cd in the project directory: shopping-list-app
- run `npm install immer use-immer` to install the dependencies
- run `npm start` to launch the app in the browser