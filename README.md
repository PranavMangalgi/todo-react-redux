## Todo-Manager App
This is a guide to the Todo-Manager app, a simple yet powerful tool for managing daily tasks. The app is built using React, Redux, and other libraries. Here's how to use the app and its technologies.

### Technologies Used
- React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces. React allows for efficient updates and seamless user interactions.
- Redux: State management is handled by Redux, a predictable state container for JavaScript apps. It ensures a single source of truth for your application's state, making it easy to manage and modify.
- React-Redux: This library connects React with Redux, enabling the components to access the global state and dispatch actions.
- @reduxjs/toolkit: The app utilizes the Redux Toolkit, a set of tools and conveniences for Redux development. It simplifies the Redux setup and reduces boilerplate code.
- React Icons: Icons, such as the delete icon, are provided by the react-icons library. It enhances the visual appeal of the application.
- Nanoid: For generating unique IDs, the app uses Nanoid, a tiny, secure, and URL-friendly unique string ID generator.
## Project Structure
- src/components: Contains React components for different sections of the app, such as AllTodos, ActiveTodos, Completed, and InputAdd.
- src/features: Holds the Redux slice (todoSlice.js) with actions and reducers for managing todos.
- src/index.js: The entry point of the React app, rendering the main App component.
- src/store.js: Configures the Redux store using @reduxjs/toolkit.
## How to Run the App
- Clone the repository to your local machine.
- Navigate to the project directory.
- Run `npm install` to install the necessary dependencies.
- Execute `npm run dev` to start the development server.
- Open your browser and visit http://localhost:3000 to use the Todo-Manager app.
Usage
- Adding Todos: Enter details in the input field and click the "Add" button.
- Managing Todos: Mark todos as completed by checking the checkbox. Completed todos are moved to the "Completed" section.
- Deleting Todos: Click the delete icon next to a completed todo to remove it. Use the "Delete All" button in the "Completed" section to remove all completed todos.