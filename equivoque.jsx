// ÉQUIVOQUE — Standalone landing
// Nocturnal, perfumery-inspired. Rooftop of Hotel Miramar Monte-Carlo.

const { useState, useEffect } = React;

// REAL images from official equivoquemc.com Wix CDN
const EQ_IMG = {
  hero:    "https://static.wixstatic.com/media/be30c7_99ae71b89853499dafd3dcb342c6ffa8f000.jpg",
  view:    "https://static.wixstatic.com/media/be30c7_2ce9c69fca4f4083b108eb52a02db80f~mv2.jpg",
  rooftop: "https://static.wixstatic.com/media/be30c7_2ce9c69fca4f4083b108eb52a02db80f~mv2.jpg",
  ev_f1:   "https://static.wixstatic.com/media/be30c7_db2e26592d6d44d1bf67e787451e4e7d~mv2.jpg",
  ev_yacht:"https://static.wixstatic.com/media/be30c7_bf136d1a3bea42fe81894acd5195d16d~mv2.jpg",
  ev_priv: "https://static.wixstatic.com/media/be30c7_bb51d8d166bc43a18e93b35aed2a1878~mv2.jpg",
  story:   "https://static.wixstatic.com/media/be30c7_d86aa6e18b2e462d8912a9aa5af1fb71~mv2.jpg",
};

/* ---------- Perfume bottle SVG ---------- */
function PerfumeBottle({ color = "#C9A368", num = "I" }) {
  return (
    <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={"g" + num} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={"hl" + num} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0E6D2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F0E6D2" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Cap */}
      <rect x="42" y="6" width="16" height="14" fill="#C9A368" opacity="0.9" />
      <rect x="40" y="18" width="20" height="6" fill="#C9A368" />
      {/* Neck */}
      <rect x="45" y="22" width="10" height="14" fill="#C9A368" opacity="0.4" stroke="#C9A368" strokeWidth="0.5" />
      {/* Body */}
      <path
        d="M 28 38 L 28 120 Q 28 132 40 132 L 60 132 Q 72 132 72 120 L 72 38 Q 72 32 60 32 L 40 32 Q 28 32 28 38 Z"
        fill={"url(#g" + num + ")"}
        stroke="#C9A368"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      {/* Highlight */}
      <path
        d="M 34 44 L 34 110 Q 34 116 38 116 L 42 116 L 42 44 Z"
        fill={"url(#hl" + num + ")"}
        opacity="0.6"
      />
      {/* Label */}
      <rect x="36" y="68" width="28" height="32" fill="#0A0A0E" stroke="#C9A368" strokeWidth="0.4" opacity="0.85" />
      <text x="50" y="83" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="9" fill="#C9A368">{num}</text>
      <line x1="42" y1="86" x2="58" y2="86" stroke="#C9A368" strokeWidth="0.4" />
      <text x="50" y="95" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="3" letterSpacing="0.4" fill="#F0E6D2">EQUIVOQUE</text>
    </svg>
  );
}

