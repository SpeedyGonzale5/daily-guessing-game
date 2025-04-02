// Initialize the application when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    gameUI.updateUI();
    
    // Set focus to the artist input
    document.getElementById('artist-input').focus();
    
    // Add service worker for Progressive Web App support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
}); 