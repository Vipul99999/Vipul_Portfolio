"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ResponsiveImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const ResponsiveImageFrame: React.FC<ResponsiveImageFrameProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number>(56.25); // default 16:9

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const ratio = (img.height / img.width) * 100;
      setAspectRatio(ratio);
    };
  }, [src]);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ paddingTop: `${aspectRatio}%` }}
      role="img"
      aria-label={alt}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-contain ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 bg-gray-100">
          {alt} Image failed to load.
        </span>
      )}
    </div>
  );
};

export default ResponsiveImageFrame;
