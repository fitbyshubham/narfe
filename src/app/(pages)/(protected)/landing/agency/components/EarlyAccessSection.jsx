'use client';

import { useState } from 'react';

const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 1200);
  };

  const pillars = [
    { icon: '🎥', title: 'Immersive Storytelling', desc: 'Create scroll-stopping Reels with cinematic flair.' },
    { icon: '🗺️', title: 'Actionable Itineraries', desc: 'Turn views into real trips with 1-tap saveable plans.' },
    { icon: '💸', title: 'Direct Monetization', desc: 'Get paid when followers use your expert routes.' },
    { icon: '🤝', title: 'Creator-First Ecosystem', desc: 'Build in a curated space—no algorithmic noise.' }
  ];

  const benefits = [
    'Get featured as an official Narfe Pioneer',
    'Influence platform design and tools',
    'Be among the first to monetize travel itineraries'
  ];

  return (
    <section
      style={{
        backgroundColor: '#0a0a0f',
        color: 'white',
        padding: '120px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Orbs (Optional) */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: 'rgba(255, 215, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
            }}
          >
            <span style={{ fontSize: '28px' }}>✈️</span>
          </div>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '800',
              lineHeight: 1.2,
              marginBottom: '24px',
              background: 'linear-gradient(to right, white, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Shape the Future of Travel Content
          </h1>
          <p style={{ fontSize: '22px', color: '#a0aec0', lineHeight: 1.6 }}>
            Be one of the first <strong style={{ color: '#ffd700' }}>200 creators</strong> to build on Narfe—where your trips become income.
          </p>
        </div>

        {/* Value Prop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '18px', color: '#cbd5e0', lineHeight: 1.7 }}>
              Narfe fuses the virality of TikTok with real utility: your videos don’t just entertain—they{' '}
              <strong style={{ color: '#ffd700' }}>enable action</strong>.
            </p>
            <div style={{ fontStyle: 'italic', color: '#a0aec0', paddingLeft: '16px', borderLeft: '2px solid #ffd700' }}>
              “Finally—a platform that rewards creators, not just engagement.”
            </div>
          </div>

          <div
            style={{
              background: 'rgba(17, 24, 39, 0.6)',
              borderRadius: '24px',
              padding: '32px',
              border: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', marginTop: '4px', color: '#ffd700' }}>💡</span>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
                  The Narfe Difference
                </h3>
                <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
                  While Instagram buries your content and TikTok takes 100% of ad revenue—Narfe gives you tools to{' '}
                  <strong>own your audience</strong> and <strong>monetize your expertise</strong> directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
              Why Creators Choose Narfe
            </h2>
            <p style={{ color: '#a0aec0', maxWidth: '600px', margin: '0 auto' }}>
              Built for those who travel to inspire—and earn.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 215, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.4)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.border = '1px solid rgba(255, 215, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#a0aec0', lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(255, 215, 0, 0.05), transparent, rgba(255, 215, 0, 0.05))',
            borderRadius: '24px',
            padding: '2px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
          }}
        >
          <div
            style={{
              background: 'rgba(10, 10, 15, 0.8)',
              borderRadius: '22px',
              padding: '48px',
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px', color: 'white' }}>
                Join the First 200 Pioneers
              </h2>
              <p style={{ fontSize: '18px', color: '#cbd5e0', marginBottom: '32px' }}>
                Influence product direction, get featured at launch, and unlock early monetization tools.
              </p>

              {isSuccess ? (
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(34, 197, 94, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <span style={{ fontSize: '32px', color: '#22c55e' }}>✓</span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
                    You’re In!
                  </h3>
                  <p style={{ color: '#a0aec0' }}>Check your inbox for your Pioneer onboarding guide.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      style={{
                        flex: '1',
                        minWidth: '200px',
                        padding: '16px 20px',
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(107, 114, 128, 0.5)',
                        borderRadius: '14px',
                        color: 'white',
                        fontSize: '16px',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        padding: '16px 32px',
                        background: 'linear-gradient(to right, #ffd700, #ffed4e)',
                        color: '#1a202c',
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '14px',
                        fontSize: '16px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.8 : 1,
                        minWidth: '160px',
                      }}
                    >
                      {isSubmitting ? 'Processing...' : 'Secure Spot'}
                    </button>
                  </div>
                  <p style={{ color: '#718096', fontSize: '14px', marginTop: '12px' }}>
                    Only 200 spots • Launch access • Zero spam
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;