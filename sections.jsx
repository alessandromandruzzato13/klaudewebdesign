// MIRAMAR — Sections
// Editorial parisian luxury for Hotel Miramar Monte-Carlo

const { useState, useEffect, useRef } = React;

/* ---------- Real imagery from Miramar Monaco ---------- */
const IMG = {
  hero:    "https://www.hotelmiramar.mc/_novaimg/4803976-1462024_1000_0_3000_3000_700_700.jpg",
  banner:  "https://www.hotelmiramar.mc/_img/banner.jpg",
  room1:   "https://www.hotelmiramar.mc/_novaimg/4803977-1462276_0_0_2200_1600_1925_1400.jpg",
  bfast:   "https://www.hotelmiramar.mc/_novaimg/4804618-1462277_0_0_2200_1600_1925_1400.jpg",
  view:    "https://www.hotelmiramar.mc/_novaimg/4804619-1462278_0_0_2200_1600_1925_1400.jpg",
  // Room types
  double:  "https://www.hotelmiramar.mc/_novaimg/4804510-1462193_0_0_2544_3405_672_900.jpg",
  balcony: "https://www.hotelmiramar.mc/_novaimg/4804550-1462232_0_0_2555_3576_643_900.jpg",
  studio:  "https://www.hotelmiramar.mc/_novaimg/4804585-1576522_0_0_2274_2979_687_900.jpg",
  // Gallery extras
  g_a: "https://www.hotelmiramar.mc/_novaimg/4804296-1462182_0_0_2752_3856_642_900.jpg",
  g_b: "https://www.hotelmiramar.mc/_novaimg/4804534-1462216_0_0_2628_3812_620_900.jpg",
  g_c: "https://www.hotelmiramar.mc/_novaimg/4804551-1462233_0_0_3844_2832_1200_884.jpg",
  g_d: "https://www.hotelmiramar.mc/_novaimg/4804553-1462235_0_0_2832_4256_598_900.jpg",
  g_e: "https://www.hotelmiramar.mc/_novaimg/5514829-1576523_0_0_3192_2548_1127_900.jpg",
  g_f: "https://www.hotelmiramar.mc/_novaimg/5514831-1576525_0_0_3708_2832_1178_900.jpg",
  g_g: "https://www.hotelmiramar.mc/_novaimg/4804512-1462195_0_0_2628_3740_632_900.jpg",
  // Logo
  logoSvg: "https://www.hotelmiramar.mc/_img/logo-desktop.svg",
};

/* Wordmark — typographic recreation of brand */
function Wordmark({ size = 1, color }) {
  return (
    <div style={{
      lineHeight: 1,
      textAlign: 'center',
      color: color || 'inherit'
    }}>
      <div style={{
        fontFamily: 'var(--display-3)',
        fontSize: 17 * size,
        letterSpacing: '0.42em',
        textTransform: 'uppercase',
        paddingLeft: '0.42em'
      }}>MIRAMAR</div>
      <div style={{
        fontFamily: 'var(--sans)',
        fontWeight: 400,
        fontSize: 8.5 * size,
        letterSpacing: '0.5em',
        marginTop: 7 * size,
        opacity: 0.78,
        textTransform: 'uppercase',
        color: 'inherit',
        lineHeight: 1,
        paddingLeft: '0.5em'
      }}>Monte&nbsp;·&nbsp;Carlo</div>
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"hdr" + (scrolled ? " scrolled" : "")}>
      <div className="hdr-left">
        <nav className="hdr-nav">
          <a href="#suites">Chambres</a>
          <a href="#rooftop">Rooftop</a>
          <a href="#services">Services</a>
          <a href="#monaco">Monaco</a>
        </nav>
      </div>
      <a href="#top" className="brand">
        <Wordmark />
      </a>
      <div className="hdr-right">
        <nav className="hdr-nav">
          <a href="#stories">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="lang"><span className="on">FR</span><span>·</span><span>EN</span><span>·</span><span>IT</span></span>
        <button className="btn" onClick={onBook}>Réserver <span className="arr"></span></button>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src={IMG.hero} alt="Port Hercule — Monte-Carlo" />
      </div>
      <div className="hero-grain" aria-hidden="true"></div>
      <div className="hero-inner">
        <div className="hero-meta-top">
          <div className="col"><span>Établissement</span>Depuis 1956</div>
          <div className="col" style={{textAlign:'center'}}><span>Adresse</span>Port Hercule · Monaco</div>
          <div className="col" style={{textAlign:'right'}}><span>Saison</span>Été · MMXXVI</div>
        </div>
        <div className="hero-title-block">
          <h1 className="hero-title">
            <span className="script">Au bord</span><br/>
            <span className="thin">de l'eau</span><span className="dash"></span><br/>
            Miramar
          </h1>
          <div className="hero-bottom">
            <div className="hero-tag">
              Une maison contemporaine en bord de mer,<br/>
              face au Port Hercule et au palais princier.
            </div>
            <div></div>
            <div className="hero-loc">
              43°44′13″N<br/>
              7°25′23″E
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        Découvrir
        <span className="line"></span>
      </div>
    </section>
  );
}

