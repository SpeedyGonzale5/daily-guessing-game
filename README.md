# Daily Star - Music Guessing Game

A daily game where users try to guess a musician based on various attributes like genre, debut year, gender, Grammy awards, and country of origin.

## Features

- Daily musician guessing game
- Color-coded feedback for guesses
- Mobile-responsive design
- Artist name autocomplete
- Statistics tracking
- Offline functionality through PWA support

## Project Structure

```
daily-guessing-game/
│
├── index.html               # Main HTML file
├── service-worker.js        # Service worker for offline functionality
│
├── css/
│   └── styles.css           # Stylesheet with mobile optimization
│
└── js/
    ├── data.js              # Artist database
    ├── game.js              # Core game logic
    ├── ui.js                # UI-related functionality
    └── main.js              # Initialization code
```

## Architecture

The project follows a modular architecture:

1. **HTML (`index.html`)**: The main structure of the application separated from logic and styling.

2. **CSS (`styles.css`)**: All styles, including mobile optimizations for different screen sizes.

3. **JavaScript Modules**:
   - `data.js` - Contains the artist database
   - `game.js` - Handles core game logic and state management
   - `ui.js` - Manages UI rendering and event handling
   - `main.js` - Initializes the application

4. **Service Worker**: Provides offline capability for progressive web app functionality.

## Mobile Optimizations

- Responsive layout that adapts to different screen sizes
- Adjusted font sizes and spacing for mobile devices
- Column layout for guesses on smaller screens
- Improved touch targets for better mobile accessibility
- Landscape mode optimizations
- Enhanced dropdown behavior for mobile touch interfaces

## How to Play

1. Start typing an artist name in the search box
2. Select an artist from the dropdown or continue typing
3. Press Enter or click the play button to make a guess
4. Get feedback on your guess with color-coded information:
   - Green: Correct match
   - Yellow: Partial match
   - Red: Incorrect match
5. For numeric values (Grammy Awards, Debut Year), arrows indicate if the correct answer is higher (↑) or lower (↓)
6. Continue guessing until you find the correct artist

## Running the Game

Simply open `index.html` in a web browser to play the game. No server setup is required as everything runs client-side.

## Future Improvements

- Daily challenges that refresh each day
- More artists and attributes
- Social sharing of results
- Leaderboards and achievements
- Theme customization 