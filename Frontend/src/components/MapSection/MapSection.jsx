import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { Link } from 'react-router-dom';
import './MapSection.css';

// Import Leaflet CSS (you might need to install leaflet: npm install leaflet)
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Initialize map only once
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);
      
      // Add sample markers for demonstration
      const stations = [
        {lat: 28.6139, lng: 77.2090, name: 'New Delhi Station', status: 'normal'},
        {lat: 19.0760, lng: 72.8777, name: 'Mumbai Station', status: 'critical'},
        {lat: 13.0827, lng: 80.2707, name: 'Chennai Station', status: 'above'},
        {lat: 22.5726, lng: 88.3639, name: 'Kolkata Station', status: 'below'},
        {lat: 12.9716, lng: 77.5946, name: 'Bengaluru Station', status: 'normal'},
        {lat: 17.3850, lng: 78.4867, name: 'Hyderabad Station', status: 'normal'},
        {lat: 26.9124, lng: 75.7873, name: 'Jaipur Station', status: 'normal'},
        {lat: 30.7333, lng: 76.7794, name: 'Chandigarh Station', status: 'above'},
        {lat: 25.5941, lng: 85.1376, name: 'Patna Station', status: 'critical'},
        {lat: 26.8467, lng: 80.9462, name: 'Lucknow Station', status: 'below'},
      ];
      
      const statusColors = {
        normal: '#1a6fb4',
        critical: '#ff6b6b',
        above: '#20c997',
        below: '#ffc107'
      };
      
      stations.forEach(station => {
        L.circleMarker([station.lat, station.lng], {
          color: statusColors[station.status],
          fillColor: statusColors[station.status],
          fillOpacity: 0.7,
          radius: 8
        }).addTo(mapInstance.current).bindPopup(`
          <b>${station.name}</b><br>
          Status: ${station.status.charAt(0).toUpperCase() + station.status.slice(1)}
        `);
      });
    }
    
    // Cleanup function to remove map on component unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);
  
  return (
    <section className="map-section">
      <div className="container">
        <div className="section-title">
          <h2>Interactive Groundwater Map</h2>
          <p>Explore real-time groundwater data across India</p>
        </div>
        
        <div className="map-container">
          <div className="map-overlay">
            <h3>Map Legend</h3>
            <div className="legend-item">
              <div className="legend-color normal"></div>
              <div className="legend-label">Normal Water Levels</div>
            </div>
            <div className="legend-item">
              <div className="legend-color above"></div>
              <div className="legend-label">Above Average</div>
            </div>
            <div className="legend-item">
              <div className="legend-color below"></div>
              <div className="legend-label">Below Average</div>
            </div>
            <div className="legend-item">
              <div className="legend-color critical"></div>
              <div className="legend-label">Critical Levels</div>
            </div>
          </div>
          <div ref={mapRef} className="map"></div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;