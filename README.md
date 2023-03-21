# check it out:

https://city-finder-fltwwrqhd-chrisobrien88.vercel.app/

# Objective

To give users a way to flex their geography muscles with the latest and greatest way to put their city-finding skills to the test.

The deals was this: create a game that allows users to guess where a city is on a map. You start on 1500 points but lose points based on how far your guess is from the actual location. If you guess within 50km, you're a winner winner chicken dinner and gain 1 point to your score.

We were supposed to keep the project down to 8 hours, but I couldn't help myself - I spent 16 hours on the project to make sure everything was looking slick and polished. After all, if you're gonna play a game, it might as well look good.

Give it a spin (link at top) and let me know what you think. Cheers!

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

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



