// Background animation functionality
class WarpBackground {
    constructor() {
        this.sides = {
            // Keep references, but we might not use top/bottom
            top: document.getElementById('beams-top'),
            bottom: document.getElementById('beams-bottom'),
            left: document.getElementById('beams-left'),
            right: document.getElementById('beams-right')
        };
        this.beamsPerSide = 4; // Keep a few beams per active side
        this.beamSize = 5; // % of side width/height
        this.beamDelayMax = 1; // Max seconds (faster start)
        this.beamDelayMin = 0; // Min seconds
        this.beamDuration = 1; // Base animation duration in seconds (reduced from 2)

        if (!this.sides.left || !this.sides.right) {
            console.error("Warp background left/right side containers not found!");
            return;
        }
        
        this.initialize();
    }
    
    createBeam(parentSide) {
        const beam = document.createElement('div');
        beam.className = 'beam';
        
        const hue = Math.floor(Math.random() * 360);
        const aspectRatio = Math.floor(Math.random() * 8) + 3; // Adjust aspect ratio range if needed
        const delay = Math.random() * (this.beamDelayMax - this.beamDelayMin) + this.beamDelayMin;
        const duration = this.beamDuration + Math.random() * 0.3; // Even less variability
        
        // Determine x position based on parent side width/height
        const parentDimension = (parentSide.id === 'beams-left' || parentSide.id === 'beams-right') ? parentSide.offsetHeight : parentSide.offsetWidth;
        const numCells = 100 / this.beamSize;
        const randomCell = Math.floor(Math.random() * numCells);
        const xPosition = `${randomCell * this.beamSize}%`;
        
        beam.style.setProperty('--x', xPosition);
        beam.style.setProperty('--width', `${this.beamSize}%`);
        beam.style.setProperty('--aspect-ratio', aspectRatio.toString());
        beam.style.setProperty('--background', `linear-gradient(hsl(${hue}, 80%, 60%), transparent)`);
        beam.style.setProperty('--delay', `${delay}s`);
        beam.style.setProperty('--duration', `${duration}s`);

        parentSide.appendChild(beam);

        // Remove beam after animation + delay
        setTimeout(() => {
            if (beam.parentNode) {
                 beam.remove();
                 // Only create a replacement if it's a left/right side
                 if (parentSide.id === 'beams-left' || parentSide.id === 'beams-right') {
                    this.createBeam(parentSide);
                 }
            }
        }, (duration + delay) * 1000);
    }
    
    initialize() {
        // Only create initial beams for left and right sides
        const activeSides = [this.sides.left, this.sides.right];
        activeSides.forEach(sideElement => {
            if (sideElement) {
                for (let i = 0; i < this.beamsPerSide; i++) {
                    this.createBeam(sideElement);
                }
            }
        });
    }
}

// Initialize background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure layout is calculated
    setTimeout(() => {
        new WarpBackground();
    }, 100);
}); 