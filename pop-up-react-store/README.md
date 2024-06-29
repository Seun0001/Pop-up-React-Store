# Pop-Up-React-Store Project

```diff

+ This project implements a number guessing game using React, Redux, and the Context API. The game generates random numbers, and the user picks the correct number from a set of options. The game continues until the number 20 is generated, and then it displays the user's score.

```

`Pop-Up-React-Store Project`
`A number guessing game built with React, Redux, and the Context API.`

## Project Structure

```diff

+ public/index.html: The HTML file that serves as the entry point for the React application.
- src/components/Game.js: The main game component that handles the number guessing game logic and UI.
+ src/components/Result.js: The result component that displays the user's score and final message.
- src/context/GameContext.js: The Context API setup to manage game state globally.
+ src/redux/actions.js: Defines action types and action creators for the Redux store.
- src/redux/reducers.js: Contains the reducer function that updates the Redux store based on actions.
+ src/redux/store.js: Sets up the Redux store.
- src/App.js: The main App component that sets up routing and context provider.
+ src/index.js: The entry point for the React application that renders the App component.
- src/styles.css: Basic CSS styles for the application.

```

## About the Project

```diff

This project demonstrates the use of Redux and the Context API in a React application. Redux is used to manage global state, while the Context API is used to share state between components. The game generates random numbers, and the user picks the correct number from a set of options. The game continues until the number 20 is generated, and then it displays the user's score.

```

### Technologies Used

```diff

! React
! Redux
! Context API

```
