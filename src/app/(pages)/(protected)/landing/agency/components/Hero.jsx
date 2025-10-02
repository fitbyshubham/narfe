'use client';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentReel, setCurrentReel] = useState(0);
  
  // Reels data for interactive scrolling
  const reels = [
    {
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80',
      username: 'travelwithsarah',
      location: 'Bali, Indonesia',
      caption: 'Hidden temple gems you won\'t find in guidebooks 🏛️',
      likes: '1.2K',
      comments: '45',
      icon: '✈️'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80',
      username: 'adventuredan',
      location: 'Santorini, Greece',
      caption: 'Best sunset spots for that perfect shot 🌅',
      likes: '2.4K',
      comments: '89',
      icon: '🌅'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80',
      username: 'wanderlustjess',
      location: 'Tokyo, Japan',
      caption: 'Local food markets you can\'t miss 🍣',
      likes: '3.1K',
      comments: '127',
      icon: '🍣'
    }
  ];

  // Auto-scroll through reels
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReel(prev => (prev + 1) % reels.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reels.length]);

  return (
    <section className="narfe-hero">
      {/* Header */}
      <header className="hero-header">
        <div className="logo">narfe</div>
        <div className="nav-title">Monetise Your Journeys</div>
        <div className="menu-icon">☰</div>
      </header>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-grid">
          {/* Text Column */}
          <div className="text-column">
            <h1 className="headline">
              Join thousands of creators turning their trips into income. Share itineraries. Get paid. Inspire travelers.
            </h1>
            <div className="cta-group">
              <button className="btn-primary">Browse Creator Trips</button>
              <button className="btn-secondary">Start Earning</button>
            </div>
            <div className="trust-indicators">
              <div className="trust-item">
                <span>💰</span> Earn passive income
              </div>
              <div className="trust-item">
                <span>🤖</span> AI-powered trip builder
              </div>
            </div>
          </div>
          
          {/* Phone Column */}
          <div className="image-column">
            <div className="phone-prototype">
              {/* Phone Frame */}
              <div className="phone-frame">
                {/* Phone Screen */}
                <div className="phone-screen">
                  {/* Reel Content */}
                  {reels.map((reel, index) => (
                    <div 
                      key={index} 
                      className={`reel-content ${index === currentReel ? 'active' : ''}`}
                      style={{ 
                        transform: `translateY(${(index - currentReel) * 100}%)`,
                        opacity: index === currentReel ? 1 : 0
                      }}
                    >
                      {/* Header */}
                      <div className="reel-header">
                        <div className="header-left">
                          <img src={reel.avatar} alt={reel.username} className="avatar" />
                          <div className="user-info">
                            <div className="username">@{reel.username}</div>
                            <div className="location">{reel.location}</div>
                          </div>
                        </div>
                        <button className="follow-btn">Follow</button>
                      </div>
                      
                      {/* Icon instead of image */}
                      <div className="reel-icon">
                        <div className="icon-display">
                          {reel.icon}
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="reel-footer">
                        <div className="caption">{reel.caption}</div>
                        <div className="action-icons">
                          <div className="icon-group">
                            <span>❤️</span> {reel.likes}
                          </div>
                          <div className="icon-group">
                            💬 {reel.comments}
                          </div>
                          <div className="icon-group">
                            ↗️ Share
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Phone Notch */}
                <div className="phone-notch"></div>
              </div>
              
              {/* Creator Badge */}
              <div className="creator-badge">
                <span>🔥 Top Creator</span>
                <span className="earnings">$2,450 earned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .narfe-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #16213e 100%);
        }

        /* Header */
        .hero-header {
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 100;
        }

        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          color: white;
        }

        .nav-title {
          color: white;
          font-size: 1rem;
        }

        .menu-icon {
          color: white;
          font-size: 1.5rem;
        }

        /* Main Content */
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 2rem auto;
          width: 100%;
          padding-top: 2rem; /* Add padding to prevent content from being hidden under header */
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .text-column {
          padding-right: 2rem;
        }

        .headline {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 1rem 0;
          text-align: center;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          background: #ffd700;
          color: #333;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
          min-width: 160px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 140px;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .trust-indicators {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          justify-content: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .image-column {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Phone Prototype */
        .phone-prototype {
          position: relative;
        }

        .phone-frame {
          width: 300px;
          height: 600px;
          background: #1a1a1a;
          border-radius: 40px;
          position: relative;
          padding: 25px 10px 80px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #0f0f0f;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
        }

        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 20px;
          background: #1a1a1a;
          border-radius: 0 0 10px 10px;
          z-index: 20;
        }

        /* Reel Content */
        .reel-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 16px;
          display: flex;
          flex-direction: column;
          transition: all 0.5s ease;
        }

        .reel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .username {
          font-weight: 600;
          font-size: 0.9rem;
          color: white;
        }

        .location {
          font-size: 0.8rem;
          color: #aaa;
        }

        .follow-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .reel-icon {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .icon-display {
          font-size: 6rem;
          animation: pulse 2s infinite;
          color: #ffd700;
        }

        .reel-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .caption {
          font-size: 0.9rem;
          color: white;
          font-weight: 500;
        }

        .action-icons {
          display: flex;
          gap: 16px;
        }

        .icon-group {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: #aaa;
        }

        /* Creator Badge */
        .creator-badge {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 20;
          color: white;
        }

        .earnings {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .text-column {
            padding-right: 0;
          }

          .headline {
            font-size: 2.5rem;
          }

          .image-column {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .narfe-hero {
            padding: 0;
          }

          .hero-content {
            margin: 1rem auto;
            padding-top: 1rem;
          }

          .headline {
            font-size: 2rem;
          }

          .phone-frame {
            width: 250px;
            height: 500px;
            padding: 20px 8px 60px;
          }

          .phone-notch {
            width: 120px;
            height: 16px;
          }

          .icon-display {
            font-size: 4rem;
          }

          .avatar {
            width: 32px;
            height: 32px;
          }

          .username {
            font-size: 0.8rem;
          }

          .location {
            font-size: 0.7rem;
          }

          .follow-btn {
            padding: 0.2rem 0.6rem;
            font-size: 0.7rem;
          }

          .caption {
            font-size: 0.8rem;
          }

          .icon-group {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .hero-header {
            padding: 0.75rem 1rem;
          }

          .logo {
            font-size: 1.25rem;
          }

          .nav-title {
            font-size: 0.85rem;
          }

          .headline {
            font-size: 1.75rem;
          }

          .phone-frame {
            width: 220px;
            height: 440px;
            padding: 15px 6px 50px;
          }

          .icon-display {
            font-size: 3rem;
          }

          .trust-item {
            font-size: 0.8rem;
          }

          .cta-group {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;