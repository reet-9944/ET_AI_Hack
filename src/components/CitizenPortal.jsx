import React, { useState } from 'react';
import { UploadCloud, AlertTriangle, CheckCircle, Search, FileText, Activity, Shield } from 'lucide-react';
import './CitizenPortal.css';

const CitizenPortal = () => {
  const [inputText, setInputText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    if (!inputText.trim()) return;
    setIsScanning(true);
    setResult(null);
    
    // Simulate API delay
    setTimeout(() => {
      setIsScanning(false);
      // Mock result logic based on keywords
      const lowerText = inputText.toLowerCase();
      if (lowerText.includes('arrest') || lowerText.includes('customs') || lowerText.includes('cbi') || lowerText.includes('skype')) {
        setResult({
          status: 'danger',
          score: 98,
          flags: [
            "Impersonation of Law Enforcement (CBI/Customs)",
            "Urgency/Threat of Arrest",
            "Request to move to unrecorded platform (Skype/WhatsApp video)"
          ],
          verdict: "High Probability of Digital Arrest Scam. Disconnect immediately."
        });
      } else if (lowerText.includes('otp') || lowerText.includes('bank')) {
        setResult({
          status: 'warning',
          score: 75,
          flags: ["Request for sensitive financial info", "Urgency"],
          verdict: "Potential Phishing Scam. Do not share OTPs."
        });
      } else {
        setResult({
          status: 'safe',
          score: 12,
          flags: ["No immediate threat detected"],
          verdict: "Appears safe, but remain cautious."
        });
      }
    }, 2500);
  };

  return (
    <div className="citizen-portal">
      <div className="hero-section text-center">
        <h1 className="heading-1 text-gradient">Citizen Fraud Shield</h1>
        <p className="text-muted" style={{fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
          Paste a transcript, message, or email below. Our AI will instantly analyze it for patterns associated with Digital Arrests and financial fraud.
        </p>
      </div>

      <div className="scanner-layout">
        <div className="input-section glass-panel">
          <div className="panel-header">
            <FileText size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Input Data</h2>
          </div>
          <textarea 
            className="text-input" 
            placeholder="Paste suspicious text here... (e.g., 'This is CBI. A parcel in your name containing illegal items was seized by customs. You are under digital arrest.')"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          
          <button 
            className="btn btn-primary" 
            style={{width: '100%', marginTop: '1rem'}}
            onClick={handleScan}
            disabled={isScanning || !inputText.trim()}
          >
            {isScanning ? (
              <>Scanning for Threats...</>
            ) : (
              <><Search size={18} /> Analyze with AI</>
            )}
          </button>
        </div>

        <div className="result-section glass-panel">
          <div className="panel-header">
            <Activity size={20} className="text-muted" />
            <h2 className="heading-2" style={{marginBottom: 0}}>Analysis Report</h2>
          </div>
          
          <div className="result-content">
            {isScanning ? (
              <div className="scanning-ui">
                <div className="scanner-container">
                   <div className="scanner-line"></div>
                   <div className="code-block-mock">
                     <div className="mock-line" style={{width: '60%'}}></div>
                     <div className="mock-line" style={{width: '80%'}}></div>
                     <div className="mock-line" style={{width: '40%'}}></div>
                     <div className="mock-line" style={{width: '90%'}}></div>
                   </div>
                </div>
                <p className="text-muted mt-2 text-center animate-pulse">Running NLP extraction and pattern matching...</p>
              </div>
            ) : result ? (
              <div className={`result-card ${result.status}`}>
                <div className="score-circle">
                  <span className="score-value">{result.score}%</span>
                  <span className="score-label">Risk</span>
                </div>
                
                <div className="verdict-box">
                  {result.status === 'danger' && <AlertTriangle size={32} className="danger-icon animate-pulse-red" />}
                  {result.status === 'warning' && <AlertTriangle size={32} className="warning-icon" />}
                  {result.status === 'safe' && <CheckCircle size={32} className="safe-icon" />}
                  <h3 style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>{result.verdict}</h3>
                </div>

                <div className="flags-list">
                  <h4 style={{marginBottom: '0.5rem', color: 'var(--text-secondary)'}}>Detected Red Flags:</h4>
                  {result.flags.map((flag, i) => (
                    <div key={i} className="flag-item">
                      <span className="bullet"></span>
                      {flag}
                    </div>
                  ))}
                </div>
                
                {result.status === 'danger' && (
                  <button className="btn btn-outline" style={{width: '100%', marginTop: '1.5rem', borderColor: 'var(--accent-red)', color: 'var(--accent-red)'}}>
                    Report to Cyber Crime (1930)
                  </button>
                )}
              </div>
            ) : (
              <div className="empty-state">
                <Shield size={48} className="text-muted" style={{opacity: 0.5, marginBottom: '1rem'}} />
                <p className="text-muted">Awaiting input for analysis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenPortal;
