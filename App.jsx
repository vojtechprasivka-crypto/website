import { ArrowRight, Bot, CalendarCheck, Check, Clock3, Headphones, LineChart, MessageCircle, PhoneCall, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';

const benefits = [
  'Zvedne každý hovor do 3 sekund',
  'Mluví česky přirozeně a profesionálně',
  'Objednává do kalendáře bez přepisování',
  'Předává urgentní hovory správným lidem',
];

const features = [
  {
    icon: PhoneCall,
    title: 'Příjem hovorů 24/7',
    text: 'AI recepční odbaví dotazy, rezervace i změny termínů i mimo pracovní dobu.',
  },
  {
    icon: CalendarCheck,
    title: 'Chytré objednávání',
    text: 'Napojení na kalendář, CRM nebo rezervační systém podle potřeb vaší firmy.',
  },
  {
    icon: MessageCircle,
    title: 'SMS a e-mail follow-up',
    text: 'Po hovoru odešle shrnutí, potvrzení termínu nebo další instrukce klientovi.',
  },
  {
    icon: LineChart,
    title: 'Přehled výkonu',
    text: 'Uvidíte počet hovorů, ztracené příležitosti, důvody volání a návratnost.',
  },
];

const industries = ['Kliniky', 'Salony', 'Reality', 'Autoservisy', 'E-shopy', 'Právníci'];

const steps = [
  ['01', 'Analýza hovorů', 'Zmapujeme nejčastější dotazy, procesy a tón komunikace.'],
  ['02', 'Nastavení AI recepční', 'Vytvoříme scénáře, napojíme kalendáře a otestujeme češtinu.'],
  ['03', 'Spuštění a optimalizace', 'AI nasadíme na linku a průběžně zvyšujeme konverze.'],
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Recepční AI">
          <span className="brandMark"><Bot size={22} /></span>
          <span>Recepční AI</span>
        </a>
        <div className="navLinks">
          <a href="#sluzby">Služby</a>
          <a href="#proces">Proces</a>
          <a href="#cena">Cena</a>
        </div>
        <a className="navCta" href="#kontakt">Domluvit ukázku</a>
      </nav>

      <section id="top" className="hero section">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={16} /> AI recepční pro české firmy</div>
          <h1>Už nikdy nezmeškejte hovor, který může přinést nového zákazníka.</h1>
          <p className="heroText">Nasadíme vám AI recepční v češtině, která zvedá telefon 24/7, odpovídá na dotazy, objednává klienty a předává jen hovory, které opravdu potřebují člověka.</p>
          <div className="heroActions">
            <a className="primaryBtn" href="#kontakt">Získat bezplatnou ukázku <ArrowRight size={18} /></a>
            <a className="secondaryBtn" href="#sluzby"><PhoneCall size={18} /> Jak to funguje</a>
          </div>
          <div className="proofRow">
            <div><strong>24/7</strong><span>dostupnost</span></div>
            <div><strong>-65 %</strong><span>méně zmeškaných hovorů</span></div>
            <div><strong>3 dny</strong><span>typické spuštění</span></div>
          </div>
        </div>

        <div className="heroPanel" aria-label="Ukázka hovoru AI recepční">
          <div className="callCard glass">
            <div className="callTop">
              <div className="pulse"><PhoneCall size={22} /></div>
              <div>
                <strong>Příchozí hovor</strong>
                <span>Nový klient, Praha</span>
              </div>
              <span className="live">živě</span>
            </div>
            <div className="transcript">
              <p><b>Klient:</b> Dobrý den, můžu se objednat na konzultaci?</p>
              <p><b>AI recepční:</b> Samozřejmě. Máte raději úterý dopoledne, nebo čtvrtek odpoledne?</p>
              <p><b>Klient:</b> Čtvrtek ve 14:00.</p>
            </div>
            <div className="successLine"><Check size={18} /> Termín zapsán do kalendáře</div>
          </div>
          <div className="floatingBadge badgeOne"><Clock3 size={18} /> Odpověď za 1,8 s</div>
          <div className="floatingBadge badgeTwo"><ShieldCheck size={18} /> GDPR-ready proces</div>
        </div>
      </section>

      <section className="logos section compact">
        <span>Ideální pro firmy, kde každý hovor rozhoduje</span>
        <div>{industries.map((item) => <b key={item}>{item}</b>)}</div>
      </section>

      <section id="sluzby" className="section split">
        <div>
          <div className="eyebrow"><Zap size={16} /> Co získáte</div>
          <h2>Recepční, která prodává, filtruje a nikdy nemá pauzu.</h2>
        </div>
        <div className="benefitList">
          {benefits.map((benefit) => <div key={benefit}><Check size={18} /> {benefit}</div>)}
        </div>
      </section>

      <section className="featureGrid section compact">
        {features.map(({ icon: Icon, title, text }) => (
          <article className="featureCard" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="proces" className="section process">
        <div className="centerHead">
          <div className="eyebrow"><Headphones size={16} /> Rychlé nasazení</div>
          <h2>Od prvního callu k aktivní AI recepční během několika dnů.</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <div className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cena" className="section pricing">
        <div className="priceCard glass">
          <div>
            <div className="eyebrow"><Star size={16} /> Pilotní nabídka</div>
            <h2>Otestujte AI recepční na vlastní lince bez rizika.</h2>
            <p>Navrhneme scénář pro váš obor, spustíme ukázku a ukážeme, kolik poptávek dnes ztrácíte mimo pracovní dobu.</p>
          </div>
          <div className="priceBox">
            <span>pilot od</span>
            <strong>9 900 Kč</strong>
            <small>včetně nastavení scénářů</small>
            <a className="primaryBtn full" href="#kontakt">Chci návrh řešení</a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section finalCta">
        <div className="ctaBox">
          <h2>Chcete slyšet, jak by vaše AI recepční zněla?</h2>
          <p>Napište nám a připravíme krátkou demo nahrávku pro váš obor v češtině.</p>
          <form className="leadForm">
            <input type="text" placeholder="Vaše jméno" aria-label="Vaše jméno" />
            <input type="email" placeholder="E-mail" aria-label="E-mail" />
            <input type="tel" placeholder="Telefon" aria-label="Telefon" />
            <button type="submit">Domluvit demo <ArrowRight size={18} /></button>
          </form>
          <small>Odesláním souhlasíte s kontaktováním za účelem přípravy ukázky.</small>
        </div>
      </section>
    </main>
  );
}

export default App;
