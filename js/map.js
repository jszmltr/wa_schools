class MapManager {
    constructor() {
        this.map = null;
        this.markers = [];
        this.init();
    }

    init() {
        // Initialize map centered on Warsaw
        this.map = L.map('map').setView([52.2297, 21.0122], 11);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, title) {
        const marker = L.marker([lat, lng])
            .bindPopup(title)
            .addTo(this.map);
        this.markers.push(marker);
    }

    clearMarkers() {
        this.markers.forEach(marker => marker.remove());
        this.markers = [];
    }

    fitBounds() {
        if (this.markers.length > 0) {
            const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
            this.map.fitBounds(bounds);
        }
    }
} 