'use client';

import { useTheme } from './ThemeProvider';

export default function HeavenToggle() {
  const { heaven, toggle } = useTheme();

  return (
    <div
      className="w-full text-center py-2 px-4 text-xs font-semibold cursor-pointer select-none transition-all duration-500 z-[60] relative"
      onClick={toggle}
      style={{
        background: heaven
          ? 'linear-gradient(90deg, #e8f0fe 0%, #d4e4fc 50%, #e8f0fe 100%)'
          : `linear-gradient(90deg, rgba(244,140,37,0.15) 0%, rgba(244,140,37,0.05) 50%, rgba(244,140,37,0.15) 100%)`,
        color: heaven ? '#4a6fa5' : '#f48c25',
      }}
    >
      {heaven ? (
        <span>😇 Heaven Mode active. too bright? Click to return to the dark side 😈</span>
      ) : (
        <span>😈 Too dark for you? Click here to enter <strong>Heaven Mode</strong> 😇</span>
      )}
    </div>
  );
}
