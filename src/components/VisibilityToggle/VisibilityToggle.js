'use client';
import React from 'react';

// Josh called this component Revealable (which I like better)

function VisibilityToggle({ children }) {
  const [isVisible, setIsVisible] = React.useState(false);

  return isVisible ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsVisible(true)}>Reveal Content</button>
    </div>
  );
}

export default VisibilityToggle;
