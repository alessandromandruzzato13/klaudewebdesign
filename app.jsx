// MIRAMAR — App composition

function App() {
  const [lightbox, setLightbox] = useState(null);
  const t = useTweaks({
    palette:    "ivory",       // ivory | shore | midnight
    accent:     "gold",        // gold | sea | ink
    display:    "italiana",    // italiana | bodoni | marcellus
  });

  // Apply palette as CSS vars on body
  useEffect(() => {
    const palettes = {
      ivory: {
        '--paper':   '#F4EEE2',
        '--paper-2': '#ECE3D2',
        '--paper-3': '#E2D6BE',
        '--bone':    '#FAF6EC',
        '--ink':     '#0E1B30',
        '--ink-2':   '#1C2A45',
        '--ink-soft':'#4B5870',
        '--rule':    '#C6B79A',
        '--shell':   '#E8D9BE',
      },
      shore: {
        '--paper':   '#EAE2D2',
        '--paper-2': '#DDD0B7',
        '--paper-3': '#CDBD9F',
        '--bone':    '#F4ECDA',
        '--ink':     '#1B2D2B',
        '--ink-2':   '#293F3D',
        '--ink-soft':'#56685F',
        '--rule':    '#B19F7C',
        '--shell':   '#E0D2B5',
      },
      midnight: {
        '--paper':   '#0E1B30',
        '--paper-2': '#152441',
        '--paper-3': '#1F3055',
        '--bone':    '#F4EEE2',
        '--ink':     '#F4EEE2',
        '--ink-2':   '#E0D2B5',
        '--ink-soft':'#9CA8BD',
        '--rule':    '#3B4A6A',
        '--shell':   '#E8D9BE',
      },
    };
    const accents = {
      gold: { '--gold': '#A88656', '--gold-2': '#8E6E3F' },
      sea:  { '--gold': '#3C7DA8', '--gold-2': '#2F628B' },
      ink:  { '--gold': '#0E1B30', '--gold-2': '#000' },
    };
    const fonts = {
      italiana:  '"Italiana", "Bodoni Moda", serif',
      bodoni:    '"Bodoni Moda", "Italiana", serif',
      marcellus: '"Marcellus", "Italiana", serif',
    };
    const all = { ...palettes[t.palette], ...accents[t.accent], '--display': fonts[t.display] };
    Object.entries(all).forEach(([k,v]) => document.documentElement.style.setProperty(k, v));
  }, [t.palette, t.accent, t.display]);

  const onBook = () => {
    const el = document.getElementById('book');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header onBook={onBook} />
      <main>
        <Hero />
        <Manifesto />
        <Intro />
        <Address />
        <Suites />
        <PullQuote />
        <Equivoque />
        <Services />
        <Vista />
        <Monaco />
        <Press />
        <Gallery onOpen={setLightbox} />
        <Booking />
      </main>
      <Footer />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />

      {/* Mobile sticky reserve bar — only visible on small screens via CSS */}
      <div className="mobile-bar">
        <div className="mb-label">
          Hôtel Miramar
          <small>14 chambres · Port Hercule</small>
        </div>
        <button className="mb-cta" onClick={onBook}>
          Réserver <span style={{display:'inline-block', width:14, height:1, background:'currentColor'}}></span>
        </button>
      </div>

      <TweaksPanel title="Tweaks" subtitle="Miramar · Monte-Carlo">
        <TweakSection title="Palette">
          <TweakRadio
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'ivory',    label: 'Ivory' },
              { value: 'shore',    label: 'Shore' },
              { value: 'midnight', label: 'Night' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakColor
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={[
              { value: 'gold', color: '#A88656' },
              { value: 'sea',  color: '#3C7DA8' },
              { value: 'ink',  color: '#0E1B30' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Display type">
          <TweakRadio
            value={t.display}
            onChange={(v) => setTweak('display', v)}
            options={[
              { value: 'italiana',  label: 'Italiana' },
              { value: 'bodoni',    label: 'Bodoni' },
              { value: 'marcellus', label: 'Marcellus' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
