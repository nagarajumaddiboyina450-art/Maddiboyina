import React from 'react';

interface IllustrationProps {
  letter: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

export const Illustration: React.FC<IllustrationProps> = ({
  letter,
  size = 'md',
  className = '',
  animate = true,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
    xl: 'w-36 h-36 sm:w-48 sm:h-48',
  }[size];

  const renderSvg = () => {
    switch (letter.toUpperCase()) {
      case 'A': // Apple
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Stem & Leaf */}
            <path d="M50,22 Q52,10 58,8 Q54,18 52,22 Z" fill="#6B4226" />
            <path d="M52,12 Q68,6 70,20 Q56,22 52,12 Z" fill="#22C55E" />
            {/* Apple Body */}
            <path
              d="M50,26 C36,18 18,25 18,48 C18,74 38,88 50,88 C62,88 82,74 82,48 C82,25 64,18 50,26 Z"
              fill="#EF4444"
            />
            {/* Highlights */}
            <ellipse cx="34" cy="40" rx="6" ry="12" fill="#F87171" opacity="0.7" transform="rotate(-20 34 40)" />
            {/* Cute face */}
            <circle cx="42" cy="52" r="3" fill="#374151" />
            <circle cx="58" cy="52" r="3" fill="#374151" />
            <circle cx="43" cy="51" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="51" r="1" fill="#FFFFFF" />
            <ellipse cx="36" cy="58" rx="3" ry="1.5" fill="#FCA5A5" />
            <ellipse cx="64" cy="58" rx="3" ry="1.5" fill="#FCA5A5" />
            <path d="M47,58 Q50,62 53,58" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'B': // Banana
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M22,78 Q28,26 82,20 Q80,24 74,25 Q38,36 32,80 Z" fill="#EAB308" />
            <path d="M22,78 Q28,40 68,26 Q40,42 32,80 Z" fill="#FACC15" />
            {/* Tips */}
            <path d="M80,20 L86,18 L83,23 Z" fill="#65A30D" />
            <path d="M22,78 L18,84 L26,82 Z" fill="#78350F" />
            {/* Cute eyes */}
            <circle cx="48" cy="42" r="2.5" fill="#374151" />
            <circle cx="56" cy="38" r="2.5" fill="#374151" />
            <path d="M51,45 Q55,48 57,44" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'C': // Camel
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Desert ground */}
            <ellipse cx="50" cy="85" rx="38" ry="7" fill="#FED7AA" opacity="0.6" />
            {/* Body with Humps */}
            <path
              d="M25,65 L28,82 L34,82 L33,65 L44,65 L45,82 L51,82 L50,62 Q52,48 58,48 Q64,48 66,60 Q70,48 76,48 Q82,48 82,62 L82,82 L76,82 L75,65 L25,65 Z"
              fill="#D97706"
            />
            {/* Long Neck & Head */}
            <path d="M25,65 Q20,50 20,38 Q20,30 28,30 Q34,30 32,45 L32,65 Z" fill="#D97706" />
            {/* Snout */}
            <ellipse cx="23" cy="33" rx="7" ry="5" fill="#F59E0B" />
            {/* Ear */}
            <polygon points="30,28 32,21 34,28" fill="#B45309" />
            {/* Eye */}
            <circle cx="26" cy="32" r="2" fill="#1F2937" />
            <circle cx="26.5" cy="31.5" r="0.8" fill="#FFFFFF" />
            {/* Smiling mouth */}
            <path d="M19,34 Q22,37 25,35" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Saddle / birthday blanket */}
            <path d="M52,58 Q66,52 74,58 L72,66 L54,66 Z" fill="#EF4444" />
            <circle cx="63" cy="62" r="2" fill="#FBBF24" />
          </svg>
        );

      case 'D': // Dog
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Ears */}
            <ellipse cx="26" cy="46" rx="8" ry="16" fill="#92400E" transform="rotate(-15 26 46)" />
            <ellipse cx="74" cy="46" rx="8" ry="16" fill="#92400E" transform="rotate(15 74 46)" />
            {/* Head */}
            <circle cx="50" cy="52" r="26" fill="#F59E0B" />
            {/* Muzzle */}
            <ellipse cx="50" cy="62" rx="14" ry="10" fill="#FEF3C7" />
            {/* Nose */}
            <ellipse cx="50" cy="57" rx="5" ry="3.5" fill="#1F2937" />
            {/* Eyes */}
            <circle cx="40" cy="48" r="4" fill="#1F2937" />
            <circle cx="60" cy="48" r="4" fill="#1F2937" />
            <circle cx="41.5" cy="46.5" r="1.5" fill="#FFFFFF" />
            <circle cx="61.5" cy="46.5" r="1.5" fill="#FFFFFF" />
            {/* Tongue */}
            <path d="M47,65 Q50,74 53,65" fill="#F43F5E" />
            {/* Party Hat */}
            <polygon points="50,15 40,32 60,32" fill="#3B82F6" />
            <circle cx="50" cy="14" r="3" fill="#F59E0B" />
            <circle cx="47" cy="24" r="1.5" fill="#FFFFFF" />
            <circle cx="53" cy="28" r="1.5" fill="#EF4444" />
          </svg>
        );

      case 'E': // Elephant
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Big Ear */}
            <ellipse cx="30" cy="48" rx="16" ry="20" fill="#94A3B8" />
            <ellipse cx="30" cy="48" rx="10" ry="13" fill="#FBCFE8" />
            {/* Body */}
            <ellipse cx="62" cy="56" rx="24" ry="20" fill="#64748B" />
            {/* Head */}
            <circle cx="48" cy="48" r="18" fill="#64748B" />
            {/* Legs */}
            <rect x="46" y="68" width="8" height="18" rx="4" fill="#475569" />
            <rect x="62" y="68" width="8" height="18" rx="4" fill="#475569" />
            <rect x="74" y="68" width="8" height="18" rx="4" fill="#475569" />
            {/* Happy Curved Trunk up! */}
            <path
              d="M48,56 Q50,70 42,76 Q34,76 34,68 Q34,62 38,58"
              stroke="#64748B"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Water / Stars coming out of trunk */}
            <circle cx="32" cy="52" r="2" fill="#38BDF8" />
            <circle cx="28" cy="46" r="3" fill="#38BDF8" />
            <circle cx="25" cy="54" r="2.5" fill="#FDE047" />
            {/* Eye */}
            <circle cx="54" cy="44" r="3" fill="#0F172A" />
            <circle cx="55" cy="43" r="1" fill="#FFFFFF" />
            {/* Rosy Cheek */}
            <ellipse cx="56" cy="52" rx="3" ry="2" fill="#F472B6" opacity="0.6" />
          </svg>
        );

      case 'F': // Fish
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Tail Fin */}
            <polygon points="75,50 92,34 88,50 92,66" fill="#F97316" />
            {/* Dorsal Fin */}
            <path d="M42,32 Q55,20 62,34 Z" fill="#FB923C" />
            {/* Fish Body */}
            <ellipse cx="48" cy="50" rx="28" ry="18" fill="#F97316" />
            {/* White Clownfish Stripes */}
            <path d="M42,34 Q45,50 42,66 L47,65 Q50,50 47,35 Z" fill="#FFFFFF" />
            <path d="M58,36 Q61,50 58,64 L62,63 Q65,50 62,37 Z" fill="#FFFFFF" />
            {/* Eye */}
            <circle cx="32" cy="46" r="4.5" fill="#FFFFFF" />
            <circle cx="31" cy="46" r="2.5" fill="#0F172A" />
            <circle cx="30" cy="45" r="1" fill="#FFFFFF" />
            {/* Smiling Mouth */}
            <path d="M22,53 Q26,56 28,52" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Bubbles */}
            <circle cx="16" cy="42" r="3" fill="#38BDF8" opacity="0.7" />
            <circle cx="12" cy="32" r="2" fill="#38BDF8" opacity="0.6" />
            <circle cx="18" cy="24" r="2.5" fill="#38BDF8" opacity="0.8" />
          </svg>
        );

      case 'G': // Grapes
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Stem & Leaves */}
            <path d="M50,18 Q50,8 54,6" stroke="#713F12" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M50,16 Q36,12 36,24 Q44,26 50,16 Z" fill="#22C55E" />
            <path d="M52,16 Q66,12 66,24 Q58,26 52,16 Z" fill="#16A34A" />
            {/* Grape Bunch (10 berries) */}
            <g fill="#9333EA">
              <circle cx="38" cy="34" r="9" />
              <circle cx="52" cy="32" r="9" fill="#A855F7" />
              <circle cx="66" cy="36" r="9" />
              <circle cx="32" cy="48" r="9" />
              <circle cx="46" cy="46" r="9" fill="#7E22CE" />
              <circle cx="60" cy="48" r="9" fill="#A855F7" />
              <circle cx="40" cy="62" r="9" fill="#A855F7" />
              <circle cx="54" cy="62" r="9" />
              <circle cx="46" cy="74" r="8" fill="#7E22CE" />
            </g>
            {/* Highlights */}
            <circle cx="36" cy="32" r="2" fill="#E9D5FF" />
            <circle cx="50" cy="30" r="2" fill="#E9D5FF" />
            <circle cx="44" cy="44" r="2" fill="#E9D5FF" />
          </svg>
        );

      case 'H': // Hen
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Feet */}
            <line x1="44" y1="76" x2="44" y2="86" stroke="#F59E0B" strokeWidth="3" />
            <line x1="56" y1="76" x2="56" y2="86" stroke="#F59E0B" strokeWidth="3" />
            {/* Body */}
            <ellipse cx="50" cy="58" rx="24" ry="18" fill="#FB7185" />
            {/* Wing */}
            <ellipse cx="54" cy="58" rx="13" ry="9" fill="#E11D48" />
            {/* Head */}
            <circle cx="36" cy="42" r="12" fill="#FB7185" />
            {/* Comb (crest) */}
            <circle cx="32" cy="29" r="4" fill="#E11D48" />
            <circle cx="37" cy="27" r="4.5" fill="#E11D48" />
            <circle cx="42" cy="30" r="4" fill="#E11D48" />
            {/* Beak & Wattle */}
            <polygon points="26,42 18,46 26,49" fill="#F59E0B" />
            <circle cx="26" cy="52" r="3.5" fill="#E11D48" />
            {/* Eye */}
            <circle cx="34" cy="40" r="2.5" fill="#0F172A" />
            <circle cx="35" cy="39" r="0.8" fill="#FFFFFF" />
            {/* Tail Feathers */}
            <path d="M72,50 Q84,36 80,48 Q88,44 82,56 Q86,54 74,62 Z" fill="#E11D48" />
          </svg>
        );

      case 'I': // Ice Cream
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Waffle Cone */}
            <polygon points="32,54 50,92 68,54" fill="#D97706" />
            <line x1="38" y1="62" x2="62" y2="62" stroke="#B45309" strokeWidth="1.5" />
            <line x1="42" y1="72" x2="58" y2="72" stroke="#B45309" strokeWidth="1.5" />
            <line x1="46" y1="82" x2="54" y2="82" stroke="#B45309" strokeWidth="1.5" />
            {/* Bottom Scoop (Vanilla / Mint) */}
            <circle cx="50" cy="52" r="16" fill="#6EE7B7" />
            {/* Top Scoop (Strawberry Pink) */}
            <circle cx="50" cy="36" r="15" fill="#F472B6" />
            {/* Sprinkles */}
            <rect x="42" y="30" width="4" height="1.5" rx="0.5" fill="#FBBF24" transform="rotate(30 42 30)" />
            <rect x="52" y="28" width="4" height="1.5" rx="0.5" fill="#3B82F6" transform="rotate(-20 52 28)" />
            <rect x="46" y="38" width="4" height="1.5" rx="0.5" fill="#A855F7" transform="rotate(45 46 38)" />
            <rect x="56" y="36" width="4" height="1.5" rx="0.5" fill="#EF4444" transform="rotate(-15 56 36)" />
            {/* Cherry on top! */}
            <circle cx="50" cy="20" r="5" fill="#DC2626" />
            <path d="M50,16 Q54,8 60,6" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Cute face on scoop */}
            <circle cx="45" cy="52" r="2" fill="#1E293B" />
            <circle cx="55" cy="52" r="2" fill="#1E293B" />
            <path d="M48,56 Q50,58 52,56" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'J': // Jug
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Handle */}
            <path
              d="M32,40 Q16,50 32,70"
              stroke="#0D9488"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Pitcher / Jug Body */}
            <path
              d="M38,30 L66,30 L74,44 L70,78 Q70,84 62,84 L44,84 Q36,84 36,78 L32,44 Z"
              fill="#14B8A6"
            />
            {/* Spout */}
            <path d="M66,30 L76,26 L72,36 Z" fill="#0D9488" />
            {/* Juice level */}
            <path d="M36,54 Q53,50 68,54 L66,78 Q66,82 60,82 L44,82 Q38,82 38,78 Z" fill="#FB923C" />
            {/* Decorative Heart / Flower on Jug */}
            <circle cx="52" cy="66" r="5" fill="#FEF08A" />
            <circle cx="52" cy="66" r="2.5" fill="#F97316" />
          </svg>
        );

      case 'K': // Kite
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Kite Diamond */}
            <polygon points="50,14 78,44 50,74 22,44" fill="#06B6D4" />
            {/* Triangles */}
            <polygon points="50,14 78,44 50,44" fill="#F43F5E" />
            <polygon points="22,44 50,44 50,74" fill="#FBBF24" />
            <polygon points="50,44 78,44 50,74" fill="#10B981" />
            {/* Struts */}
            <line x1="50" y1="14" x2="50" y2="74" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="22" y1="44" x2="78" y2="44" stroke="#FFFFFF" strokeWidth="2" />
            {/* Tail string with ribbons */}
            <path d="M50,74 Q42,82 52,90 Q58,94 54,98" stroke="#64748B" strokeWidth="1.5" fill="none" />
            <polygon points="46,80 43,84 49,83" fill="#EC4899" />
            <polygon points="53,88 57,86 54,91" fill="#8B5CF6" />
          </svg>
        );

      case 'L': // Lion
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Golden Mane */}
            <circle cx="50" cy="50" r="32" fill="#D97706" />
            {/* Mane fluff petals */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
              <circle
                key={deg}
                cx={50 + 28 * Math.cos((deg * Math.PI) / 180)}
                cy={50 + 28 * Math.sin((deg * Math.PI) / 180)}
                r="7"
                fill="#B45309"
              />
            ))}
            {/* Face */}
            <circle cx="50" cy="50" r="22" fill="#FBBF24" />
            {/* Ears */}
            <circle cx="34" cy="32" r="5" fill="#F59E0B" />
            <circle cx="66" cy="32" r="5" fill="#F59E0B" />
            {/* Snout */}
            <ellipse cx="50" cy="58" rx="8" ry="6" fill="#FEF3C7" />
            <polygon points="47,54 53,54 50,58" fill="#78350F" />
            {/* Eyes */}
            <circle cx="42" cy="46" r="3" fill="#1F2937" />
            <circle cx="58" cy="46" r="3" fill="#1F2937" />
            <circle cx="43" cy="45" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="45" r="1" fill="#FFFFFF" />
            {/* Smile */}
            <path d="M47,60 Q50,63 53,60" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Whiskers */}
            <line x1="32" y1="56" x2="40" y2="57" stroke="#78350F" strokeWidth="1" />
            <line x1="60" y1="57" x2="68" y2="56" stroke="#78350F" strokeWidth="1" />
          </svg>
        );

      case 'M': // Mango
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Stem & Leaf */}
            <path d="M50,22 Q52,12 56,10" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M52,16 Q68,10 70,22 Q58,22 52,16 Z" fill="#22C55E" />
            {/* Mango Fruit */}
            <path
              d="M50,24 C32,24 24,40 24,58 C24,78 38,88 56,88 C74,88 82,72 82,54 C82,34 68,24 50,24 Z"
              fill="url(#mangoGrad)"
            />
            <defs>
              <linearGradient id="mangoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="40%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>
            {/* Highlights */}
            <ellipse cx="40" cy="42" rx="5" ry="12" fill="#FFFFFF" opacity="0.4" transform="rotate(-25 40 42)" />
            {/* Cute Face */}
            <circle cx="48" cy="54" r="2.5" fill="#374151" />
            <circle cx="62" cy="52" r="2.5" fill="#374151" />
            <path d="M53,59 Q57,63 60,59" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'N': // Nest
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Twig Nest Base */}
            <ellipse cx="50" cy="68" rx="36" ry="18" fill="#78350F" />
            <ellipse cx="50" cy="62" rx="32" ry="12" fill="#92400E" />
            {/* Eggs in Nest */}
            <ellipse cx="38" cy="52" rx="7" ry="10" fill="#7DD3FC" transform="rotate(-15 38 52)" />
            <ellipse cx="50" cy="48" rx="7.5" ry="11" fill="#BAE6FD" />
            <ellipse cx="62" cy="52" rx="7" ry="10" fill="#38BDF8" transform="rotate(15 62 52)" />
            {/* Egg Speckles */}
            <circle cx="37" cy="50" r="0.8" fill="#0284C7" />
            <circle cx="51" cy="47" r="0.8" fill="#0284C7" />
            <circle cx="63" cy="51" r="0.8" fill="#0369A1" />
            {/* Front Twigs */}
            <path d="M20,68 Q50,78 80,66" stroke="#451A03" strokeWidth="3" fill="none" />
            <path d="M26,74 Q50,84 74,72" stroke="#78350F" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'O': // Orange
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Stem & Leaf */}
            <path d="M50,18 L50,12" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            <path d="M50,14 Q64,8 68,18 Q58,20 50,14 Z" fill="#22C55E" />
            {/* Orange Body */}
            <circle cx="50" cy="54" r="32" fill="#F97316" />
            {/* Peel texture dots */}
            <circle cx="36" cy="44" r="1.5" fill="#FB923C" />
            <circle cx="44" cy="38" r="1.5" fill="#FB923C" />
            <circle cx="62" cy="42" r="1.5" fill="#FB923C" />
            {/* Cute Face */}
            <circle cx="42" cy="54" r="3" fill="#1F2937" />
            <circle cx="58" cy="54" r="3" fill="#1F2937" />
            <circle cx="43" cy="53" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="53" r="1" fill="#FFFFFF" />
            <ellipse cx="36" cy="60" rx="3" ry="1.5" fill="#FDBA74" />
            <ellipse cx="64" cy="60" rx="3" ry="1.5" fill="#FDBA74" />
            <path d="M47,60 Q50,64 53,60" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'P': // Parrot
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Tail */}
            <polygon points="65,65 88,88 78,88 60,70" fill="#3B82F6" />
            {/* Body */}
            <ellipse cx="50" cy="56" rx="18" ry="24" fill="#22C55E" />
            {/* Wing */}
            <path d="M46,46 Q64,54 58,74 Q46,70 46,46 Z" fill="#15803D" />
            {/* Head */}
            <circle cx="42" cy="36" r="14" fill="#22C55E" />
            {/* Big Curved Beak */}
            <path d="M34,32 Q20,38 24,46 Q32,44 34,42 Z" fill="#EF4444" />
            {/* Eye Patch & Eye */}
            <ellipse cx="40" cy="34" rx="5" ry="5" fill="#FFFFFF" />
            <circle cx="39" cy="34" r="2.5" fill="#0F172A" />
            <circle cx="40" cy="33" r="0.8" fill="#FFFFFF" />
            {/* Perch branch */}
            <rect x="20" y="76" width="60" height="6" rx="3" fill="#92400E" />
          </svg>
        );

      case 'Q': // Queen
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Hair */}
            <circle cx="50" cy="52" r="26" fill="#92400E" />
            {/* Dress */}
            <polygon points="50,68 24,94 76,94" fill="#8B5CF6" />
            {/* Face */}
            <circle cx="50" cy="52" r="18" fill="#FED7AA" />
            {/* Sparkling Golden Crown */}
            <polygon points="34,36 34,22 42,30 50,18 58,30 66,22 66,36" fill="#FACC15" stroke="#EAB308" strokeWidth="1.5" />
            <circle cx="34" cy="22" r="2" fill="#EF4444" />
            <circle cx="50" cy="18" r="2.5" fill="#3B82F6" />
            <circle cx="66" cy="22" r="2" fill="#10B981" />
            {/* Eyes */}
            <circle cx="44" cy="50" r="2.5" fill="#1F2937" />
            <circle cx="56" cy="50" r="2.5" fill="#1F2937" />
            {/* Rosy Cheeks & Smile */}
            <ellipse cx="40" cy="56" rx="2.5" ry="1.5" fill="#F472B6" />
            <ellipse cx="60" cy="56" rx="2.5" ry="1.5" fill="#F472B6" />
            <path d="M47,56 Q50,60 53,56" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'R': // Rabbit
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Long Ears */}
            <ellipse cx="40" cy="24" rx="6" ry="18" fill="#F1F5F9" transform="rotate(-8 40 24)" />
            <ellipse cx="40" cy="24" rx="3.5" ry="13" fill="#F472B6" transform="rotate(-8 40 24)" />
            <ellipse cx="60" cy="24" rx="6" ry="18" fill="#F1F5F9" transform="rotate(8 60 24)" />
            <ellipse cx="60" cy="24" rx="3.5" ry="13" fill="#F472B6" transform="rotate(8 60 24)" />
            {/* Head */}
            <circle cx="50" cy="54" r="22" fill="#F8FAFC" />
            {/* Cheeks */}
            <ellipse cx="42" cy="62" rx="4" ry="2.5" fill="#FBCFE8" />
            <ellipse cx="58" cy="62" rx="4" ry="2.5" fill="#FBCFE8" />
            {/* Nose & Mouth */}
            <polygon points="48,58 52,58 50,61" fill="#FB7185" />
            <path d="M47,63 Q50,66 53,63" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Eyes */}
            <circle cx="42" cy="50" r="3" fill="#1E293B" />
            <circle cx="58" cy="50" r="3" fill="#1E293B" />
            <circle cx="43" cy="49" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="49" r="1" fill="#FFFFFF" />
            {/* Whiskers */}
            <line x1="32" y1="58" x2="22" y2="56" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="32" y1="62" x2="22" y2="64" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="68" y1="58" x2="78" y2="56" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="68" y1="62" x2="78" y2="64" stroke="#94A3B8" strokeWidth="1.5" />
          </svg>
        );

      case 'S': // Sun
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Sun Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <polygon
                key={deg}
                points="50,10 45,24 55,24"
                fill="#F59E0B"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
            {/* Sun Face */}
            <circle cx="50" cy="50" r="26" fill="#FBBF24" />
            {/* Eyes */}
            <circle cx="42" cy="46" r="3.5" fill="#78350F" />
            <circle cx="58" cy="46" r="3.5" fill="#78350F" />
            <circle cx="43" cy="45" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="45" r="1" fill="#FFFFFF" />
            {/* Rosy Cheeks */}
            <ellipse cx="36" cy="54" rx="3.5" ry="2" fill="#F43F5E" opacity="0.6" />
            <ellipse cx="64" cy="54" rx="3.5" ry="2" fill="#F43F5E" opacity="0.6" />
            {/* Happy Smile */}
            <path d="M43,54 Q50,64 57,54" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'T': // Tiger
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Ears */}
            <circle cx="30" cy="30" r="9" fill="#EA580C" />
            <circle cx="30" cy="30" r="5" fill="#FED7AA" />
            <circle cx="70" cy="30" r="9" fill="#EA580C" />
            <circle cx="70" cy="30" r="5" fill="#FED7AA" />
            {/* Head */}
            <circle cx="50" cy="52" r="26" fill="#F97316" />
            {/* Tiger Stripes */}
            <polygon points="50,28 47,38 53,38" fill="#18181B" />
            <polygon points="38,34 37,42 43,40" fill="#18181B" />
            <polygon points="62,34 63,42 57,40" fill="#18181B" />
            <polygon points="26,50 34,52 30,55" fill="#18181B" />
            <polygon points="74,50 66,52 70,55" fill="#18181B" />
            {/* Muzzle */}
            <ellipse cx="50" cy="62" rx="12" ry="8" fill="#FFF7ED" />
            <polygon points="47,58 53,58 50,62" fill="#1F2937" />
            {/* Eyes */}
            <circle cx="40" cy="48" r="3.5" fill="#1F2937" />
            <circle cx="60" cy="48" r="3.5" fill="#1F2937" />
            <circle cx="41" cy="47" r="1" fill="#FFFFFF" />
            <circle cx="61" cy="47" r="1" fill="#FFFFFF" />
            {/* Smile */}
            <path d="M46,65 Q50,68 54,65" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'U': // Umbrella
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Canopy */}
            <path
              d="M18,52 Q50,16 82,52 Q72,48 64,52 Q56,48 50,52 Q44,48 36,52 Q28,48 18,52 Z"
              fill="#6366F1"
            />
            {/* Rainbow ribs */}
            <path d="M36,52 Q42,32 50,20 Q32,32 18,52" fill="#EC4899" opacity="0.6" />
            <path d="M64,52 Q58,32 50,20 Q68,32 82,52" fill="#3B82F6" opacity="0.6" />
            {/* Top ferrule tip */}
            <polygon points="48,20 50,12 52,20" fill="#FBBF24" />
            {/* Stick & J Handle */}
            <line x1="50" y1="20" x2="50" y2="76" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M50,76 Q50,86 42,86 Q36,86 36,80"
              stroke="#D97706"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Raindrops */}
            <circle cx="20" cy="68" r="2" fill="#38BDF8" />
            <circle cx="78" cy="64" r="2.5" fill="#38BDF8" />
            <circle cx="30" cy="80" r="1.5" fill="#38BDF8" />
          </svg>
        );

      case 'V': // Van
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Van Body */}
            <path
              d="M20,64 L20,44 Q20,38 28,38 L62,38 L78,50 L84,54 Q86,56 86,64 L86,68 L20,68 Z"
              fill="#0EA5E9"
            />
            {/* Windows */}
            <path d="M62,42 L74,50 L62,50 Z" fill="#E0F2FE" />
            <rect x="42" y="42" width="16" height="8" rx="2" fill="#E0F2FE" />
            <rect x="24" y="42" width="14" height="8" rx="2" fill="#E0F2FE" />
            {/* Headlight & Bumper */}
            <circle cx="84" cy="62" r="3" fill="#FACC15" />
            <rect x="18" y="66" width="70" height="4" rx="2" fill="#475569" />
            {/* Wheels */}
            <circle cx="34" cy="70" r="8" fill="#1E293B" />
            <circle cx="34" cy="70" r="4" fill="#E2E8F0" />
            <circle cx="72" cy="70" r="8" fill="#1E293B" />
            <circle cx="72" cy="70" r="4" fill="#E2E8F0" />
            {/* Party balloon on roof */}
            <circle cx="48" cy="28" r="6" fill="#F43F5E" />
            <line x1="48" y1="34" x2="48" y2="38" stroke="#64748B" strokeWidth="1" />
          </svg>
        );

      case 'W': // Watch
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Wrist Straps */}
            <rect x="42" y="10" width="16" height="24" rx="3" fill="#8B5CF6" />
            <rect x="42" y="66" width="16" height="24" rx="3" fill="#8B5CF6" />
            {/* Watch Bezel */}
            <circle cx="50" cy="50" r="24" fill="#C084FC" />
            {/* Watch Face */}
            <circle cx="50" cy="50" r="19" fill="#FFFFFF" />
            {/* Hour ticks */}
            <circle cx="50" cy="35" r="1.5" fill="#6B21A8" />
            <circle cx="65" cy="50" r="1.5" fill="#6B21A8" />
            <circle cx="50" cy="65" r="1.5" fill="#6B21A8" />
            <circle cx="35" cy="50" r="1.5" fill="#6B21A8" />
            {/* Hands pointing to 3:00 (for 3rd Birthday!) */}
            <line x1="50" y1="50" x2="50" y2="38" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="50" y1="50" x2="62" y2="50" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="50" r="2.5" fill="#FBBF24" />
          </svg>
        );

      case 'X': // Xylophone
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Frame Base */}
            <polygon points="18,32 82,42 82,62 18,68" fill="#78350F" />
            {/* Rainbow Bars */}
            <rect x="22" y="24" width="7" height="48" rx="2" fill="#EF4444" />
            <rect x="31" y="27" width="7" height="44" rx="2" fill="#F97316" />
            <rect x="40" y="30" width="7" height="40" rx="2" fill="#FBBF24" />
            <rect x="49" y="33" width="7" height="36" rx="2" fill="#22C55E" />
            <rect x="58" y="36" width="7" height="32" rx="2" fill="#0EA5E9" />
            <rect x="67" y="39" width="7" height="28" rx="2" fill="#6366F1" />
            <rect x="76" y="42" width="7" height="24" rx="2" fill="#EC4899" />
            {/* Mallet */}
            <line x1="36" y1="76" x2="60" y2="60" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="62" cy="58" r="4.5" fill="#DC2626" />
          </svg>
        );

      case 'Y': // Yak
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Curved Horns */}
            <path
              d="M32,38 Q18,24 20,16 Q28,24 36,34"
              fill="#D6D3D1"
              stroke="#78716C"
              strokeWidth="1"
            />
            <path
              d="M68,38 Q82,24 80,16 Q72,24 64,34"
              fill="#D6D3D1"
              stroke="#78716C"
              strokeWidth="1"
            />
            {/* Fluffy Body */}
            <ellipse cx="50" cy="58" rx="26" ry="20" fill="#57534E" />
            {/* Shaggy hair bottom fringe */}
            <path
              d="M26,66 Q32,78 38,66 Q44,78 50,66 Q56,78 62,66 Q68,78 74,66"
              stroke="#44403C"
              strokeWidth="4"
              fill="none"
            />
            {/* Head */}
            <ellipse cx="50" cy="46" rx="16" ry="14" fill="#78716C" />
            {/* Snout */}
            <ellipse cx="50" cy="52" rx="8" ry="6" fill="#A8A29E" />
            <circle cx="47" cy="52" r="1.5" fill="#292524" />
            <circle cx="53" cy="52" r="1.5" fill="#292524" />
            {/* Eyes */}
            <circle cx="43" cy="42" r="2.5" fill="#1C1917" />
            <circle cx="57" cy="42" r="2.5" fill="#1C1917" />
            <circle cx="44" cy="41" r="0.8" fill="#FFFFFF" />
            <circle cx="58" cy="41" r="0.8" fill="#FFFFFF" />
          </svg>
        );

      case 'Z': // Zebra
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Ears */}
            <polygon points="34,26 30,12 40,22" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1.5" />
            <polygon points="66,26 70,12 60,22" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1.5" />
            {/* Mane */}
            <path d="M46,20 L54,20 L52,40 L48,40 Z" fill="#0F172A" />
            {/* Head */}
            <ellipse cx="50" cy="50" rx="20" ry="24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* Black Zebra Stripes */}
            <polygon points="34,44 44,46 34,48" fill="#0F172A" />
            <polygon points="66,44 56,46 66,48" fill="#0F172A" />
            <polygon points="32,54 42,56 32,58" fill="#0F172A" />
            <polygon points="68,54 58,56 68,58" fill="#0F172A" />
            <polygon points="50,26 47,34 53,34" fill="#0F172A" />
            {/* Muzzle */}
            <ellipse cx="50" cy="66" rx="11" ry="8" fill="#334155" />
            <circle cx="46" cy="65" r="1.5" fill="#0F172A" />
            <circle cx="54" cy="65" r="1.5" fill="#0F172A" />
            {/* Eyes */}
            <circle cx="42" cy="46" r="3" fill="#0F172A" />
            <circle cx="58" cy="46" r="3" fill="#0F172A" />
            <circle cx="43" cy="45" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="45" r="1" fill="#FFFFFF" />
            {/* Party Hat */}
            <polygon points="50,6 42,24 58,24" fill="#F43F5E" />
            <circle cx="50" cy="5" r="2.5" fill="#FBBF24" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClasses} ${className} ${
        animate ? 'transition-transform duration-300 hover:scale-105 active:scale-95' : ''
      }`}
    >
      {renderSvg()}
    </div>
  );
};
