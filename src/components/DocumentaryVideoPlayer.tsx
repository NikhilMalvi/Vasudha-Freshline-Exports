import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface DocumentaryVideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  caption: string;
}

export const DocumentaryVideoPlayer: React.FC<DocumentaryVideoPlayerProps> = ({
  src,
  poster,
  title,
  caption,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        style={{
          aspectRatio: '9 / 16',
          backgroundColor: 'var(--navy)',
          border: '1px solid rgba(217, 213, 200, 0.25)',
          borderRadius: 'var(--radius)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePlay();
          }
        }}
        aria-label={`Video: ${title}`}
      >
        {!hasError ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setHasError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center',
              color: 'var(--bone)',
            }}
          >
            <span className="label-caps" style={{ color: 'var(--olive-light)', marginBottom: '8px' }}>
              Documentary Proof
            </span>
            <p style={{ fontSize: '14px', color: 'var(--ivory)', fontWeight: 500 }}>
              {title}
            </p>
          </div>
        )}

        {/* Play/Pause Minimal Indicator Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(21, 28, 23, 0.85)',
            border: '1px solid rgba(247, 245, 239, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ivory)',
            transition: 'opacity 200ms ease',
          }}
        >
          {isPlaying ? <Pause size={14} strokeWidth={1.5} /> : <Play size={14} strokeWidth={1.5} />}
        </div>

        {/* Category Tag Top Left */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(21, 28, 23, 0.92)',
            border: '1px solid rgba(217, 213, 200, 0.2)',
            padding: '3px 8px',
            borderRadius: 'var(--radius)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--olive-light)',
            fontWeight: 500,
          }}
        >
          Verified Footage
        </div>
      </div>

      {/* Caption below */}
      <div>
        <h3 style={{ fontSize: '16px', lineHeight: '22px', color: 'var(--ivory)', marginBottom: '4px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: '18px', color: 'rgba(236, 232, 220, 0.75)', margin: 0 }}>
          {caption}
        </p>
      </div>
    </div>
  );
};
