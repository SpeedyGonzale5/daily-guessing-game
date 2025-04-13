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
            toast: document.getElementById('toast'),
            searchBox: document.querySelector('.search-box'),
            searchContainer: document.querySelector('.search-container'),
            genreFilter: document.getElementById('genre-filter'),
            genderFilter: document.getElementById('gender-filter'),
            countryFilter: document.getElementById('country-filter'),
            suggestionsList: document.getElementById('suggestions-list'),
            clearFiltersBtn: document.getElementById('clear-filters'),
            filterToggleBtn: document.getElementById('filter-toggle-btn'),
            filterPanel: document.getElementById('filter-panel')
        };
        
        // Load filter state from localStorage if available
        const savedFilterState = localStorage.getItem('filterState');
        this.filterState = savedFilterState ? JSON.parse(savedFilterState) : {
            genre: '',
            gender: '',
            country: ''
        };
        
        this.isMobile = window.innerWidth <= 768;
        
        // Initialize animation state
        this.updateInputAnimation();
        
        // Store the previous artist when game is won or given up
        this.previousArtistName = localStorage.getItem('previousArtist') || null;
        
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
        this.populateFilters(); // Populate filters on initialization
        
        // Apply saved filter state to filter elements
        this.elements.genreFilter.value = this.filterState.genre;
        this.elements.genderFilter.value = this.filterState.gender;
        this.elements.countryFilter.value = this.filterState.country;
    }
    
    // Initialize event listeners
    initEventListeners() {
        // Artist input and suggestions
        this.elements.artistInput.addEventListener('focus', () => {
            // Apply stored filters before showing all artists
            this.elements.genreFilter.value = this.filterState.genre;
            this.elements.genderFilter.value = this.filterState.gender;
            this.elements.countryFilter.value = this.filterState.country;
            this.showAllArtists();
        });
        this.elements.artistInput.addEventListener('input', (e) => {
            const filteredArtists = this.filterArtists(e.target.value);
            this.showSuggestions(filteredArtists);
        });
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
            // Check if the click is outside the search container (which includes input and dropdown)
            if (!this.elements.searchContainer.contains(e.target)) {
                this.elements.suggestionsContainer.style.display = 'none';
            }
        });

        // Show previous musician immediately
        this.updatePreviousMusician();

        // Filter event listeners
        this.elements.genreFilter.addEventListener('change', () => this.handleFilterChange());
        this.elements.genderFilter.addEventListener('change', () => this.handleFilterChange());
        this.elements.countryFilter.addEventListener('change', () => this.handleFilterChange());
        this.elements.clearFiltersBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent dropdown from closing
            this.clearFilters();
        });
        
        // Filter toggle button
        this.elements.filterToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent dropdown from closing
            this.toggleFilterPanel();
        });
        
        // Prevent dropdown from closing when clicking on filters
        this.elements.filterPanel.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
        });
        
        // Prevent dropdown from closing when interacting with filter controls
        this.elements.genreFilter.addEventListener('click', (e) => e.stopPropagation());
        this.elements.genderFilter.addEventListener('click', (e) => e.stopPropagation());
        this.elements.countryFilter.addEventListener('click', (e) => e.stopPropagation());
    }
    
    // Populate filter dropdowns
    populateFilters() {
        const allArtists = this.gameManager.getArtists(); // Assume getArtists method exists in gameManager
        const genres = new Set();
        const genders = new Set();
        const countries = new Set();

        allArtists.forEach(artist => {
            genres.add(artist.genre);
            genders.add(artist.gender);
            countries.add(artist.countryOfOrigin);
        });

        this.populateSelect(this.elements.genreFilter, genres, "All Genres");
        this.populateSelect(this.elements.genderFilter, genders, "All Genders");
        this.populateSelect(this.elements.countryFilter, countries, "All Countries");
    }

    // Helper to populate a select element
    populateSelect(selectElement, optionsSet, defaultOptionText) {
        // Clear existing options except the default
        while (selectElement.options.length > 1) {
            selectElement.remove(1);
        }

        // Sort options alphabetically and add them
        [...optionsSet].sort().forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            selectElement.appendChild(option);
        });
    }

    // Handle filter changes
    handleFilterChange() {
        // Store current filter state
        this.filterState.genre = this.elements.genreFilter.value;
        this.filterState.gender = this.elements.genderFilter.value;
        this.filterState.country = this.elements.countryFilter.value;
        
        // Save filter state to localStorage
        localStorage.setItem('filterState', JSON.stringify(this.filterState));
        
        const filteredArtists = this.filterArtists(this.elements.artistInput.value);
        this.showSuggestions(filteredArtists);
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
        // If we have a stored previous artist, use that
        if (this.previousArtistName) {
            this.elements.previousArtist.textContent = this.previousArtistName;
            this.elements.previousMusician.classList.remove('hidden');
            return;
        }

        // Only update if the game is won or given up
        if (this.gameManager.gameState.gameWon) {
            this.previousArtistName = this.gameManager.gameState.todaysArtist.name;
            localStorage.setItem('previousArtist', this.previousArtistName);
            this.elements.previousArtist.textContent = this.previousArtistName;
            this.elements.previousMusician.classList.remove('hidden');
        }
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
            this.elements.guessHistory.prepend(guessGrid);
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
    
    // Update input animation based on game state
    updateInputAnimation() {
        const hasGuesses = this.gameManager.gameState.guesses.length > 0;
        if (!hasGuesses) {
            this.elements.searchBox.classList.add('highlight-animation');
        } else {
            this.elements.searchBox.classList.remove('highlight-animation');
        }
    }
    
    // Make a guess
    makeGuess() {
        const guess = this.elements.artistInput.value.trim();
        const result = this.gameManager.makeGuess(guess);
        
        if (result.success) {
            this.elements.artistInput.value = '';
            this.elements.suggestionsContainer.style.display = 'none';
            
            // Update animation state after guess
            this.updateInputAnimation();
            
            // Update UI
            this.updateUI();
            
            this.showToast(result.message);
        } else {
            this.showToast(result.message);
        }
    }
    
    // Reset the game
    resetGame() {
        const result = this.gameManager.resetGame();
        
        // Store the current artist as previous before resetting
        if (this.gameManager.gameState.todaysArtist) {
            this.previousArtistName = this.gameManager.gameState.todaysArtist.name;
            localStorage.setItem('previousArtist', this.previousArtistName);
        }
        
        this.elements.artistInput.value = '';
        
        // Update animation state for new game
        this.updateInputAnimation();
        
        // Update all UI elements
        this.updateUI();
        
        this.showToast(result.message);
    }
    
    // Give up
    giveUp() {
        const result = this.gameManager.giveUp();
        
        if (result.success) {
            this.previousArtistName = result.artist;
            localStorage.setItem('previousArtist', this.previousArtistName);
            this.elements.previousArtist.textContent = result.artist;
            this.elements.previousMusician.classList.remove('hidden');
            this.elements.giveUpButton.classList.add('hidden');
            this.showToast(result.message);
        } else {
            this.showToast(result.message);
        }
    }
    
    // Filter artists based on search text and selected filters
    filterArtists(searchText) {
        const lowerCaseSearch = searchText.toLowerCase();
        const selectedGenre = this.elements.genreFilter.value;
        const selectedGender = this.elements.genderFilter.value;
        const selectedCountry = this.elements.countryFilter.value;
        
        // Update filter state
        this.filterState.genre = selectedGenre;
        this.filterState.gender = selectedGender;
        this.filterState.country = selectedCountry;
        
        // Save filter state to localStorage
        localStorage.setItem('filterState', JSON.stringify(this.filterState));
        
        return this.gameManager.getArtists().filter(artist => {
            const nameMatch = artist.name.toLowerCase().includes(lowerCaseSearch);
            const genreMatch = !selectedGenre || artist.genre === selectedGenre;
            const genderMatch = !selectedGender || artist.gender === selectedGender;
            const countryMatch = !selectedCountry || artist.countryOfOrigin === selectedCountry;
            
            return nameMatch && genreMatch && genderMatch && countryMatch;
        });
    }

    // Show all artists in dropdown
    showAllArtists() {
        // Use the existing filter settings but with empty search text
        const filteredArtists = this.filterArtists('');
        // Filter out already guessed artists
        const guessedArtists = new Set(this.gameManager.gameState.guesses.map(g => g.name.toLowerCase()));
        const availableArtists = filteredArtists.filter(artist => !guessedArtists.has(artist.name.toLowerCase()));
        this.showSuggestions(availableArtists);
    }
    
    // Display suggestions in dropdown
    showSuggestions(artistsList) {
        const listContainer = this.elements.suggestionsList;
        listContainer.innerHTML = ''; // Clear the list container
        
        // Filter out already guessed artists
        const guessedArtists = new Set(this.gameManager.gameState.guesses.map(g => g.name.toLowerCase()));
        const filteredArtists = artistsList.filter(artist => !guessedArtists.has(artist.name.toLowerCase()));
        
        filteredArtists.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = artist.name;
            div.onclick = () => {
                this.elements.artistInput.value = artist.name;
                this.elements.suggestionsContainer.style.display = 'none'; // Hide the whole dropdown
            };
            listContainer.appendChild(div); // Append to the list container
        });
        
        // Ensure dropdown has enough space for the filter controls
        const dropdownContainer = this.elements.suggestionsContainer;
        const searchBox = this.elements.searchBox; // Get the search box element
        const searchBoxRect = searchBox.getBoundingClientRect();
        dropdownContainer.style.width = searchBoxRect.width + 'px';
        
        // Show/hide the main dropdown container
        const shouldShowDropdown = filteredArtists.length > 0 || (filteredArtists.length === 0 && this.elements.artistInput.value.trim().length > 0);

        if (shouldShowDropdown) {
            dropdownContainer.style.display = 'flex';

            // If there are no matching artists after filtering, show a message
            if (filteredArtists.length === 0 && this.elements.artistInput.value.trim().length > 0) {
                const noResults = document.createElement('div');
                noResults.className = 'dropdown-item';
                noResults.textContent = 'No matching artists found';
                noResults.style.fontStyle = 'italic';
                noResults.style.color = '#888';
                listContainer.appendChild(noResults);
            }
        } else {
            dropdownContainer.style.display = 'none';
        }
    }

    // Clear all filters and refresh the suggestions
    clearFilters() {
        this.elements.genreFilter.value = '';
        this.elements.genderFilter.value = '';
        this.elements.countryFilter.value = '';
        
        // Update filter state
        this.filterState.genre = '';
        this.filterState.gender = '';
        this.filterState.country = '';
        
        // Save filter state to localStorage
        localStorage.setItem('filterState', JSON.stringify(this.filterState));
        
        // Update suggestions based on current input
        const filteredArtists = this.filterArtists(this.elements.artistInput.value);
        this.showSuggestions(filteredArtists);
    }

    // Toggle filter panel visibility
    toggleFilterPanel() {
        this.elements.filterPanel.classList.toggle('active');
    }
}

// Create a global UI instance
const gameUI = new GameUI(gameManager); 