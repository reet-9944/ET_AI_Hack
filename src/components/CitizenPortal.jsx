import React, { useState, useRef } from 'react';
import { ShieldCheck, Scan, MessageSquareWarning, Languages, Upload, AlertTriangle, CheckCircle, Camera } from 'lucide-react';
import './CitizenPortal.css';

const CitizenPortal = () => {
  const [activeTab, setActiveTab] = useState('scam-check'); // scam-check, counterfeit
  const [scanStatus, setScanStatus] = useState('idle'); // idle, scanning, safe, danger
  const audioInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const simulateScan = (e) => {
    // Only trigger if they actually selected a file, or if we bypass it
    if (e && e.target && e.target.files && e.target.files.length === 0) return;
    
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('danger');
    }, 2500);
  };

  const simulateCurrencyScan = (e) => {
    if (e && e.target && e.target.files && e.target.files.length === 0) return;

    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('safe');
    }, 2500);
  };

  const triggerAudioUpload = () => {
    audioInputRef.current.click();
  };

  const triggerImageUpload = () => {
    imageInputRef.current.click();
  };

  return (
    <div className="citizen-portal">
      <div className="portal-header stagger-1">
        <h1 className="heading-1">Citizen Fraud Shield</h1>
        <p className="text-muted">AI-powered protection against digital arrest scams and counterfeit currency.</p>
        <div className="language-selector">
          <Languages size={16} /> <span>Language: English (Change to Hindi, Tamil, etc.)</span>
        </div>
      </div>

      <div className="portal-tabs stagger-2">
        <button 
          className={`tab-btn ${activeTab === 'scam-check' ? 'active' : ''}`}
          onClick={() => { setActiveTab('scam-check'); setScanStatus('idle'); }}
        >
          <MessageSquareWarning size={18} /> Scam Assessment AI
        </button>
        <button 
          className={`tab-btn ${activeTab === 'counterfeit' ? 'active' : ''}`}
          onClick={() => { setActiveTab('counterfeit'); setScanStatus('idle'); }}
        >
          <Scan size={18} /> Counterfeit Note Scanner
        </button>
      </div>

      <div className="portal-content stagger-3">
        {activeTab === 'scam-check' && (
          <div className="tool-card glass-panel">
            <h2 className="heading-2">Verify Suspicious Calls & Messages</h2>
            <p className="text-muted" style={{marginBottom: '2rem'}}>Upload an audio recording or paste a message. Our NLP engine will analyze coercive language patterns (e.g., fake CBI/Customs threats) with near-zero false positives.</p>
            
            {scanStatus === 'idle' && (
              <div className="upload-zone interactive-hover" onClick={triggerAudioUpload}>
                <input type="file" ref={audioInputRef} style={{display: 'none'}} accept="audio/*,image/*" onChange={simulateScan} />
                <Upload size={48} className="text-muted" style={{marginBottom: '1rem'}} />
                <h3>Drop Audio Recording or Screenshot Here</h3>
                <p className="text-muted">or click to browse</p>
                <div className="demo-hint">Demo: Select any file to simulate the AI scanning process</div>
              </div>
            )}

            {scanStatus === 'scanning' && (
              <div className="scanning-zone">
                <div className="scanner-line-vertical"></div>
                <div className="audio-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <h3>Transcribing & Analyzing NLP Patterns...</h3>
                <p className="text-muted">Checking against known scam scripts & voice spoofing models.</p>
              </div>
            )}

            {scanStatus === 'danger' && (
              <div className="result-zone danger animate-pop">
                <AlertTriangle size={64} color="var(--accent-red)" style={{marginBottom: '1rem'}} />
                <h3 style={{color: 'var(--accent-red)', fontSize: '1.5rem'}}>HIGH RISK: Digital Arrest Scam Detected</h3>
                <div className="analysis-details">
                  <p><strong>Impersonation Vector:</strong> CBI / Customs</p>
                  <p><strong>Coercive Language Detected:</strong> "immediate arrest", "money laundering", "do not disconnect"</p>
                  <p><strong>Verdict:</strong> 99.8% match with known fraud compounds.</p>
                </div>
                <div className="action-buttons">
                  <button className="btn btn-primary" style={{background: 'var(--accent-red)'}}>Block Number & Report to NCRB</button>
                  <button className="btn btn-outline" onClick={() => setScanStatus('idle')}>Scan Another</button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'counterfeit' && (
          <div className="tool-card glass-panel">
            <h2 className="heading-2">Counterfeit Currency AI</h2>
            <p className="text-muted" style={{marginBottom: '2rem'}}>Deployable on mobile or bank POS. Uses computer vision to verify microprint, security threads, and serial number patterns.</p>
            
            {scanStatus === 'idle' && (
              <div className="upload-zone interactive-hover" onClick={triggerImageUpload}>
                <input type="file" ref={imageInputRef} style={{display: 'none'}} accept="image/*" onChange={simulateCurrencyScan} capture="environment" />
                <Camera size={48} className="text-muted" style={{marginBottom: '1rem'}} />
                <h3>Take a Photo of Currency Note</h3>
                <p className="text-muted">Align the ₹500 note within the frame (Click to upload/open camera)</p>
                <div className="demo-hint">Demo: Select any image to simulate scanning a valid ₹500 note</div>
              </div>
            )}

            {scanStatus === 'scanning' && (
              <div className="scanning-zone currency-scan">
                <div className="scanner-line"></div>
                <div className="mock-note">₹500</div>
                <h3 style={{marginTop: '2rem'}}>Running Computer Vision Analysis...</h3>
                <p className="text-muted">Verifying Intaglio print and UV features.</p>
              </div>
            )}

            {scanStatus === 'safe' && (
              <div className="result-zone safe animate-pop">
                <ShieldCheck size={64} color="var(--accent-green)" style={{marginBottom: '1rem'}} />
                <h3 style={{color: 'var(--accent-green)', fontSize: '1.5rem'}}>VERIFIED: Genuine Currency</h3>
                <div className="analysis-details" style={{borderColor: 'var(--accent-green)'}}>
                  <p><strong>Denomination:</strong> ₹500</p>
                  <p><strong>Security Thread:</strong> Validated (Color shift green to blue)</p>
                  <p><strong>Micro-lettering:</strong> Legible ('RBI' and 'भारत')</p>
                </div>
                <button className="btn btn-primary" style={{marginTop: '1.5rem', background: 'var(--accent-green)', borderColor: 'var(--accent-green)'}} onClick={() => setScanStatus('idle')}>Scan Next Note</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitizenPortal;
