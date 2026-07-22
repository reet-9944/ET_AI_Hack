import { useState } from 'react';
import { Shield, ShieldAlert, Activity } from 'lucide-react';
import './App.css';
import CitizenPortal from './components/CitizenPortal';
import PoliceDashboard from './components/PoliceDashboard';

function App() {
  const [activeView, setActiveView] = useState('citizen'); // 'citizen' or 'police'

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="brand">
          <ShieldAlert className="brand-icon" size={28} />
          <span className="text-gradient">Sentinel: Digital Shield</span>
        </div>
        
        <div className="nav-links">
          <div 
            className={`nav-item ${activeView === 'citizen' ? 'active' : ''}`}
            onClick={() => setActiveView('citizen')}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Shield size={18} />
              Citizen Portal
            </div>
          </div>
          <div 
            className={`nav-item ${activeView === 'police' ? 'active' : ''}`}
            onClick={() => setActiveView('police')}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Activity size={18} />
              Command Center
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeView === 'citizen' ? <CitizenPortal /> : <PoliceDashboard />}
      </main>
    </div>
  );
}

export default App;
