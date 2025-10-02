'use client';

import { useState } from 'react';

const CreatorApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    socialHandle: '',
    followers: '',
    travelType: '',
    monetize: '',
    foundingCreator: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 🔥 REPLACE WITH YOUR GOOGLE APPS SCRIPT URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec';

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          socialHandle: '',
          followers: '',
          travelType: '',
          monetize: '',
          foundingCreator: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#0a0a0f',
        color: 'white',
        padding: '64px 16px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
            Apply to Join as a Founding Creator
          </h2>
          <p style={{ color: '#a0aec0', fontSize: '16px' }}>
            Help shape Narfe’s future. Only 200 spots available.
          </p>
        </div>

        {/* Glass Card with Fallback */}
        <div
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          {submitStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                <span style={{ fontSize: '28px', color: '#22c55e' }}>✓</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
                Application Received!
              </h3>
              <p style={{ color: '#cbd5e0', fontSize: '16px' }}>
                Thanks for applying! We’ll review your profile and reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'white' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(17, 24, 39, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'white' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(17, 24, 39, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Social Handle */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'white' }}>
                  Instagram/TikTok/YouTube Handle(s) *
                </label>
                <input
                  type="text"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleChange}
                  required
                  placeholder="@yourhandle or youtube.com/@yourchannel"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(17, 24, 39, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Followers */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Number of Followers (approx.) *
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {['<5k', '5k–25k', '25k–100k', '100k+'].map((range) => (
                    <label
                      key={range}
                      style={{
                        padding: '12px',
                        border: formData.followers === range
                          ? '1px solid #f59e0b'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        background: formData.followers === range ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        color: formData.followers === range ? '#f59e0b' : '#cbd5e0',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name="followers"
                        value={range}
                        checked={formData.followers === range}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        required
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* Travel Type */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  What type of travel content do you create? *
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {[
                    'Luxury travel',
                    'Adventure / outdoors',
                    'Backpacking / budget',
                    'Culture & food',
                    'Family / group travel',
                    'Other'
                  ].map((type) => (
                    <label
                      key={type}
                      style={{
                        padding: '12px',
                        border: formData.travelType === type
                          ? '1px solid #f59e0b'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        background: formData.travelType === type ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        color: formData.travelType === type ? '#f59e0b' : '#cbd5e0',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name="travelType"
                        value={type}
                        checked={formData.travelType === type}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        required
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Monetize */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Would you be interested in monetizing your Travel itineraries? *
                </label>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {['Yes', 'No'].map((option) => (
                    <label
                      key={option}
                      style={{
                        padding: '12px 24px',
                        border: formData.monetize === option
                          ? '1px solid #f59e0b'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        background: formData.monetize === option ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        color: formData.monetize === option ? '#f59e0b' : '#cbd5e0',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name="monetize"
                        value={option}
                        checked={formData.monetize === option}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Founding Creator */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Would you like to be featured as a “Founding Creator” when we launch? *
                </label>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {['Yes', 'No'].map((option) => (
                    <label
                      key={option}
                      style={{
                        padding: '12px 24px',
                        border: formData.foundingCreator === option
                          ? '1px solid #f59e0b'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        background: formData.foundingCreator === option ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                        color: formData.foundingCreator === option ? '#f59e0b' : '#cbd5e0',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name="foundingCreator"
                        value={option}
                        checked={formData.foundingCreator === option}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px',
                  background: 'linear-gradient(to right, #f59e0b, #fbbf24)',
                  color: '#0f172a',
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.8 : 1,
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Apply to Join'}
              </button>

              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '8px' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreatorApplicationForm;