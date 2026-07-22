import React from 'react';
import { Shield, Network, FileCheck, ArrowRight, Zap, Target } from 'lucide-react';
import './LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge-pill pulse-glow">
            <span className="live-dot"></span> Next-Gen Fraud Neutralization
          </div>
          <h1 className="hero-title">
            Defeat <span className="text-gradient">Digital Arrest</span><br />
            Before It Happens
          </h1>
          <p className="hero-subtitle">
            Sentinel is an AI-powered intelligence platform that equips citizens and law enforcement to detect, disrupt, and neutralize organized scam operations with predictive accuracy.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('citizen')}>
              Try Citizen Shield <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => onNavigate('police')}>
              View Command Center
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shield">
             <Shield size={120} className="shield-icon" />
             <div className="ring ring-1"></div>
             <div className="ring ring-2"></div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="problem-section stagger-1">
        <h2 className="section-title">The ₹1,776 Crore Problem</h2>
        <p className="section-subtitle">Digital arrest scams are not opportunistic—they are industrialized operations.</p>
        
        <div className="stats-container">
          <div className="stat-box glass-panel interactive-hover">
            <div className="stat-number text-gradient">1.14M</div>
            <div className="stat-desc">Cybercrime complaints registered in 2023, up 60% YoY.</div>
          </div>
          <div className="stat-box glass-panel interactive-hover">
            <div className="stat-number text-gradient">₹1.7K Cr</div>
            <div className="stat-desc">Lost to digital arrest scams in just 9 months (MHA 2024).</div>
          </div>
          <div className="stat-box glass-panel interactive-hover">
            <div className="stat-number text-gradient">Multi-Day</div>
            <div className="stat-desc">Psychological hostage situations using spoofed Govt IDs.</div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points / Evaluation Alignment */}
      <section className="usp-section stagger-2">
        <h2 className="section-title">Built for the PS6 Evaluation Criteria</h2>
        <div className="features-grid">
          
          <div className="feature-card glass-panel interactive-hover">
            <div className="feature-icon"><Target size={32} color="var(--accent-blue)" /></div>
            <h3>High Precision, Low False Positives</h3>
            <p>Our NLP engine is fine-tuned to identify coercive language and specific impersonation vectors (CBI, Customs) ensuring citizens get reliable alerts without alarm fatigue.</p>
          </div>

          <div className="feature-card glass-panel interactive-hover">
            <div className="feature-icon"><Zap size={32} color="var(--accent-red)" /></div>
            <h3>Predictive Lead Time</h3>
            <p>We shift from reactive investigation to predictive threat mapping. By analyzing call metadata clusters, we identify fraud network infrastructure before mass victimization occurs.</p>
          </div>

          <div className="feature-card glass-panel interactive-hover">
            <div className="feature-icon"><FileCheck size={32} color="var(--accent-green)" /></div>
            <h3>Legal Admissibility</h3>
            <p>The Command Center automatically generates cryptographically hashed, auditable intelligence packages linking spoofed numbers and mule networks for immediate court submission.</p>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-section stagger-3">
        <div className="glass-panel cta-box">
          <h2>Ready to disrupt the network?</h2>
          <p>Explore the functional prototypes below.</p>
          <div className="hero-actions" style={{justifyContent: 'center', marginTop: '2rem'}}>
            <button className="btn btn-primary" onClick={() => onNavigate('citizen')}>Citizen Portal</button>
            <button className="btn btn-outline" onClick={() => onNavigate('police')}>Command Center</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
