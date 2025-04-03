// UI-related functionality
class GameUI {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.elements = {
            artistInput: document.getElementById('artist-input'),
            guessButton: document.getElementById('guess-button'),
            resetButton: document.getElementById('reset-button'),
            giveUpButton: document.getElementById('give-up-button'),
            suggestionsContainer: document.getElementById('artist-suggestions'),
            guessHistory: document.getElementById('guess-history'),
            mainContainer: document.getElementById('main-container'),
            statsContainer: document.getElementById('stats-container'),
            traitGrid: document.getElementById('trait-grid'),
            attributeHeaders: document.getElementById('attribute-headers'),
            colorIndicator: document.getElementById('color-indicator'),
            gamesWon: document.getElementById('games-won'),
            avgAttempts: document.getElementById('avg-attempts'),
            previousArtist: document.getElementById('previous-artist'),
            previousMusician: document.getElementById('previous-musician'),
            toast: document.getElementById('toast')
        };
        
        this.isMobile = window.innerWidth <= 768;
        
        // Add window resize listener to detect mobile/desktop
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;
            
            // If transitioning between mobile and desktop, update UI
            if (wasMobile !== this.isMobile) {
                this.updateGuessHistory();
                this.updateContainersVisibility();
            }
        });
        
        this.initEventListeners();
    }
    
    // Initialize event listeners
    initEventListeners() {
        // Artist input and suggestions
        this.elements.artistInput.addEventListener('focus', () => this.showAllArtists());
        this.elements.artistInput.addEventListener('input', () => this.filterArtists());
        this.elements.artistInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.makeGuess();
            }
        });
        
        // Buttons
        this.elements.guessButton.addEventListener('click', () => this.makeGuess());
        this.elements.resetButton.addEventListener('click', () => this.resetGame());
        this.elements.giveUpButton.addEventListener('click', () => this.giveUp());
        
        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.elements.artistInput.contains(e.target)) {
                this.elements.suggestionsContainer.style.display = 'none';
            }
        });

        // Show previous musician immediately
        this.updatePreviousMusician();
    }
    
    // Update all UI elements
    updateUI() {
        this.updateStats();
        this.updateGuessHistory();
        this.updateContainersVisibility();
        this.updatePreviousMusician();
    }
    
    // Update previous musician display
    updatePreviousMusician() {
        const yesterdayArtist = this.gameManager.gameState.gameWon 
            ? this.gameManager.gameState.todaysArtist.name 
            : this.gameManager.getDifferentRandomArtist(this.gameManager.gameState.todaysArtist).name;
        
        this.elements.previousArtist.textContent = yesterdayArtist;
        this.elements.previousMusician.classList.remove('hidden');
    }
    
    // Update statistics display
    updateStats() {
        const stats = this.gameManager.gameState.stats;
        this.elements.gamesWon.textContent = stats.gamesWon;
        this.elements.avgAttempts.textContent = 
            stats.gamesPlayed > 0 
                ? (stats.totalAttempts / stats.gamesPlayed).toFixed(1) 
                : '0';
    }
    
    // Create a guess grid item
    createGuessGrid(guess) {
        // Create container with proper class and explicit styles for visibility
        const guessGrid = document.createElement('div');
        guessGrid.className = 'guess-grid';
        guessGrid.style.display = 'flex';
        guessGrid.style.visibility = 'visible';
        guessGrid.style.opacity = '1';
        guessGrid.style.minHeight = '50px';
        
        // Add artist name first
        const nameBox = document.createElement('div');
        nameBox.className = 'guess-box artist-name';
        nameBox.textContent = guess.name;
        nameBox.style.minWidth = '130px';
        nameBox.style.flex = '0 0 130px';
        guessGrid.appendChild(nameBox);
        
        // Add other properties with fixed width and flex properties
        const properties = ['genre', 'debutYear', 'gender', 'grammyAwards', 'countryOfOrigin'];
        properties.forEach((prop, index) => {
            const box = document.createElement('div');
            box.className = `guess-box ${this.gameManager.getMatchClass(guess[prop], this.gameManager.gameState.todaysArtist[prop])}`;
            box.textContent = guess[prop];
            box.style.minWidth = '100px';
            box.style.flex = '0 0 100px';
            box.style.margin = '0 0.75rem 0 0';
            box.style.display = 'flex';
            box.style.alignItems = 'center';
            box.style.justifyContent = 'center';
            
            // Add arrows for numeric values
            if ((prop === 'grammyAwards' || prop === 'debutYear') && 
                guess[prop] !== this.gameManager.gameState.todaysArtist[prop]) {
                const arrow = document.createElement('span');
                arrow.className = 'arrow-indicator';
                
                // For debutYear, convert to number for comparison
                if (prop === 'debutYear') {
                    const guessYear = parseInt(guess[prop]);
                    const correctYear = parseInt(this.gameManager.gameState.todaysArtist[prop]);
                    
                    if (guessYear < correctYear) {
                        arrow.textContent = '↑'; // Correct is higher
                        arrow.className += ' arrow-up';
                    } else {
                        arrow.textContent = '↓'; // Correct is lower
                        arrow.className += ' arrow-down';
                    }
                } else {
                    // For Grammy Awards
                    if (guess[prop] < this.gameManager.gameState.todaysArtist[prop]) {
                        arrow.textContent = '↑'; // Correct is higher
                        arrow.className += ' arrow-up';
                    } else {
                        arrow.textContent = '↓'; // Correct is lower
                        arrow.className += ' arrow-down';
                    }
                }
                
                box.appendChild(arrow);
            }
            
            guessGrid.appendChild(box);
        });
        
        return guessGrid;
    }
    
    // Update guess history
    updateGuessHistory() {
        // Clear previous history
        this.elements.guessHistory.innerHTML = '';
        
        // Rebuild the history
        this.gameManager.gameState.guesses.forEach(guess => {
            const guessGrid = this.createGuessGrid(guess);
            this.elements.guessHistory.appendChild(guessGrid);
        });
        
        // Ensure the history container itself has appropriate base styles if needed
        // (Most styling should come from CSS based on whether mainContainer is hidden)
        this.elements.guessHistory.style.display = 'flex'; // Keep flex for column layout
        this.elements.guessHistory.style.flexDirection = 'column';
    }
    
    // Update visibility of containers
    updateContainersVisibility() {
        const hasGuesses = this.gameManager.gameState.guesses.length > 0;
        const gameWon = this.gameManager.gameState.gameWon;

        // Get the guess wrapper container
        const guessesWrapper = document.querySelector('.mobile-guesses-wrapper');
        
        // Toggle guess wrapper visibility
        if (guessesWrapper) {
            guessesWrapper.classList.toggle('hidden', !hasGuesses);
        }

        // Toggle main container visibility
        this.elements.mainContainer.classList.toggle('hidden', !hasGuesses);
        
        // Toggle stats container visibility
        this.elements.statsContainer.classList.toggle('hidden', !hasGuesses);
        
        // Toggle give-up button visibility
        this.elements.giveUpButton.classList.toggle('hidden', !hasGuesses || gameWon);
        
        // Toggle color indicator visibility
        this.elements.colorIndicator.classList.toggle('hidden', !hasGuesses);

        // Toggle headers visibility based on guesses and device type
        if (hasGuesses) {
            if (this.isMobile) {
                this.elements.attributeHeaders.classList.remove('hidden');
                this.elements.traitGrid.classList.add('hidden');
            } else {
                this.elements.attributeHeaders.classList.add('hidden');
                this.elements.traitGrid.classList.remove('hidden');
            }
        } else {
            // Hide both headers if no guesses
            this.elements.attributeHeaders.classList.add('hidden');
            this.elements.traitGrid.classList.add('hidden');
        }
        
        // Ensure previous musician is always shown (handled separately if needed)
        this.elements.previousMusician.classList.remove('hidden');
    }
    
    // Show toast message
    showToast(message, duration = 3000) {
        this.elements.toast.textContent = message;
        this.elements.toast.style.display = 'block';
        setTimeout(() => {
            this.elements.toast.style.display = 'none';
        }, duration);
    }
    
    // Make a guess
    makeGuess() {
        const guess = this.elements.artistInput.value.trim();
        const result = this.gameManager.makeGuess(guess);
        
        if (result.success) {
            this.elements.artistInput.value = '';
            this.elements.suggestionsContainer.style.display = 'none'; // Keep this inline style for temporary dropdown
            
            // Update state (already done in gameManager)
            
            // Re-render the entire UI based on the new state
            this.updateUI(); 
            
            this.showToast(result.message);
            
        } else {
            this.showToast(result.message);
        }
    }
    
    // Reset the game
    resetGame() {
        const result = this.gameManager.resetGame();
        
        this.elements.artistInput.value = '';
        
        // Update all UI elements based on reset state
        this.updateUI(); 
        
        this.showToast(result.message);
    }
    
    // Give up
    giveUp() {
        const result = this.gameManager.giveUp();
        
        if (result.success) {
            this.elements.previousArtist.textContent = result.artist;
            this.elements.previousMusician.classList.remove('hidden');
            this.elements.giveUpButton.classList.add('hidden');
            this.showToast(result.message);
        } else {
            this.showToast(result.message);
        }
    }
    
    // Show all artists in dropdown
    showAllArtists() {
        const artists = this.gameManager.getAllArtists();
        this.showSuggestions(artists);
    }
    
    // Filter artists based on input
    filterArtists() {
        const value = this.elements.artistInput.value;
        const filteredArtists = this.gameManager.filterArtists(value);
        this.showSuggestions(filteredArtists);
    }
    
    // Display suggestions in dropdown
    showSuggestions(artistsList) {
        this.elements.suggestionsContainer.innerHTML = '';
        
        artistsList.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = artist.name;
            div.onclick = () => {
                this.elements.artistInput.value = artist.name;
                this.elements.suggestionsContainer.style.display = 'none';
            };
            this.elements.suggestionsContainer.appendChild(div);
        });
        
        this.elements.suggestionsContainer.style.display = artistsList.length > 0 ? 'block' : 'none';
    }
}

// Create a global UI instance
const gameUI = new GameUI(gameManager); 