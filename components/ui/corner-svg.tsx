import React from "react";

interface CornerSvgProps {
  className?: string;
  svgColor?: string;
  children?: React.ReactNode;
}

const CornerSvg = ({ className = "", svgColor = "currentColor", children }: CornerSvgProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner - outside container */}
      <svg
        className="absolute -top-1 -left-1 bg-white"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        style={{ color: svgColor }}
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>

      {/* Top-right corner - outside container */}
      <svg
        className="absolute -top-1 -right-1 bg-white"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        style={{ color: svgColor }}
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>

      {/* Bottom-left corner - outside container */}
      <svg
        className="absolute -bottom-1 -left-1 bg-white"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        style={{ color: svgColor }}
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>

      {/* Bottom-right corner - outside container */}
      <svg
        className="absolute -bottom-1 -right-1 bg-white"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        style={{ color: svgColor }}
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>

      {children}
    </div>
  );
};

export { CornerSvg };