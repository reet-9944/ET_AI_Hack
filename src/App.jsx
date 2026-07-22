import { useState } from 'react';
import { Shield, ShieldAlert, Activity, Home } from 'lucide-react';
import './App.css';
import LandingPage from './components/LandingPage';
import CitizenPortal from './components/CitizenPortal';
import PoliceDashboard from './components/PoliceDashboard';

function App() {
  const [activeView, setActiveView] = useState('home'); // 'home', 'citizen' or 'police'

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="cyber-grid"></div>

      <aside className="sidebar">
        <div className="brand" style={{cursor: 'pointer'}} onClick={() => setActiveView('home')}>
          <ShieldAlert className="brand-icon" size={32} />
          <span className="text-gradient brand-text">Sentinel</span>
        </div>
        
        <div className="nav-links">
          <div 
            className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
            onClick={() => setActiveView('home')}
          >
            <div className="nav-item-content">
              <Home size={20} />
              <span>Overview</span>
            </div>
          </div>
          <div 
            className={`nav-item ${activeView === 'citizen' ? 'active' : ''}`}
            onClick={() => setActiveView('citizen')}
          >
            <div className="nav-item-content">
              <Shield size={20} />
              <span>Citizen Shield</span>
            </div>
          </div>
          <div 
            className={`nav-item ${activeView === 'police' ? 'active' : ''}`}
            onClick={() => setActiveView('police')}
          >
            <div className="nav-item-content">
              <Activity size={20} />
              <span>Command Center</span>
            </div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">AD</div>
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">System Access</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        {activeView === 'home' && <LandingPage onNavigate={setActiveView} />}
        {activeView === 'citizen' && <CitizenPortal />}
        {activeView === 'police' && <PoliceDashboard />}
      </main>
    </div>
  );
}

export default App;
