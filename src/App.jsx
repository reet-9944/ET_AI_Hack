import { useState } from 'react';
import { Shield, ShieldAlert, Activity, Home, Menu, ChevronLeft } from 'lucide-react';
import './App.css';
import LandingPage from './components/LandingPage';
import CitizenPortal from './components/CitizenPortal';
import PoliceDashboard from './components/PoliceDashboard';

function App() {
  const [activeView, setActiveView] = useState('home'); // 'home', 'citizen' or 'police'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="cyber-grid"></div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="brand" style={{cursor: 'pointer', margin: 0, padding: 0, border: 'none'}} onClick={() => setActiveView('home')}>
          <ShieldAlert className="brand-icon" size={28} />
          <span className="text-gradient brand-text" style={{fontSize: '1.25rem'}}>Sentinel</span>
        </div>
      </div>

      <aside className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
          <div className="brand" style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, padding: 0, border: 'none'}} onClick={() => setActiveView('home')}>
            <ShieldAlert className="brand-icon" size={32} style={{minWidth: '32px'}} />
            {isSidebarOpen && <span className="text-gradient brand-text" style={{fontSize: '1.5rem', fontWeight: 700}}>Sentinel</span>}
          </div>
          <button className="btn-link desktop-toggle" style={{color: 'var(--text-muted)', padding: '0.5rem'}} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="nav-links">
          <div 
            className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
            onClick={() => setActiveView('home')}
            title="Overview"
          >
            <div className="nav-item-content">
              <Home size={20} style={{minWidth: '20px'}} />
              <span className="nav-text">{isSidebarOpen && "Overview"}</span>
            </div>
          </div>
          <div 
            className={`nav-item ${activeView === 'citizen' ? 'active' : ''}`}
            onClick={() => setActiveView('citizen')}
            title="Citizen Shield"
          >
            <div className="nav-item-content">
              <Shield size={20} style={{minWidth: '20px'}} />
              <span className="nav-text">{isSidebarOpen && "Citizen Shield"}</span>
            </div>
          </div>
          <div 
            className={`nav-item ${activeView === 'police' ? 'active' : ''}`}
            onClick={() => setActiveView('police')}
            title="Command Center"
          >
            <div className="nav-item-content">
              <Activity size={20} style={{minWidth: '20px'}} />
              <span className="nav-text">{isSidebarOpen && "Command Center"}</span>
            </div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile" style={{justifyContent: isSidebarOpen ? 'flex-start' : 'center'}}>
            <div className="avatar" style={{minWidth: '40px'}}>AD</div>
            {isSidebarOpen && (
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">System Access</span>
              </div>
            )}
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
