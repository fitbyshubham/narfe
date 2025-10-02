'use client';

import React from 'react';

const NarfeTripPreview = () => {
  return (
    <section
      style={{
        backgroundColor: '#111827', // gray-900
        color: 'white',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <button style={{ fontSize: '24px', fontWeight: 'bold', background: 'none', border: 'none', color: 'white' }}>←</button>
            <span style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '1px', color: 'white' }}>
              YOUR TRIP PREVIEW
            </span>
            <button style={{ fontSize: '14px', fontWeight: '500', background: 'none', border: 'none', color: '#fbbf24' }}>Continue</button>
          </div>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#d1d5db' }}>
            You’ve selected a premium trip itinerary by <strong style={{ color: '#fbbf24' }}>Alex</strong>. Here’s what you get:
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: '#1f2937', // gray-800
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
            marginBottom: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="lg:flex"
        >
          {/* Left Panel */}
          <div style={{ padding: '32px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: '#1f2937',
                }}
              >
                A
              </div>
              <div>
                <h3 style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '20px', margin: '0 0 4px 0' }}>Alex</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>Travel Creator • 5K followers</p>
              </div>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Bali: Hidden Gems & Local Secrets
            </h2>

            <p style={{ color: '#d1d5db', lineHeight: 1.6, marginBottom: '24px' }}>
              A 5-day curated journey through Bali’s most authentic spots — from secret temples to local warungs.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>What’s Included</h4>
              <ul style={{ color: '#d1d5db', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>AI-powered daily schedule & budget breakdown</li>
                <li>Google Maps integration with pinned locations</li>
                <li>Direct access to Alex for Q&A and customization</li>
                <li>Downloadable PDF + printable checklist</li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid #374151', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', textAlign: 'center', fontSize: '14px' }}>
              <div>
                <div style={{ color: 'white', fontWeight: '600' }}>THEME</div>
                <div style={{ color: '#9ca3af' }}>People</div>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: '600' }}>CREATED</div>
                <div style={{ color: '#9ca3af' }}>26.9k trips</div>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: '600' }}>AVG. RATE</div>
                <div style={{ color: '#9ca3af' }}>9.7 / 10</div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ backgroundColor: '#111827', width: '100%', padding: '16px', position: 'relative' }}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#374151' }}></div>
                  <div>
                    <div style={{ width: '64px', height: '12px', backgroundColor: '#374151', borderRadius: '4px', marginBottom: '4px' }}></div>
                    <div style={{ width: '48px', height: '10px', backgroundColor: '#4b5563', borderRadius: '3px' }}></div>
                  </div>
                </div>
                <div style={{ width: '48px', height: '24px', backgroundColor: '#374151', borderRadius: '12px' }}></div>
              </div>

              <div style={{ flex: 1, backgroundColor: '#1f2937', borderRadius: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textAlign: 'center', padding: '16px' }}>
                🌅 Sunset in Santorini<br />
                <span style={{ fontSize: '12px' }}>Best spots for that perfect shot</span>
              </div>

              <div>
                <div style={{ width: '100%', height: '14px', backgroundColor: '#374151', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ display: 'flex', gap: '16px', color: '#9ca3af', fontSize: '14px' }}>
                  <span>❤️ 2.4K</span>
                  <span>💬 89</span>
                  <span>↗️ Share</span>
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              $29.99
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              padding: '12px 24px',
              borderRadius: '999px',
              border: '1px solid #4b5563',
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
          <button
            style={{
              padding: '12px 24px',
              borderRadius: '999px',
              backgroundColor: '#fbbf24',
              color: '#1f2937',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default NarfeTripPreview;