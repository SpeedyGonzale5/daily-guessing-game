// Game state and core functions
class GameManager {
    constructor() {
        this.gameState = {
            attempts: 1,
            guesses: [],
            todaysArtist: null,
            gameWon: false,
            stats: {
                gamesWon: 0,
                totalAttempts: 0,
                gamesPlayed: 0
            }
        };
        
        this.loadGameState();
        
        // Initialize with a random artist if none is set
        if (!this.gameState.todaysArtist) {
            this.gameState.todaysArtist = this.getRandomArtist();
        }
    }
    
    // Load game state from localStorage
    loadGameState() {
        const savedState = localStorage.getItem('dailyStarState');
        if (savedState) {
            this.gameState = JSON.parse(savedState);
        }
    }
    
    // Save game state to localStorage
    saveGameState() {
        localStorage.setItem('dailyStarState', JSON.stringify(this.gameState));
    }
    
    // Get a random artist
    getRandomArtist() {
        return artists[Math.floor(Math.random() * artists.length)];
    }
    
    // Get a random artist different from the specified one
    getDifferentRandomArtist(excludeArtist) {
        let randomArtist;
        do {
            randomArtist = this.getRandomArtist();
        } while (randomArtist.name === excludeArtist.name);
        
        return randomArtist;
    }
    
    // Make a guess
    makeGuess(artistName) {
        if (artistName.trim() === '') return { success: false, message: 'Please enter an artist name' };
        
        const artist = artists.find(a => a.name.toLowerCase() === artistName.toLowerCase());
        if (!artist) {
            return { success: false, message: 'Artist not found in database' };
        }
        
        if (this.gameState.gameWon) {
            return { success: false, message: 'You already won! Click reset to start over.' };
        }
        
        this.gameState.guesses.push(artist);
        
        if (artist.name === this.gameState.todaysArtist.name) {
            this.gameState.gameWon = true;
            this.gameState.stats.gamesWon++;
            this.gameState.stats.gamesPlayed++;
            this.saveGameState();
            return { success: true, message: 'Congratulations! You found today\'s artist!', correct: true };
        }
        
        this.gameState.attempts++;
        this.gameState.stats.totalAttempts++;
        this.saveGameState();
        
        return { success: true, message: 'Guess recorded', correct: false };
    }
    
    // Reset the game
    resetGame() {
        this.gameState = {
            attempts: 1,
            guesses: [],
            todaysArtist: this.getRandomArtist(),
            gameWon: false,
            stats: this.gameState.stats
        };
        
        this.saveGameState();
        return { success: true, message: 'Game reset! Try to guess the new artist.' };
    }
    
    // Give up and reveal the answer
    giveUp() {
        if (this.gameState.gameWon) {
            return { success: false, message: 'You already won!' };
        }
        
        this.gameState.stats.gamesPlayed++;
        this.saveGameState();
        
        return { 
            success: true, 
            message: `The correct artist was ${this.gameState.todaysArtist.name}!`,
            artist: this.gameState.todaysArtist.name 
        };
    }
    
    // Get match class for color coding
    getMatchClass(guessValue, correctValue) {
        if (guessValue === correctValue) return 'correct';
        
        if (typeof guessValue === 'number' && typeof correctValue === 'number') {
            const diff = Math.abs(guessValue - correctValue);
            if (diff <= 2) return 'partial';
        }
        
        if (typeof guessValue === 'string' && typeof correctValue === 'string') {
            if (guessValue.toLowerCase() === correctValue.toLowerCase()) return 'correct';
            if (guessValue.length >= 3 && correctValue.includes(guessValue) || 
                correctValue.length >= 3 && guessValue.includes(correctValue)) {
                return 'partial';
            }
        }
        
        return 'incorrect';
    }
    
    // Get all artists for autocomplete
    getAllArtists() {
        return artists;
    }
    
    // Filter artists based on search text
    filterArtists(searchText) {
        const value = searchText.toLowerCase();
        if (value.length < 2) {
            return artists;
        }
        
        return artists.filter(artist => 
            artist.name.toLowerCase().includes(value)
        );
    }
}

// Create a global instance
const gameManager = new GameManager(); 