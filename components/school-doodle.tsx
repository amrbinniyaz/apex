'use client';

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';

type DoodleKind = 'arrow-right' | 'arrow-left' | 'plane' | 'bulb' | 'book' | 'stars';
type InkStroke = { d: string; color?: string; wash?: string };

const arrow: InkStroke[] = [
  { d: 'M94 12C86 29 78 59 79 78C80 102 86 109 97 110C111 112 115 90 109 84C102 75 95 79 89 86C71 109 80 149 104 188' },
  { d: 'M84 174Q95 184 104 188Q100 174 100 158' },
];
const drawings: Record<DoodleKind, InkStroke[]> = {
  'arrow-left': arrow,
  'arrow-right': arrow,
  plane: [
    { d: 'M22 164C61 187 101 144 73 128C48 114 49 157 90 149C109 145 117 126 121 112' },
    { d: 'M63 64L174 27L144 128L117 94L93 110L96 77Z', wash: '#b9d9e7' },
    { d: 'M63 64L96 77L174 27L117 94L144 128M96 77L93 110L117 94' },
  ],
  bulb: [
    { d: 'M76 135C77 113 56 109 56 81C56 25 143 25 143 81C143 109 122 115 123 135Z', wash: '#e9bb63' },
    { d: 'M89 134L85 83C82 64 108 77 97 91C83 107 108 105 112 85L108 134' },
    { d: 'M76 143L123 139M78 153L121 149M86 161Q100 175 114 160' },
    { d: 'M98 22L98 9M45 39L34 27M153 40L166 27M35 84L20 82M163 82L180 80', color: '#d8a443' },
  ],
  book: [
    { d: 'M99 63Q67 37 28 48L23 142Q61 129 99 156Q133 131 175 143L169 48Q132 36 99 63Z', wash: '#b9d9e7' },
    { d: 'M99 63L99 156M29 54L18 58L12 151Q59 139 99 167Q136 145 185 153L179 58L170 54' },
    { d: 'M132 47L133 102L145 92L154 98L153 43', color: '#b83b45', wash: '#b83b45' },
    { d: 'M41 72Q62 66 84 79M40 90Q62 84 84 97M39 109Q61 103 83 116M115 117Q134 107 159 114M115 134Q137 122 160 130' },
  ],
  stars: [
    { d: 'M72 65Q75 111 112 120Q75 124 67 163Q61 126 28 117Q63 112 72 65Z', color: '#d8a443', wash: '#e9bb63' },
    { d: 'M134 25Q138 57 160 64Q136 68 131 96Q127 69 105 61Q128 58 134 25Z', color: '#d8a443', wash: '#e9bb63' },
    { d: 'M152 131Q154 152 172 157Q154 161 149 181Q146 162 130 156Q147 152 152 131Z', color: '#d8a443', wash: '#e9bb63' },
  ],
};

export function SchoolDoodle({ kind, className = '' }: { kind: DoodleKind; className?: string }) {
  const textureId = `doodle-ink-${useId().replace(/:/g, '')}`;
  const isArrow = kind === 'arrow-left' || kind === 'arrow-right';
  const element = useRef<SVGSVGElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const svg = element.current;
    if (!svg || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: .3,
    });
    setArmed(true);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return <svg ref={element} className={`school-doodle doodle-${kind} ${className} ${armed ? 'ink-ready' : ''} ${visible ? 'ink-visible' : ''}`} viewBox="0 0 200 200" fill="none" aria-hidden="true" focusable="false">
    {isArrow && <defs>
      <filter id={textureId} x="-15%" y="-10%" width="130%" height="120%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="8" result="grain" />
        <feDisplacementMap in="SourceGraphic" in2="grain" scale=".85" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>}
    <g transform={kind === 'arrow-left' ? 'translate(200 0) scale(-1 1)' : undefined} filter={isArrow ? `url(#${textureId})` : undefined}>
      {drawings[kind].map(({ d, color, wash }, index) => <g key={index} style={{ '--ink-order': index } as CSSProperties}>
        {wash && <path className="doodle-wash" d={d} fill={wash} fillOpacity=".22" stroke="none" />}
        <path className="doodle-stroke" d={d} pathLength="1" stroke={color ?? 'currentColor'} strokeWidth={isArrow ? 3.6 : 2.6} strokeLinecap="round" strokeLinejoin="round" />
      </g>)}
    </g>
  </svg>;
}
