// Initialize the application when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI after a short delay to ensure DOM is fully rendered
    setTimeout(() => {
        // Initialize UI
        gameUI.updateUI();
        
        // Set focus to the artist input
        document.getElementById('artist-input').focus();
    }, 0);
    
    // Check for service worker only if in a proper origin (not file:// or null:)
    if ('serviceWorker' in navigator && 
        window.location.protocol !== 'file:' && 
        window.location.protocol !== 'null:') {
        
        try {
            // Use a relative path to avoid protocol issues
            const swPath = 'service-worker.js';
            
            navigator.serviceWorker.register(swPath)
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        } catch (e) {
            console.warn('Service worker registration skipped:', e);
        }
    } else {
        console.log('Service Worker not registered: not supported in this environment');
    }
}); 