/* ---------- Header ---------- */
function EqHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"eq-hdr " + (scrolled ? "scrolled" : "")}>
      <div className="eq-hdr-left">
        <a className="eq-back" href="index.html">Miramar</a>
      </div>
      <a href="#top" className="eq-brand">
        Équivoque<span className="dot">.</span>
        <small>Monte · Carlo</small>
      </a>
      <div className="eq-hdr-right">
        <nav className="eq-nav">
          <a href="#menu">Menu</a>
          <a href="#story">Histoire</a>
          <a href="#events">Événements</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#reserve" className="eq-btn">Réserver <span className="arr"></span></a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function EqHero() {
  return (
    <section className="eq-hero" id="top">
      <div className="eq-hero-media">
        <img src={EQ_IMG.hero} alt="Équivoque — vue rooftop nuit" />
      </div>
      <div className="eq-hero-smoke" aria-hidden="true"></div>
      <div className="eq-hero-inner">
        <div className="eq-hero-meta">
          <span>Exclusive Rooftop Terrace</span>
          <span>
            <span style={{color:'var(--gilt)'}}>★</span> Best Rooftop · The Rooftop Guide®
          </span>
          <span style={{textAlign:'right'}}>MMXXVI · Saison V</span>
        </div>
        <div className="eq-hero-title-wrap">
          <div className="eq-eyebrow">— Le Toit du Miramar —</div>
          <h1 className="eq-hero-title">
            Équivoque<span className="dot">.</span>
          </h1>
          <div className="eq-hero-rule">
            <span className="line"></span>
            On sent ce que l'on boit
            <span className="line"></span>
          </div>
          <p className="eq-hero-tag">
            Le premier <em style={{color:'var(--gilt)', fontStyle:'italic'}}>Perfume Cocktail Menu</em> au monde —
            quatre fragrances de Grasse, quatre cocktails.
          </p>
        </div>
        <div className="eq-hero-bottom">
          <div className="col">
            Adresse
            <span>7, av. d'Ostende</span>
          </div>
          <div className="col center">
            Heures
            <span>18h00 — 02h00</span>
          </div>
          <div className="col right">
            Saison
            <span>Avril — Octobre</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Story ---------- */
function EqStory() {
  return (
    <section className="eq-section" id="story">
      <div className="eq-story">
        <div className="eq-story-img">
          <img src={EQ_IMG.story} alt="Équivoque rooftop ambiance" />
          <span className="eq-story-cap">Cinquième étage · Port Hercule</span>
        </div>
        <div>
          <div className="eq-eyebrow">— L'Histoire</div>
          <h2 className="eq-h2" style={{margin:'24px 0 32px'}}>
            Cinq saisons<br/>
            au-dessus du Port<span className="dot">.</span>
          </h2>
          <p>
            Ouvert en 2022, Équivoque entre en 2026 dans sa <em>cinquième saison</em>.
            Sous la direction de <em>Nicola Buratto</em>, le rooftop du Miramar
            est devenu l'adresse la plus inattendue de la principauté — un lieu où la
            multisensorialité, l'art du cocktail et la gastronomie se rejoignent.
          </p>
          <p>
            On vous tend d'abord une mouillette parfumée. Vous fermez les yeux,
            vous respirez. Puis, dans votre verre, le même accord — transposé en
            spiritueux, en distillats, en arômes. La gorgée vient confirmer le nez.
            <em> L'illusion est totale.</em>
          </p>
          <div style={{marginTop:'40px', display:'flex', gap:'24px', alignItems:'center', flexWrap:'wrap'}}>
            <a className="eq-btn" href="#menu">Le menu <span className="arr"></span></a>
            <span style={{fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--cream-3)'}}>
              Réservation conseillée.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Perfume Menu ---------- */
const FRAGRANCES = [
  {
    num: 'I',
    name: 'Iris Noir',
    notes: 'Iris · Cuir · Encens',
    color: '#7E5680',
    cock: 'Negroni Fumé',
    cockDesc: 'Campari maison, vermouth rouge, gin infusé à l\'iris, fumée de bois de hêtre.',
    price: '€28',
  },
  {
    num: 'II',
    name: 'Néroli',
    notes: 'Fleur d\'oranger · Bergamote · Petit grain',
    color: '#D9A85C',
    cock: 'Mediterraneo',
    cockDesc: 'Vodka aux agrumes, sirop de fleur d\'oranger, prosecco, brume de bergamote.',
    price: '€26',
  },
  {
    num: 'III',
    name: 'Vétiver',
    notes: 'Vétiver · Mousse · Cèdre',
    color: '#6B8A5E',
    cock: 'Old Fashioned Vert',
    cockDesc: 'Bourbon vieilli, sirop de vétiver, bitter aux herbes, zeste de citron vert.',
    price: '€30',
  },
  {
    num: 'IV',
    name: 'Tubéreuse',
    notes: 'Tubéreuse · Jasmin · Lactones',
    color: '#E8C4D2',
    cock: 'Spritz Blanc',
    cockDesc: 'Champagne brut, liqueur de tubéreuse, sureau, jasmin frais.',
    price: '€32',
  },
];

function EqMenu() {
  return (
    <section className="eq-menu-wrap eq-section" id="menu">
      <div className="eq-section-head">
        <div className="eq-eyebrow">— Le Perfume Cocktail Menu</div>
        <h2 className="eq-h2">
          Quatre fragrances,<br/>quatre cocktails<span className="dot">.</span>
        </h2>
        <p className="eq-sub">
          Composées à Grasse par Maison&nbsp;Fata. Sentez le nez, puis goûtez —
          la même histoire, racontée deux fois.
        </p>
      </div>
      <div className="eq-menu">
        {FRAGRANCES.map(f => (
          <div className="eq-fragrance" key={f.num}>
            <div className="eq-bottle">
              <div className="eq-bottle-glow" style={{'--frag-color': f.color + '4d'}}></div>
              <PerfumeBottle num={f.num} color={f.color} />
            </div>
            <div className="eq-frag-info">
              <div className="eq-frag-num">— No. {f.num}</div>
              <h3 className="eq-frag-name">{f.name}</h3>
              <div className="eq-frag-notes">{f.notes}</div>
              <div className="eq-divider"></div>
              <div className="eq-cock-eyebrow">Le Cocktail</div>
              <div className="eq-cock-name">{f.cock}</div>
              <p className="eq-cock-body">{f.cockDesc}</p>
              <div className="eq-cock-price">{f.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Events ---------- */
const EVENTS = [
  {
    cat: 'Grand Prix',
    name: 'Monaco F1',
    date: 'Mai 2026',
    img: EQ_IMG.ev_f1,
    desc: 'La meilleure vue sur le circuit. Brunch, déjeuner, dîner et after-party — quatre jours d\'exception au-dessus de la course.'
  },
  {
    cat: 'Tennis',
    name: 'ATP Master 1000',
    date: 'Avril 2026',
    img: EQ_IMG.ev_priv,
    desc: 'La saison du tennis monégasque, accompagnée de soirées privées et de cocktails inspirés des courts du Country Club.'
  },
  {
    cat: 'Yacht Show',
    name: 'Monaco Yacht Show',
    date: 'Septembre 2026',
    img: EQ_IMG.ev_yacht,
    desc: 'Au-dessus du Port Hercule, le rendez-vous des armateurs et de la haute plaisance. Six soirées, six ambiances.'
  },
];

function EqEvents() {
  return (
    <section className="eq-events-wrap eq-section" id="events">
      <div className="eq-section-head">
        <div className="eq-eyebrow">— Les Événements</div>
        <h2 className="eq-h2">
          Saison<span className="dot"> ·</span> 2026
        </h2>
        <p className="eq-sub">
          Trois temps forts pour la principauté — et toutes vos soirées qui méritent une terrasse.
        </p>
      </div>
      <div className="eq-events">
        {EVENTS.map(e => (
          <div className="eq-event" key={e.name}>
            <div className="eq-event-img"><img src={e.img} alt={e.name} /></div>
            <div className="eq-event-overlay">
              <div className="eq-event-top">{e.cat}</div>
              <div>
                <h3 className="eq-event-name">{e.name}</h3>
                <div className="eq-event-date">{e.date}</div>
                <p className="eq-event-desc">{e.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Private events bar ---------- */
function EqPrivate() {
  return (
    <section className="eq-section" style={{position:'relative'}}>
      <div className="eq-floating-mark" style={{top: '40px', right: '-40px'}}>É.</div>
      <div className="eq-private">
        <div>
          <div className="eq-eyebrow">— Privatisation</div>
          <h3 style={{marginTop:'24px'}}>
            Votre soirée,<br/>
            <em style={{fontStyle:'italic', color:'var(--gilt)'}}>notre adresse</em><span className="dot">.</span>
          </h3>
          <p>
            Cent-vingt convives debout, soixante assis. Une équipe de chefs, mixologues,
            et concierges à votre disposition. De la mise en lumière au coucher de soleil,
            chaque détail est orchestré pour faire de votre événement le plus marquant
            de la principauté.
          </p>
          <a className="eq-btn eq-btn-solid" href="mailto:info@equivoquemc.com?subject=Demande%20de%20privatisation">
            Demande de devis <span className="arr"></span>
          </a>
        </div>
        <div className="eq-private-list">
          <span>Mariages</span>
          <span>Anniversaires</span>
          <span>Lancements</span>
          <span>Cocktails d'entreprise</span>
          <span>Dîners de gala</span>
          <span>Conférences de presse</span>
          <span>Tournages</span>
          <span>Brunchs privés</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Press ---------- */
function EqPress() {
  const press = [
    'Marie Claire',
    'Forbes',
    'Vogue',
    'Monocle',
    'Condé Nast',
    'Robb Report',
    'Tatler',
    'GQ',
  ];
  return (
    <section className="eq-section" style={{borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', paddingBlock: 'clamp(48px, 6vw, 80px)'}}>
      <div className="eq-section-head" style={{marginBottom: '40px'}}>
        <div className="eq-eyebrow">— Presse</div>
      </div>
      <div className="eq-press">
        {press.map(p => <div key={p} className="p">{p}</div>)}
      </div>
    </section>
  );
}

/* ---------- Reservation ---------- */
function EqReserve() {
  return (
    <section className="eq-section eq-reserve" id="reserve">
      <div className="eq-reserve-inner">
        <div className="eq-eyebrow">— Réserver une table</div>
        <h2>
          Ce soir,<br/>
          chez Équivoque<span className="dot">.</span>
        </h2>
        <p className="eq-sub" style={{margin:'0 auto'}}>
          Toute l'année à Monte-Carlo. Réservation conseillée pour les soirées d'été
          et les week-ends de Grand Prix.
        </p>
        <div className="eq-reserve-form">
          <div className="eq-bf">
            <span className="eq-bf-label">Date</span>
            <span className="eq-bf-value">Sam. 30 mai</span>
          </div>
          <div className="eq-bf">
            <span className="eq-bf-label">Heure</span>
            <span className="eq-bf-value">20h00</span>
          </div>
          <div className="eq-bf">
            <span className="eq-bf-label">Convives</span>
            <span className="eq-bf-value">2 personnes</span>
          </div>
          <button className="eq-bf-submit">Réserver</button>
        </div>
        <div className="eq-reserve-meta">
          <span>WhatsApp +33 6 07 93 47 45</span>
          <span>info@equivoquemc.com</span>
          <span>Dress code · Smart elegant</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function EqFooter() {
  return (
    <footer className="eq-ftr" id="contact">
      <div className="eq-ftr-grid">
        <div className="eq-ftr-brand">
          <div className="b">Équivoque<span className="dot">.</span></div>
          <div className="s">Exclusive Rooftop · Monte&nbsp;Carlo</div>
          <div className="miramar">
            Une adresse de la Maison <a href="index.html">Hôtel Miramar Monte-Carlo</a>.<br/>
            Au cinquième étage, face au Port Hercule.
          </div>
        </div>
        <div className="eq-ftr-col">
          <h4>L'Adresse</h4>
          <ul>
            <li>7, avenue d'Ostende<br/>98000 Monte-Carlo · Monaco</li>
            <li><a href="tel:+33607934745">+33 6 07 93 47 45</a></li>
            <li><a href="mailto:info@equivoquemc.com">info@equivoquemc.com</a></li>
          </ul>
        </div>
        <div className="eq-ftr-col">
          <h4>Découvrir</h4>
          <ul>
            <li><a href="#menu">Perfume Menu</a></li>
            <li><a href="#story">Notre histoire</a></li>
            <li><a href="#events">Événements</a></li>
            <li><a href="#reserve">Réservation</a></li>
            <li><a href="#">Galerie</a></li>
          </ul>
        </div>
        <div className="eq-ftr-col">
          <h4>Suivre</h4>
          <ul>
            <li><a href="https://www.instagram.com/equivoque_montecarlo/" target="_blank" rel="noreferrer">@equivoque_montecarlo</a></li>
            <li><a href="index.html">@hotelmiramarmc</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="eq-ftr-bot">
        <div>© MMXXVI — Équivoque · Hôtel Miramar Monte-Carlo</div>
        <div>Mentions légales · Cookies</div>
        <div>Drink responsibly</div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function EquivoqueApp() {
  const goReserve = () => {
    const el = document.getElementById('reserve');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      <div className="grain-global" aria-hidden="true"></div>
      <EqHeader />
      <main>
        <EqHero />
        <EqStory />
        <EqMenu />
        <EqEvents />
        <EqPrivate />
        <EqPress />
        <EqReserve />
      </main>
      <EqFooter />

      {/* Mobile sticky reserve bar — only visible on small screens via CSS */}
      <div className="eq-mobile-bar">
        <div className="mb-label">
          Équivoque<span style={{color:'#C9A368'}}>.</span>
          <small>Rooftop · 7 av. d'Ostende</small>
        </div>
        <button className="mb-cta" onClick={goReserve}>
          Réserver <span style={{display:'inline-block', width:14, height:1, background:'currentColor'}}></span>
        </button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EquivoqueApp />);
