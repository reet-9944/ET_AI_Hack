import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Users, AlertOctagon, TrendingUp, Filter, Network } from 'lucide-react';
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
            <Network size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Network Infrastructure Graph</h2>
          </div>
          <div className="map-container" style={{background: 'rgba(0,0,0,0.6)'}}>
            {/* Simulated Network Graph */}
            <div className="mock-map">
              <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="var(--glass-highlight)" strokeWidth="2" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="var(--glass-highlight)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="var(--accent-red)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="var(--glass-highlight)" strokeWidth="2" />
              </svg>
              <div className="hotspot" style={{ top: '30%', left: '20%', background: 'var(--accent-blue)', boxShadow: '0 0 15px var(--accent-blue)' }}></div>
              <div className="hotspot" style={{ top: '20%', left: '80%', background: 'var(--accent-blue)', boxShadow: '0 0 15px var(--accent-blue)' }}></div>
              <div className="hotspot pulse-red" style={{ top: '50%', left: '50%', width: '30px', height: '30px' }}>
                <span className="hotspot-label" style={{top: '40px'}}>Central Node (VoIP Server)</span>
              </div>
              <div className="hotspot pulse-yellow" style={{ top: '80%', left: '50%' }}>
                <span className="hotspot-label">Money Mule Acc.</span>
              </div>
              <div className="hotspot" style={{ top: '70%', left: '20%', background: 'var(--text-muted)' }}></div>
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
                  <button className="btn-link" onClick={() => alert('Generating Cryptographically Hashed Admissible Evidence Package...')}>
                    Generate Legal Package
                  </button>
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
