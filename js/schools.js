class SchoolManager {
    constructor() {
        this.mapManager = new MapManager();
        this.loadSchools();
    }

    loadSchools() {
        try {
            // Process each school from the data array
            SCHOOLS_DATA.forEach(school => {
                if (school.coordinates) {
                    const [lat, lng] = school.coordinates;
                    this.mapManager.addMarker(lat, lng, school.name);
                }
            });
            
            // Fit map to show all markers
            this.mapManager.fitBounds();
            
        } catch (error) {
            console.error('Error loading schools:', error);
        }
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SchoolManager();
}); 