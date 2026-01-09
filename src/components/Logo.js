import React from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(({ className = "", showText = true, size = "default", variant = "light", useImage = false, imageSrc = null }) => {
  const sizes = {
    small: { width: 32, height: 32, textSize: "text-lg" },
    default: { width: 48, height: 48, textSize: "text-2xl" },
    large: { width: 64, height: 64, textSize: "text-3xl" }
  };

  const { width, height, textSize } = sizes[size] || sizes.default;
  
  const textColors = variant === "dark" 
    ? { trueText: "text-white", axisText: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent", tagline: "text-blue-400" }
    : { trueText: "text-gray-900", axisText: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent", tagline: "text-blue-600" };

  // Always use provided imageSrc if available, otherwise always show SVG to prevent blinking
  const imageSrcValue = (useImage && imageSrc) ? imageSrc : null;

  // Always render SVG first, then update if image is available
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="flex-shrink-0 relative">
        {imageSrcValue ? (
          <img
            src={imageSrcValue}
            alt="TrueAxis IT Solutions Logo"
            width={width}
            height={height}
            className="transition-opacity duration-200"
            style={{ opacity: 1 }}
          />
        ) : (
          <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform hover:scale-105"
          >
            <g>
              <path
                d="M20 15 L45 15 L45 20 L30 20 L30 55 L20 55 Z"
                fill={variant === "dark" ? "#000000" : "#1e293b"}
                opacity={variant === "dark" ? "0.2" : "0.3"}
              />
              <path
                d="M15 10 L50 10 L50 15 L30 15 L30 60 L15 60 Z"
                fill={variant === "dark" ? "white" : "#1e293b"}
              />
              <path
                d="M15 10 L50 10 L50 12 L17 12 L17 60 L15 60 Z"
                fill={variant === "dark" ? "url(#tGradientLight)" : "url(#tGradientDark)"}
                opacity="0.8"
              />
            </g>
            <g>
              <path
                d="M25 65 Q35 50, 50 45 L55 50 Q40 55, 30 70 Z"
                fill={variant === "dark" ? "#000000" : "#1e293b"}
                opacity="0.2"
              />
              <path
                d="M20 70 Q30 55, 45 50 L85 10 L90 15 L50 55 Q35 60, 25 75 Z"
                fill="url(#arrowGradient)"
              />
              <path
                d="M20 70 Q30 55, 45 50 L85 10 L88 12 L50 55 Q35 60, 25 75 Z"
                fill="url(#arrowHighlight)"
                opacity="0.6"
              />
              <path
                d="M20 70 L15 75 L18 78 L25 75 Z"
                fill="url(#arrowGradient)"
              />
              <path
                d="M22 72 L17 77 L20 80 L27 75 Z"
                fill="url(#arrowGradient)"
              />
            </g>
            <defs>
              <linearGradient id="tGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="tGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="arrowHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`font-display font-bold ${textSize} leading-tight tracking-tight`}>
            <span className={textColors.trueText}>True</span>
            <span className={textColors.axisText}>Axis</span>
          </div>
          <div className={`text-xs ${textColors.tagline} font-display font-semibold tracking-wider uppercase`}>
            IT Solutions
          </div>
        </div>
      )}
    </Link>
  );
});

Logo.displayName = 'Logo';

export default Logo;
