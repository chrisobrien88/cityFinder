# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Gameplay Improvements

Scoring System changes:
- create a system that rewards players for guessing close to the city rather than penalising them less. e.g. 0km = 500 points 500km+ = 0 points
- users would get a pre-defined number of goes e.g. 10. 
- or have a set number of lives e.g. 3. They lose a life any time their guess is more than xkm away from the city.

Give difficulty options:
- difficulty of each city can be based on population size
- give the user the option to toggle parts of the map e.g. roads
- disable the zoom functionality
- give users x number of hints per go. An example of a hint would be to tell the user what country the city is in, zoom in in the direction of the city, etc.

Create a local and global leaderboard

### Code Improvements

Don't use MUI:
- it's great for basic prototyping but style editing is messy and clunky.





