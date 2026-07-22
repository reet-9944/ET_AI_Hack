import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Users, AlertOctagon, TrendingUp, Filter, Network, CheckCircle, X, Lock } from 'lucide-react';
import './PoliceDashboard.css';

const PoliceDashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [modalStage, setModalStage] = useState('generating'); // generating, complete

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

  const handleGeneratePackage = (alert) => {
    setActiveModal(alert);
    setModalStage('generating');
    setTimeout(() => {
      setModalStage('complete');
    }, 2000);
  };

  return (
    <div className="police-dashboard">
      <div className="dashboard-header stagger-1">
        <div>
          <h1 className="heading-1">National Fraud Command Center</h1>
          <p className="text-muted">Real-time threat intelligence and geospatial mapping for digital scams.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline interactive-hover"><Filter size={16} /> Filter Region</button>
          <div className="status-indicator">
            <span className="live-dot"></span> LIVE NETWORK
          </div>
        </div>
      </div>

      <div className="stats-grid stagger-2">
        <div className="stat-card glass-panel interactive-hover">
          <div className="stat-icon red"><AlertOctagon size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">124</span>
            <span className="stat-label">Active Scams Detected (Today)</span>
          </div>
          <div className="stat-trend positive"><TrendingUp size={16} /> +12%</div>
        </div>
        <div className="stat-card glass-panel interactive-hover">
          <div className="stat-icon blue"><Phone size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">8,402</span>
            <span className="stat-label">Spoofed Numbers Blocked</span>
          </div>
        </div>
        <div className="stat-card glass-panel interactive-hover">
          <div className="stat-icon green"><Users size={24} /></div>
          <div className="stat-details">
            <span className="stat-value">₹4.2Cr</span>
            <span className="stat-label">Transfers Frozen</span>
          </div>
        </div>
      </div>

      <div className="dashboard-main-grid stagger-3">
        <div className="map-panel glass-panel">
          <div className="panel-header">
            <Network size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Network Infrastructure Graph</h2>
          </div>
          <div className="map-container" style={{background: 'rgba(0,0,0,0.6)'}}>
            {/* Simulated Network Graph */}
            <div className="mock-map">
              <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="var(--glass-highlight)" strokeWidth="2" className="anim-line" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="var(--glass-highlight)" strokeWidth="2" className="anim-line" />
                <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="var(--accent-red)" strokeWidth="2" strokeDasharray="5,5" className="anim-line-fast" />
                <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="var(--glass-highlight)" strokeWidth="2" className="anim-line" />
              </svg>
              <div className="hotspot node-pulse" style={{ top: '30%', left: '20%', background: 'var(--accent-blue)', boxShadow: '0 0 15px var(--accent-blue)' }}></div>
              <div className="hotspot node-pulse" style={{ top: '20%', left: '80%', background: 'var(--accent-blue)', boxShadow: '0 0 15px var(--accent-blue)' }}></div>
              <div className="hotspot pulse-red" style={{ top: '50%', left: '50%', width: '30px', height: '30px' }}>
                <span className="hotspot-label" style={{top: '40px'}}>Central Node (VoIP Server)</span>
              </div>
              <div className="hotspot pulse-yellow" style={{ top: '80%', left: '50%' }}>
                <span className="hotspot-label">Money Mule Acc.</span>
              </div>
              <div className="hotspot node-pulse" style={{ top: '70%', left: '20%', background: 'var(--text-muted)' }}></div>
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
                  <button className="btn-link animated-btn" onClick={() => handleGeneratePackage(alert)}>
                    Generate Legal Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <button className="modal-close" onClick={() => setActiveModal(null)}><X size={20} /></button>
            <h3 className="heading-2 text-gradient">Intelligence Package</h3>
            <p className="text-muted" style={{marginBottom: '1.5rem'}}>Ref: {activeModal.id} • {activeModal.type}</p>
            
            {modalStage === 'generating' ? (
              <div className="modal-generating">
                <div className="spinner"></div>
                <p>Compiling metadata & cryptographically hashing evidence...</p>
              </div>
            ) : (
              <div className="modal-success">
                <CheckCircle size={48} className="text-green animate-pop" style={{color: 'var(--accent-green)', marginBottom: '1rem'}} />
                <h4 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>Package Ready for Court Submission</h4>
                <div className="hash-box">
                  <Lock size={14} className="text-muted" />
                  <span className="hash-text">SHA-256: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08</span>
                </div>
                <button className="btn btn-primary" style={{marginTop: '1.5rem', width: '100%'}} onClick={() => setActiveModal(null)}>
                  Download Encrypted Zip
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PoliceDashboard;
