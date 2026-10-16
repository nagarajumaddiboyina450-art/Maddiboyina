# Jiyansh's ABC Birthday Adventure 🎂🎈

A colorful, interactive, touch-friendly educational game specially created for **Jiyansh's 3rd Birthday (October 22, 2026)**.

---

## 🌟 Game Highlights

- **Target Audience**: 3-year-old preschoolers, toddlers, and kindergarteners.
- **Alphabets A to Z**:
  - `A`: Apple (ఆపిల్)
  - `B`: Banana (అరటిపండు)
  - `C`: Camel (ఒంటె)
  - `D`: Dog (కుక్క)
  - `E`: Elephant (ఏనుగు)
  - `F`: Fish (చేప)
  - `G`: Grapes (ద్రాక్ష)
  - `H`: Hen (కోడి)
  - `I`: Ice Cream (ఐస్ క్రీమ్)
  - `J`: Jug (జగ్గు)
  - `K`: Kite (గాలిపటం)
  - `L`: Lion (సింహం)
  - `M`: Mango (మామిడి)
  - `N`: Nest (పక్షి గూడు)
  - `O`: Orange (నారింజ)
  - `P`: Parrot (చిలుక)
  - `Q`: Queen (రాణి)
  - `R`: Rabbit (కుందేలు)
  - `S`: Sun (సూర్యుడు)
  - `T`: Tiger (పులి)
  - `U`: Umbrella (గొడుగు)
  - `V`: Van (వ్యాన్)
  - `W`: Watch (చేతి గడియారం)
  - `X`: Xylophone (జైలోఫోన్)
  - `Y`: Yak (యాక్)
  - `Z`: Zebra (జీబ్రా)
- **Gameplay**:
  - Exactly **5 picture choices per round** (1 correct target + 4 distractors), shuffled each round.
  - Interactive Web Audio sound effects: cheerful ding arpeggio, celebratory fanfare, balloon pops, and gentle "try again" wobble tones.
  - Web Speech synthesis voice prompts in English and optional Telugu pronunciation hints.
  - Interactive 3-candle birthday cake (tap candles to blow out, tap number 3 to play Happy Birthday song).
  - Floating poppable balloons on start and celebration screens.
  - Final fireworks celebration screen with 260 Birthday Star Certificate, Play Again, and Restart options.

---

## 🚀 Quick Start Guide (Run Locally)

### Prerequisites
- Node.js (version 18 or newer)
- npm or pnpm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:3000`

### 3. Build for production
```bash
npm run build
```
The optimized static files will be generated in the `dist/` directory, ready to deploy to GitHub Pages, Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or any web server.

### 4. Preview the production build
```bash
npm run preview
```

---

## 📱 How to Play on Android & Mobile Devices

1. **In Mobile Browser**:
   Open the game URL in Chrome or your preferred mobile browser. The game is fully responsive and optimized for touch controls.
2. **Add to Home Screen (Full Screen App experience)**:
   - In Google Chrome on Android, tap the three dots **(⋮)** in the top right.
   - Tap **"Install app"** or **"Add to Home screen"**.
   - Jiyansh's ABC game icon will appear on your child's phone/tablet home screen just like a native app!

---

## 📂 Project Structure

```
├── index.html                   # HTML entry point with preschool fonts & meta tags
├── metadata.json                # Project description and metadata
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── README.md                    # Project documentation & instructions
└── src/
    ├── main.tsx                 # React DOM mount
    ├── App.tsx                  # State manager: Start, Playing, Completed screens
    ├── index.css                # Tailwind CSS & playful preschool animations
    ├── data/
    │   └── alphabetData.ts      # All 26 letters, English words, Telugu hints & colors
    ├── components/
    │   ├── StartScreen.tsx      # Birthday greeting, cake, poppable balloons & play CTA
    │   ├── GameRound.tsx        # 5-choice gameplay, audio hints & score tracking
    │   ├── CompletionScreen.tsx # Fireworks, certificate & restart buttons
    │   ├── BirthdayCake.tsx     # Tap-to-blow 3 candles & tune player
    │   ├── BirthdayBalloons.tsx # Interactive floating and popping balloons
    │   ├── Illustration.tsx     # Custom colorful vector artwork for letters A to Z
    │   ├── AlphabetSelectorModal.tsx # Quick jump picker for any letter A-Z
    │   └── ExportProjectModal.tsx    # In-app ZIP exporter & download dialog
    └── utils/
        ├── soundEffects.ts      # Web Audio API synthesizer & Web Speech synthesis
        └── projectZipGenerator.ts # In-browser ZIP bundle builder
```

---

## 🎂 Special Birthday Dedication
> *"Happy 3rd Birthday Jiyansh! Wishing you endless smiles, curiosity, and joy on your learning adventure! — October 22, 2026"*
