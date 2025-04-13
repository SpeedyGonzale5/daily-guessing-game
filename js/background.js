// Background animation functionality
class WarpBackground {
    constructor() {
        this.sides = {
            top: document.getElementById('beams-top'),
            bottom: document.getElementById('beams-bottom'),
            left: document.getElementById('beams-left'),
            right: document.getElementById('beams-right')
        };
        this.beamsPerSide = 3;
        this.beamSize = 5; // % of side width/height
        this.beamDelayMax = 3; // seconds
        this.beamDelayMin = 0; // seconds
        this.beamDuration = 4; // seconds

        if (Object.values(this.sides).some(side => !side)) {
            console.error("Warp background side containers not found!");
            return;
        }
        
        this.initialize();
    }
    
    createBeam(parentSide) {
        const beam = document.createElement('div');
        beam.className = 'beam';
        
        const hue = Math.floor(Math.random() * 360);
        const aspectRatio = Math.floor(Math.random() * 10) + 2; // Random aspect ratio (2 to 11)
        const delay = Math.random() * (this.beamDelayMax - this.beamDelayMin) + this.beamDelayMin;
        const duration = this.beamDuration + Math.random() * 1; // Slightly variable duration
        
        // Determine x position based on parent side width
        const parentWidth = parentSide.offsetWidth;
        const numCells = 100 / this.beamSize;
        const randomCell = Math.floor(Math.random() * numCells);
        const xPosition = `${randomCell * this.beamSize}%`;
        
        beam.style.setProperty('--x', xPosition);
        beam.style.setProperty('--width', `${this.beamSize}%`);
        beam.style.setProperty('--aspect-ratio', aspectRatio.toString());
        beam.style.setProperty('--background', `linear-gradient(hsl(${hue}, 80%, 60%), transparent)`);
        beam.style.setProperty('--delay', `${delay}s`);
        beam.style.setProperty('--duration', `${duration}s`);

        // Add the beam to the parent side
        parentSide.appendChild(beam);

        // Remove beam after animation + delay to prevent buildup
        setTimeout(() => {
            if (beam.parentNode) {
                 beam.remove();
                 // Optionally, create a new beam to replace it
                 this.createBeam(parentSide);
            }
        }, (duration + delay) * 1000);
    }
    
    initialize() {
        // Create initial beams for each side
        Object.values(this.sides).forEach(sideElement => {
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