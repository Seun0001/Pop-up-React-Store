# Pop-Up-React-Store Project

This project implements a number guessing game using React, Redux, and the Context API. The game generates random numbers, and the user picks the correct number from a set of options. The game continues until the number 20 is generated, and then it displays the user's score.

## Project Structure

### `public/index.html`

The HTML file that serves as the entry point for the React application.

### `src/components/Game.js`

The main game component that handles the number guessing game logic and UI.

### `src/components/Result.js`

The result component that displays the user's score and final message.

### `src/context/GameContext.js`

The Context API setup to manage game state globally.

### `src/redux/actions.js`

Defines action types and action creators for the Redux store.

### `src/redux/reducers.js`

Contains the reducer function that updates the Redux store based on actions.

### `src/redux/store.js`

Sets up the Redux store.

### `src/App.js`

The main App component that sets up routing and context provider.

### `src/index.js`

The entry point for the React application that renders the App component.

### `src/styles.css`

Basic CSS styles for the application.

## How to Run the Project

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