/* ---------- Manifesto strip (replaces marquee) ---------- */
function Manifesto() {
  return (
    <div className="manifesto">
      <div className="manifesto-inner">
        <span className="w1">Petite maison,</span>
        <span className="sep"></span>
        <span className="w2">grande vue</span>
        <span className="sep"></span>
        <span className="w3">depuis 1956</span>
        <span className="sep"></span>
        <span className="w4">Port Hercule</span>
        <span className="sep"></span>
        <span className="w5">Quatorze chambres.</span>
      </div>
    </div>
  );
}

/* ---------- Marquee (kept available, not used) ---------- */
function Marquee() {
  const items = [
    "Établi en MCMLVI",
    "★",
    "Port Hercule · Monaco",
    "★",
    "14 chambres",
    "★",
    "Vue sur la mer",
    "★",
    "Rooftop & terrasses",
    "★",
    "Best Rate Guarantee"
  ];
  const row = (
    <span>
      {items.map((it, i) => (
        <span key={i} className={it === "★" ? "star" : ""}>{it}</span>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}{row}
      </div>
    </div>
  );
}

/* ---------- Intro chapter ---------- */
function Intro() {
  return (
    <section className="bleed stack-lg" id="story">
      <div className="chapter">
        <div className="chapter-meta">
          <div className="chapter-numeral">I.</div>
          <div className="chapter-label">
            La Maison
            <span className="script">depuis 1956</span>
          </div>
        </div>
        <div className="chapter-body">
          <p className="italic-lede" style={{margin:'0 0 56px'}}>
            À deux pas du Casino, les pieds dans l'eau du Port Hercule —
            une adresse confidentielle où Monaco se laisse regarder.
          </p>
          <p>
            Le Miramar est une petite maison de quatorze chambres, posée
            face aux yachts et au Rocher. Ici, le luxe se mesure en lenteur :
            la lumière du matin sur la mer, le café servi sur la terrasse,
            le silence d'une ville qui pourtant ne dort jamais. Une parenthèse,
            entre Riviera et tradition princière, pour ceux qui préfèrent
            l'intime au monumental.
          </p>
          <p>
            Rénové avec soin, chaque détail évoque la Méditerranée — lin écru,
            marbre veiné, laiton patiné. Une élégance discrète, française par
            son trait, monégasque par son adresse, italienne par son humeur.
          </p>
          <div style={{marginTop:'48px', display:'flex', gap:'28px', alignItems:'center', flexWrap:'wrap'}}>
            <a className="btn" href="#suites">Visiter les chambres <span className="arr"></span></a>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontSize:'17px', color:'var(--ink-soft)', lineHeight:1.3, letterSpacing:'0.002em'}}>
              ou descendez doucement…
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Duo: address & view ---------- */
function Address() {
  return (
    <section className="bleed stack-md" id="address">
      <hr className="rule" style={{marginBottom: '80px'}} />
      <div className="duo">
        <div className="img">
          <img src={IMG.view} alt="Vue Port Hercule depuis le Miramar" />
          <span className="cap">Port Hercule · Vue Sud</span>
        </div>
        <div>
          <div className="chapter-label" style={{marginBottom:'24px'}}>
            II. — Le Lieu
          </div>
          <h2 style={{margin:'0 0 32px', fontFamily:'var(--display-2)', fontSize:'clamp(48px, 8vw, 120px)', lineHeight:0.98, letterSpacing:'0.005em', color:'var(--ink)', fontWeight:400}}>
            Un balcon<br/>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontSize:'0.62em', color:'var(--gold)', lineHeight:1, display:'inline-block', marginTop:'8px', fontWeight:400, letterSpacing:'0.005em'}}>sur la Méditerranée</span>
          </h2>
          <p className="serif-body" style={{maxWidth:'44ch', color:'var(--ink-soft)'}}>
            Au numéro 1 de l'avenue John Fitzgerald Kennedy, le Miramar
            occupe la dernière façade avant la mer. À la fenêtre : les voiliers
            du Yacht Club, les jardins du Casino, et la silhouette du Rocher.
            Tout est à pied — l'Opéra, la Place du Casino, le Musée Océanographique.
          </p>
          <div style={{marginTop:'48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', maxWidth:'440px'}}>
            <Stat n="100m" l="Casino Monte-Carlo" />
            <Stat n="350m" l="Circuit F1" />
            <Stat n="600m" l="Opéra Garnier" />
            <Stat n="1,5km" l="Plage du Larvotto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div style={{borderTop:'1px solid var(--rule)', paddingTop:'16px'}}>
      <div style={{fontFamily:'var(--display)', fontSize:'34px', lineHeight:1, color:'var(--ink)', fontStyle:'italic', letterSpacing:'-0.005em'}}>{n}</div>
      <div style={{fontFamily:'var(--display-3)', fontSize:'10px', letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--ink-soft)', marginTop:'10px'}}>{l}</div>
    </div>
  );
}

/* ---------- Suites ---------- */
const SUITES = [
  {
    id: 'mer',
    num: 'No. 01',
    title: 'Chambre Mer',
    sub: 'with sea view',
    img: IMG.double,
    size: '15 — 17 m²',
    bed: 'King · 2 pers.',
    feat: 'Vue panoramique',
    price: '€480',
    note: 'par nuit · TTC',
  },
  {
    id: 'balcon',
    num: 'No. 02',
    title: 'Chambre au Balcon',
    sub: 'balcony & sea view',
    img: IMG.balcony,
    size: '17 — 21 m²',
    bed: 'King · 2 pers.',
    feat: 'Balcon privé',
    price: '€640',
    note: 'par nuit · TTC',
  },
  {
    id: 'terrasse',
    num: 'No. 03',
    title: 'Studio Terrasse',
    sub: 'terrace & sea view',
    img: IMG.studio,
    size: '21 — 24 m²',
    bed: 'King · 2 pers.',
    feat: 'Terrasse privée',
    price: '€880',
    note: 'par nuit · TTC',
  },
];

function Suites() {
  const [hov, setHov] = useState(null);
  return (
    <section className="bleed stack-lg" id="suites" data-screen-label="Suites">
      <div style={{display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', marginBottom:'64px', gap:'40px'}}>
        <div>
          <div className="chapter-label" style={{marginBottom:'24px'}}>III. — Les Chambres</div>
          <h2 style={{margin:0, maxWidth:'15ch', fontFamily:'var(--display)', fontWeight:500, fontSize:'clamp(48px, 7.2vw, 104px)', lineHeight:1, letterSpacing:'-0.005em', color:'var(--ink)'}}>
            Quatorze chambres,<br/>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontWeight:400, fontSize:'0.7em', color:'var(--ink-soft)', lineHeight:1.1, display:'inline-block', marginTop:'10px', letterSpacing:'0.002em'}}>autant de regards sur la mer</span>
          </h2>
        </div>
        <p className="serif-body" style={{maxWidth:'36ch', color:'var(--ink-soft)', margin:0}}>
          Toutes pensées comme des cabines de yacht : lin, bois clair, marbre.
          Chaque ouverture donne sur le port. Choisissez votre vue.
        </p>
      </div>
      <div className="suites">
        {SUITES.map((s, i) => (
          <a
            key={s.id}
            className="suite"
            href={"#" + s.id}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
          >
            <div className="suite-img">
              <img src={s.img} alt={s.title} />
              <div className="suite-num">{s.num}</div>
              <div className="suite-name-overlay">
                <span>{s.feat}</span>
                <span>{s.size}</span>
              </div>
            </div>
            <div className="suite-info">
              <div className="suite-title">
                {s.title}
                <em>{s.sub}</em>
              </div>
              <div className="suite-meta">
                {s.bed}
                <span className="price">{s.price}<small>{s.note}</small></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Editorial: Rooftop ---------- */
function Rooftop() {
  return (
    <section id="rooftop" data-screen-label="Rooftop">
      <div className="editorial">
        <div className="editorial-img">
          <img src={IMG.bfast} alt="Rooftop terrasse" />
        </div>
        <div className="editorial-overlay">
          <div className="top">
            <span>IV. — Le Rooftop</span>
            <span>Petit-déjeuner · Apéritif · Couchers de soleil</span>
          </div>
          <div>
            <div style={{fontFamily:'var(--display-3)', fontSize:'10.5px', letterSpacing:'0.4em', textTransform:'uppercase', opacity:0.75, marginBottom:'28px'}}>
              <span style={{display:'inline-block', width:'36px', height:'1px', background:'var(--gold)', marginRight:'14px', verticalAlign:'middle'}}></span>
              À cinq étages du port
            </div>
            <div className="ttl">
              Une terrasse pour<br/>
              <em>oublier l'heure</em>
            </div>
            <p style={{fontFamily:'var(--italic)', fontStyle:'italic', fontSize:'20px', maxWidth:'48ch', marginTop:'32px', color:'var(--shell)'}}>
              Le petit-déjeuner est servi face à la mer. Le soir, un verre
              de champagne et la lumière dorée sur les yachts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  { n: '01', t: 'Conciergerie privée', e: 'private concierge',     b: "Réservations à l'Opéra, table chez Louis XV, accès au Yacht Club. Disponible jour et nuit." },
  { n: '02', t: 'Petit-déjeuner servi',  e: 'breakfast served',      b: "En chambre, sur le rooftop ou sur votre balcon. Pâtisseries de la maison, fruits du marché." },
  { n: '03', t: 'Yacht & transferts',    e: 'yacht & transfers',     b: "Berline avec chauffeur, navette héliport, affrètement de yacht à la demande." },
  { n: '04', t: 'Cave & champagne',      e: 'cellar & champagne',    b: "Une carte intime de grands crus. Bouteille d'accueil, service en chambre." },
  { n: '05', t: 'Spa partenaire',        e: 'spa partner',           b: "Soins à la carte au Thermes Marins voisin. Sur rendez-vous, transferts inclus." },
  { n: '06', t: 'Accès Casino',          e: 'casino privilege',      b: "Carte privilège Société des Bains de Mer. Réservation des salons et tables." },
];

function Services() {
  return (
    <section className="bleed stack-lg" id="services" data-screen-label="Services">
      <div className="services">
        <div>
          <div className="chapter-label" style={{marginBottom:'24px'}}>V. — L'Art de Vivre</div>
          <h2 style={{margin:'0 0 32px', fontFamily:'var(--display)', fontWeight:500, fontSize:'clamp(44px, 6.8vw, 96px)', lineHeight:1, letterSpacing:'-0.005em', color:'var(--ink)'}}>
            Les soins<br/>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontWeight:400, fontSize:'0.66em', color:'var(--ink-soft)', lineHeight:1.1, display:'inline-block', marginTop:'10px', letterSpacing:'0.002em'}}>d'une grande maison</span>
          </h2>
          <p className="serif-body" style={{color:'var(--ink-soft)', maxWidth:'34ch'}}>
            Une équipe restreinte, formée chez les meilleurs.
            Discrétion absolue, attention constante.
          </p>
        </div>
        <div className="svc-list">
          {SERVICES.map(s => (
            <div className="svc" key={s.n}>
              <div className="svc-num">{s.n}</div>
              <div className="svc-ttl">
                {s.t}
                <em>{s.e}</em>
              </div>
              <div className="svc-body">{s.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Monaco itinerary ---------- */
const ITIN = [
  { time: '08:00', title: 'Petit-déjeuner', sub: 'sur le rooftop', img: IMG.bfast },
  { time: '11:00', title: 'Casino de Paris', sub: 'à cent pas',     img: IMG.g_b },
  { time: '14:30', title: 'Larvotto',        sub: 'plage privée',   img: IMG.g_c },
  { time: '20:00', title: 'Le Louis XV',     sub: 'table d\'Alain Ducasse', img: IMG.g_f },
];

function Monaco() {
  return (
    <section className="bleed stack-md" id="monaco" data-screen-label="Monaco">
      <div style={{display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', marginBottom:'56px', gap:'40px'}}>
        <div>
          <div className="chapter-label" style={{marginBottom:'24px'}}>VI. — Un Jour à Monaco</div>
          <h2 style={{margin:0, maxWidth:'18ch', fontFamily:'var(--display-2)', fontWeight:400, fontSize:'clamp(44px, 7vw, 100px)', lineHeight:1, letterSpacing:'0.005em', color:'var(--ink)'}}>
            Une journée tracée<br/>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontWeight:400, fontSize:'0.55em', color:'var(--ink-soft)', lineHeight:1.1, display:'inline-block', marginTop:'10px', letterSpacing:'0.002em'}}>par notre concierge</span>
          </h2>
        </div>
        <a href="#" className="btn" style={{whiteSpace:'nowrap'}}>Itinéraire complet <span className="arr"></span></a>
      </div>
      <div className="itin">
        {ITIN.map(i => (
          <div className="itin-card" key={i.time}>
            <div className="itin-img"><img src={i.img} alt={i.title} /></div>
            <div className="itin-time">{i.time}</div>
            <div className="itin-ttl">{i.title}</div>
            <div className="itin-sub">{i.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Press ---------- */
function Press() {
  return (
    <section data-screen-label="Press">
      <div className="press">
        <div className="quote">
          <div className="quote-mark">“</div>
          <div className="quote-text">
            La plus jolie adresse du Port Hercule. On y dort comme sur un
            yacht, les pieds dans la Méditerranée.
          </div>
          <div className="quote-src" style={{fontFamily:'var(--display)', fontSize:'18px', letterSpacing:'0.04em', textTransform:'none', fontStyle:'italic'}}>
            Condé Nast Traveller <span style={{fontFamily:'var(--display-3)', fontSize:'10px', letterSpacing:'0.36em', textTransform:'uppercase', marginLeft:'8px', color:'var(--ink-soft)'}}>Hot List MMXXVI</span>
          </div>
        </div>
        <div className="quote">
          <div className="quote-mark">“</div>
          <div className="quote-text">
            Une boutique parisienne échouée sur la Riviera — quatorze chambres,
            zéro fausse note.
          </div>
          <div className="quote-src" style={{fontFamily:'var(--display-2)', fontSize:'19px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink)'}}>
            MONOCLE <span style={{fontFamily:'var(--display-3)', fontSize:'10px', letterSpacing:'0.36em', marginLeft:'8px', color:'var(--ink-soft)'}}>Travel Edit</span>
          </div>
        </div>
        <div className="quote">
          <div className="quote-mark">“</div>
          <div className="quote-text">
            Le secret le mieux gardé de Monte-Carlo : intime, élégant,
            et avec la meilleure vue de la principauté.
          </div>
          <div className="quote-src" style={{fontFamily:'var(--display)', fontStyle:'italic', fontWeight:500, fontSize:'19px', letterSpacing:'-0.005em', textTransform:'none', color:'var(--ink)'}}>
            How To Spend It <span style={{fontFamily:'var(--display-3)', fontSize:'10px', letterSpacing:'0.36em', textTransform:'uppercase', color:'var(--ink-soft)', marginLeft:'8px', verticalAlign:'middle'}}>Financial Times</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery({ onOpen }) {
  const imgs = [IMG.g_a, IMG.double, IMG.g_b, IMG.balcony, IMG.studio, IMG.g_c, IMG.g_d, IMG.g_e, IMG.g_f, IMG.g_g, IMG.bfast, IMG.view];
  const layout = ['g-1','g-2','g-3','g-4','g-5','g-6'];
  return (
    <section className="bleed stack-md" id="gallery" data-screen-label="Gallery">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'48px', flexWrap:'wrap', gap:'24px'}}>
        <div>
          <div className="chapter-label" style={{marginBottom:'20px'}}>VII. — Album</div>
          <h2 className="h1" style={{margin:0}}>Galerie<em style={{fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'0.7em', color:'var(--ink-soft)', marginLeft:'0.3em'}}>· un regard.</em></h2>
        </div>
        <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>Voir toutes les photos <span className="arr"></span></a>
      </div>
      <div className="gallery">
        {imgs.slice(0,6).map((src, i) => (
          <div key={i} className={"g " + layout[i]} onClick={() => onOpen(src)}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
      <div className="gallery" style={{marginTop: 'clamp(8px, 1vw, 16px)'}}>
        {imgs.slice(6,12).map((src, i) => (
          <div key={i} className={"g " + layout[i]} onClick={() => onOpen(src)}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Booking strip ---------- */
function Booking() {
  const today = new Date();
  const fmt = (d) => d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  const wk = (d) => d.toLocaleDateString('fr-FR', { weekday: 'short' });
  const arr = today;
  const dep = new Date(today.getTime() + 2*86400000);
  return (
    <section className="book" id="book" data-screen-label="Booking">
      <div className="book-inner">
        <div>
          <div className="chapter-label" style={{marginBottom:'24px', color:'rgba(250,246,236,0.6)'}}>
            <span style={{background:'rgba(250,246,236,0.5)', width:'36px', display:'inline-block', height:'1px', marginRight:'14px', verticalAlign:'middle'}}></span>
            VIII. — Réserver
          </div>
          <h2 className="book-title">
            Le meilleur tarif,<br/>
            <em>garanti</em>
          </h2>
          <p className="book-note" style={{maxWidth:'42ch'}}>
            Réservation en direct — petit-déjeuner offert, late check-out
            sur demande, bouteille d'accueil.
          </p>
        </div>
        <div>
          <div className="book-form">
            <div className="bf">
              <span className="bf-label">Arrivée</span>
              <span className="bf-value">{fmt(arr)} <em>{wk(arr)}</em></span>
            </div>
            <div className="bf">
              <span className="bf-label">Départ</span>
              <span className="bf-value">{fmt(dep)} <em>{wk(dep)}</em></span>
            </div>
            <div className="bf">
              <span className="bf-label">Voyageurs</span>
              <span className="bf-value">2 <em>adultes</em></span>
            </div>
            <div className="bf">
              <span className="bf-label">Chambre</span>
              <span className="bf-value">Mer <em>+ balcon</em></span>
            </div>
            <button className="bf-submit">Réserver</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="ftr" id="contact" data-screen-label="Footer">
      <div className="ftr-grid">
        <div className="ftr-brand">
          <div className="b-mark">Miramar</div>
          <div className="b-script">Monte&nbsp;Carlo</div>
          <div className="b-sub">Établi en MCMLVI</div>
          <p>
            Une petite maison de quatorze chambres,<br/>
            face au Port Hercule depuis 1956.
          </p>
        </div>
        <div className="ftr-col">
          <h4>La Maison</h4>
          <ul>
            <li><a href="#story">Histoire</a></li>
            <li><a href="#suites">Chambres</a></li>
            <li><a href="#rooftop">Rooftop</a></li>
            <li><a href="#equivoque">Équivoque</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#monaco">Monaco</a></li>
          </ul>
        </div>
        <div className="ftr-col">
          <h4>Réserver</h4>
          <ul>
            <li><a href="#book">Réservation directe</a></li>
            <li><a href="#">Offres saisonnières</a></li>
            <li><a href="#">Cartes cadeaux</a></li>
            <li><a href="#">Événements privés</a></li>
            <li><a href="#">Long séjour</a></li>
          </ul>
        </div>
        <div className="ftr-col">
          <h4>Adresse</h4>
          <ul>
            <li>1, avenue J.&nbsp;F.&nbsp;Kennedy<br/>98000 Monaco</li>
            <li><a href="tel:+37792002100">+377&nbsp;92&nbsp;00&nbsp;21&nbsp;00</a></li>
            <li><a href="mailto:info@hotelmiramar.mc">info@hotelmiramar.mc</a></li>
            <li><a href="https://www.instagram.com/hotelmiramarmc/" target="_blank" rel="noreferrer">@hotelmiramarmc</a></li>
          </ul>
        </div>
      </div>
      <div className="ftr-bot">
        <div>© MMXXVI — Hôtel Miramar Monte-Carlo</div>
        <div>Mentions légales · Politique de confidentialité</div>
        <div><span className="sig">Avec amour, depuis Paris.</span></div>
      </div>
    </footer>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className={"lb " + (src ? "on" : "")} onClick={onClose}>
      {src && <img src={src} alt="" />}
      <button className="lb-close">Fermer ×</button>
    </div>
  );
}

/* ---------- Équivoque rooftop bar — teaser to standalone page ---------- */
function Equivoque() {
  return (
    <section className="equiv" id="equivoque" data-screen-label="Equivoque">
      <div className="equiv-bg">
        <img src={IMG.g_e} alt="Équivoque rooftop" />
      </div>
      <div className="equiv-grain" aria-hidden="true"></div>
      <div className="equiv-inner">
        <div className="equiv-side">
          <div className="equiv-label">
            <span className="equiv-dash"></span>
            La Maison · Le Toit
          </div>
        </div>
        <div className="equiv-main">
          <div className="equiv-sub-eyebrow">— Exclusive Rooftop Terrace</div>
          <h2 className="equiv-title">
            Équivoque<span className="equiv-dot">.</span>
          </h2>
          <div className="equiv-tagline">
            <em>Le rooftop du Miramar</em> — face aux yachts, sous les étoiles.
          </div>
          <p className="equiv-body">
            Au cinquième étage du Miramar, Équivoque ouvre sa terrasse exclusive
            sur le Port Hercule. Le premier <em>Perfume Cocktail Menu</em> au monde —
            quatre fragrances signées Maison&nbsp;Fata® à Grasse, quatre cocktails
            inspirés. <strong>On sent ce que l'on boit.</strong>
          </p>
          <div className="equiv-pairs">
            <div className="equiv-pair">
              <span className="equiv-pn">I</span>
              <span className="equiv-name">Iris Noir</span>
              <span className="equiv-c">— Negroni fumé</span>
            </div>
            <div className="equiv-pair">
              <span className="equiv-pn">II</span>
              <span className="equiv-name">Néroli</span>
              <span className="equiv-c">— Mediterraneo</span>
            </div>
            <div className="equiv-pair">
              <span className="equiv-pn">III</span>
              <span className="equiv-name">Vétiver</span>
              <span className="equiv-c">— Old Fashioned vert</span>
            </div>
            <div className="equiv-pair">
              <span className="equiv-pn">IV</span>
              <span className="equiv-name">Tubéreuse</span>
              <span className="equiv-c">— Spritz blanc</span>
            </div>
          </div>
          <div className="equiv-events">
            <span>Grand Prix F1</span>
            <span>Monaco Yacht Show</span>
            <span>Événements privés</span>
            <span>Mariages</span>
          </div>
          <div className="equiv-cta">
            <a href="equivoque.html" className="btn equiv-btn">
              Entrer chez Équivoque <span className="arr"></span>
            </a>
            <span className="equiv-meta">
              Ouvert 18h — 02h · Avril → Octobre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pull Quote ribbon ---------- */
function PullQuote() {
  return (
    <section className="pullquote" data-screen-label="Pullquote">
      <p className="pullquote-text">
        Ici, le luxe<br/>
        <span className="normal">se mesure</span> <span style={{fontFamily:'var(--display-2)', fontStyle:'normal', color:'var(--gold)', letterSpacing:'0.005em'}}>en lenteur</span>.
      </p>
      <div className="pullquote-attrib">Manifeste de la Maison — Monte&nbsp;Carlo</div>
    </section>
  );
}

/* ---------- Vista filmstrip — photo essay between sections ---------- */
const VISTA = [
  { num: '01', ttl: 'L’aube sur le port',       meta: 'Vue depuis ch. 503 · 06:42', img: IMG.view },
  { num: '02', ttl: 'Le café du matin',         meta: 'Rooftop · toute l’année',     img: IMG.bfast },
  { num: '03', ttl: 'Linge écru, marbre veiné', meta: 'Suite Mer · détail',          img: IMG.g_g },
  { num: '04', ttl: 'Yachts au crépuscule',     meta: 'Port Hercule · 21:18',       img: IMG.g_c },
  { num: '05', ttl: 'Vers la place du Casino',  meta: 'À sept minutes à pied',      img: IMG.g_b },
  { num: '06', ttl: 'Champagne sur la terrasse', meta: 'Couchers d’été',            img: IMG.g_f },
];

function Vista() {
  return (
    <section className="vista" data-screen-label="Vista">
      <div className="vista-head">
        <div>
          <div className="chapter-label" style={{marginBottom:'24px'}}>VII. — Carnet</div>
          <h2 className="vista-title">
            Six instantanés,<br/>
            <span style={{fontFamily:'var(--italic)', fontStyle:'italic', fontWeight:400, fontSize:'0.62em', color:'var(--gold)', lineHeight:1.1, display:'inline-block', marginTop:'10px', letterSpacing:'0.002em'}}>une journée</span>
          </h2>
        </div>
        <p className="serif-body" style={{maxWidth:'34ch', color:'var(--ink-soft)', margin:0}}>
          De l’aube au verre du soir — le carnet du concierge,
          photographié par la maison.
        </p>
      </div>
      <div className="vista-track">
        {VISTA.map(v => (
          <div className="vista-shot" key={v.num}>
            <div className="vista-shot-img"><img src={v.img} alt={v.ttl} /></div>
            <div className="vista-shot-cap">
              <div className="vista-shot-num">— {v.num}</div>
              <div>
                <div className="vista-shot-ttl">{v.ttl}</div>
                <div className="vista-shot-meta">{v.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, {
  Header, Hero, Marquee, Manifesto, Intro, Address, Suites,
  Rooftop, Equivoque, PullQuote, Vista, Services, Monaco, Press, Gallery, Booking, Footer, Lightbox,
  IMG, Wordmark
});
