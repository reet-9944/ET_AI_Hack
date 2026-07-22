import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Users, AlertOctagon, TrendingUp, Filter } from 'lucide-react';
import './PoliceDashboard.css';

const PoliceDashboard = () => {
  const [alerts, setAlerts] = useState([]);

  // Mock data generation
  useEffect(() => {
    const mockAlerts = [
      { id: 'ALR-842', location: 'Cyberabad, HYD', type: 'Digital Arrest', status: 'Active', severity: 'critical', time: '2 mins ago' },
      { id: 'ALR-841', location: 'Andheri West, MUM', type: 'Customs Impersonation', status: 'Active', severity: 'high', time: '12 mins ago' },
      { id: 'ALR-840', location: 'Whitefield, BLR', type: 'CBI Threat', status: 'Investigating', severity: 'high', time: '45 mins ago' },
      { id: 'ALR-839', location: 'Salt Lake, CCU', type: 'Digital Arrest', status: 'Contained', severity: 'medium', time: '2 hrs ago' },
    ];
    setAlerts(mockAlerts);
  }, []);

  return (
    <div className="police-dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="heading-1">National Fraud Command Center</h1>
          <p className="text-muted">Real-time threat intelligence and geospatial mapping for digital scams.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline"><Filter size={16} /> Filter Region</button>
          <div className="status-indicator">
            <span className="live-dot"></span> LIVE NETWORK
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-icon red"><AlertOctagon size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">124</span>
            <span className="stat-label">Active Scams Detected (Today)</span>
          </div>
          <div className="stat-trend positive"><TrendingUp size={16} /> +12%</div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon blue"><Phone size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">8,402</span>
            <span className="stat-label">Spoofed Numbers Blocked</span>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon green"><Users size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">₹4.2Cr</span>
            <span className="stat-label">Transfers Frozen</span>
          </div>
        </div>
      </div>

      <div className="dashboard-main-grid">
        <div className="map-panel glass-panel">
          <div className="panel-header">
            <MapPin size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Geospatial Threat Map</h2>
          </div>
          <div className="map-container">
            {/* Simulated Map UI */}
            <div className="mock-map">
              <div className="map-overlay"></div>
              <div className="hotspot pulse-red" style={{ top: '60%', left: '30%' }}>
                <span className="hotspot-label">Mumbai</span>
              </div>
              <div className="hotspot pulse-red" style={{ top: '75%', left: '45%' }}>
                <span className="hotspot-label">Bengaluru</span>
              </div>
              <div className="hotspot pulse-yellow" style={{ top: '40%', left: '50%' }}>
                <span className="hotspot-label">Delhi NCR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="alerts-panel glass-panel">
          <div className="panel-header">
            <AlertOctagon size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Live Threat Feed</h2>
          </div>
          <div className="alerts-list">
            {alerts.map(alert => (
              <div key={alert.id} className={`alert-item ${alert.severity}`}>
                <div className="alert-meta">
                  <span className="alert-id">{alert.id}</span>
                  <span className="alert-time">{alert.time}</span>
                </div>
                <div className="alert-title">{alert.type}</div>
                <div className="alert-location">
                  <MapPin size={14} /> {alert.location}
                </div>
                <div className="alert-footer">
                  <span className={`status-badge ${alert.status.toLowerCase()}`}>{alert.status}</span>
                  <button className="btn-link">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDashboard;
