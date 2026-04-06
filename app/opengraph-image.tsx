import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rashed Zaman — Tech Lead & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #f59e0b, #10b981)',
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Initials avatar */}
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #f59e0b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '28px',
          }}
        >
          RZ
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            letterSpacing: '-1px',
          }}
        >
          Rashed Zaman
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            color: '#a5b4fc',
            marginBottom: '32px',
            fontWeight: '500',
          }}
        >
          Tech Lead &amp; Full-Stack Developer
        </div>

        {/* Tags row */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['PHP', 'Node.js', 'React', 'AWS', '10+ Years'].map(tag => (
            <div
              key={tag}
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            color: '#4b5563',
            fontSize: '18px',
          }}
        >
          jmrashed.github.io
        </div>
      </div>
    ),
    { ...size }
  );
}
