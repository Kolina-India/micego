import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const experiences = [
  { number: "01", title: "Incentive journeys", subtitle: "RECOGNISE ACHIEVEMENT", className: "experience-image--incentive", description: "Turn performance into a shared story people will remember." },
  { number: "02", title: "Conferences & summits", subtitle: "ALIGN PEOPLE AND IDEAS", className: "experience-image--conference", description: "Bring the right people together around what comes next." },
  { number: "03", title: "Leadership meets", subtitle: "MAKE SPACE FOR WHAT MATTERS", className: "experience-image--leadership", description: "Create the conditions for clearer thinking and better decisions." },
  { number: "04", title: "Employee experiences", subtitle: "BUILD A SENSE OF BELONGING", className: "experience-image--employee", description: "Design meaningful moments for the people behind the business." },
  { number: "05", title: "Brand experiences", subtitle: "BRING THE STORY TO LIFE", className: "experience-image--brand", description: "Create a setting where your message becomes an experience." },
  { number: "06", title: "Bespoke programmes", subtitle: "START WITH THE OBJECTIVE", className: "experience-image--bespoke", description: "A considered programme shaped around your brief—not a template." },
];

const steps = [
  ["01", "Discover", "The objective, audience and measures of success."],
  ["02", "Design", "The experience, brief and delivery plan."],
  ["03", "Source", "The right partners, options and commercials."],
  ["04", "Manage", "People, decisions, details and readiness."],
  ["05", "Deliver", "Clear coordination from plan to live execution."],
  ["06", "Measure", "Outcomes, reconciliation and what comes next."],
];

export default function HomePage() {
  return (
    <main id="top">
      <div className="topline"><span>KOLINA GROUP PRESENTS</span><span>DESIGNED FOR BUSINESS. BUILT AROUND PEOPLE.</span><span>MG / 001</span></div>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top" aria-label="MiceGo home"><img src="/micego-logo.svg" alt="MiceGo" width="172" height="58" /></a>
          <nav aria-label="Main navigation">
            <a href="#experiences">Experiences</a>
            <a href="#method">Our method</a>
            <a href="#difference">The difference</a>
          </nav>
          <a className="btn btn-nav" href="#enquiry">Start a conversation <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" role="img" aria-label="An immersive corporate event space with dramatic lighting" />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span /> CORPORATE EXPERIENCES, SIMPLIFIED.</p>
            <h1>Make the<br />moment <em>mean more.</em></h1>
            <p className="hero-lede">The most memorable corporate experiences don’t happen by chance. They’re designed with intent—and delivered through a hundred details working as one.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#enquiry">Let’s shape your brief <ArrowUpRight size={17} /></a>
              <a className="underlink" href="#experiences">Explore what we create <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-side-note"><span className="vertical-rule" /><span>FROM THE FIRST BRIEF<br />TO THE FINAL DETAIL</span></div>
          <div className="hero-index"><span>01</span><i /><span>06</span></div>
          <div className="hero-stamp"><Sparkles size={15} /><span>THOUGHTFULLY<br />ORCHESTRATED</span></div>
        </div>
        <a href="#manifesto" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <div className="signal-strip">
        <div className="container signal-inner"><span>INCENTIVES</span><i /> <span>CONFERENCES</span><i /> <span>LEADERSHIP</span><i /> <span>EMPLOYEE ENGAGEMENT</span><i /> <span>BRAND EXPERIENCES</span></div>
      </div>

      <section className="manifesto section" id="manifesto">
        <div className="container manifesto-grid">
          <div className="manifesto-kicker"><span className="eyebrow"><span /> THE MICEGO POINT OF VIEW</span><span className="big-index">01<span>/</span>06</span></div>
          <div className="manifesto-content">
            <h2>The experience is the visible part.<br /><em>The coordination is everything.</em></h2>
            <div className="manifesto-bottom">
              <p>A venue is one decision. A programme is thousands of connected ones. MiceGo brings the brief, participants, suppliers, schedules and commercial detail into one considered way of working.</p>
              <a className="circle-link" href="#method" aria-label="Discover the MiceGo method"><ArrowDownRight size={23} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section" id="experiences">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> WHAT WE CREATE</p><h2>Different objectives.<br /><em>Remarkable moments.</em></h2></div>
            <p>From recognition to reinvention, we shape corporate programmes around the people in the room—and the reason they’re there.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.number}>
                <div className={`experience-image ${experience.className}`}>
                  <span className="image-number">{experience.number}</span>
                  <span className="image-arrow"><ArrowUpRight size={18} /></span>
                  <span className="image-caption">{experience.subtitle}</span>
                </div>
                <div className="experience-copy"><h3>{experience.title}</h3><p>{experience.description}</p></div>
              </article>
            ))}
          </div>
          <div className="experience-bottom"><span>HAVE A DIFFERENT BRIEF?</span><a href="#enquiry">Let’s start with your objective <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="method-section section" id="method">
        <div className="container">
          <div className="method-heading">
            <p className="eyebrow eyebrow-light"><span /> THE MICEGO METHOD</p>
            <h2>One connected journey.<br /><em>From intent to impact.</em></h2>
            <p>Good delivery isn’t a last-minute effort. It’s the result of connected thinking, clear ownership and visible progress at every stage.</p>
          </div>
          <div className="method-track">
            {steps.map(([number, title, description], index) => (
              <article className="method-step" key={number}>
                <div className="method-number"><span>{number}</span>{index < 5 && <i />}</div>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
          <div className="method-footer"><span>DISCOVER → DESIGN → SOURCE → MANAGE → DELIVER → MEASURE</span><span>THE WORK BEHIND THE WOW.</span></div>
        </div>
      </section>

      <section className="difference-section section" id="difference">
        <div className="difference-visual">
          <div className="difference-photo" role="img" aria-label="A carefully staged corporate gathering" />
          <div className="difference-photo-label"><span>DETAILS, CONNECTED.</span><span>MG / 002</span></div>
        </div>
        <div className="difference-copy">
          <p className="eyebrow"><span /> MORE THAN ARRANGEMENTS</p>
          <h2>Not just the event.<br /><em>Everything around it.</em></h2>
          <p className="difference-lede">MiceGo is built around the whole programme—not a collection of disconnected bookings.</p>
          <div className="difference-list">
            <div><span><Check size={14} /></span><p><b>One connected view</b><small>People, suppliers, schedules and workstreams in context.</small></p></div>
            <div><span><Check size={14} /></span><p><b>Clear ownership</b><small>Decisions, approvals and follow-through with accountability.</small></p></div>
            <div><span><Check size={14} /></span><p><b>Commercial clarity</b><small>Costs, changes and outcomes considered end to end.</small></p></div>
          </div>
          <a className="text-arrow" href="#enquiry">See what this could mean for your team <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="principles">
        <div className="container principles-grid">
          <div><Layers3 /><b>Connected by design</b><span>Every workstream has a place in the bigger picture.</span></div>
          <div><ShieldCheck /><b>Accountable by default</b><span>Clear ownership from brief to closure.</span></div>
          <div><Users /><b>People at the centre</b><span>Experiences built for the people who make business happen.</span></div>
          <div><Target /><b>Purpose over templates</b><span>Start with what needs to change, not a standard package.</span></div>
        </div>
      </section>

      <section className="enquiry-section section" id="enquiry">
        <div className="container enquiry-layout">
          <div className="enquiry-copy">
            <p className="eyebrow eyebrow-light"><span /> YOUR NEXT EXPERIENCE STARTS HERE</p>
            <h2>Big objective.<br /><em>Right people.<br />One clear plan.</em></h2>
            <p>Tell us what you’re looking to achieve. We’ll begin with the right questions—and build from there.</p>
            <div className="enquiry-contact"><span>FOR CORPORATE PROGRAMMES & BESPOKE BRIEFS</span><a href="mailto:info@micego.in">info@micego.in <ArrowUpRight size={15} /></a></div>
          </div>
          <form className="enquiry-form" action="mailto:info@micego.in" method="post" encType="text/plain">
            <div className="form-heading"><span>LET’S BEGIN</span><span>YOUR BRIEF / 01</span></div>
            <label>YOUR NAME<input name="name" autoComplete="name" placeholder="Full name" required /></label>
            <div className="form-pair">
              <label>WORK EMAIL<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
              <label>COMPANY<input name="company" autoComplete="organization" placeholder="Company name" required /></label>
            </div>
            <div className="form-pair">
              <label>EXPERIENCE TYPE<select name="experienceType" defaultValue="" required><option value="" disabled>Choose a category</option>{experiences.map((experience) => <option key={experience.number}>{experience.title}</option>)}<option>Something else</option></select></label>
              <label>GROUP SIZE<select name="participants" defaultValue=""><option value="">Choose a range</option><option>Under 50</option><option>50–150</option><option>151–500</option><option>501–1,000</option><option>1,000+</option></select></label>
            </div>
            <label>WHAT WOULD SUCCESS LOOK LIKE?<textarea name="brief" rows={3} placeholder="A little about your objective, timing or initial thoughts…" /></label>
            <button className="btn btn-gold form-submit" type="submit">Share your brief <ArrowUpRight size={17} /></button>
            <p className="form-preview-note">Enquiry capture is in preview mode and will be connected to the MiceGo platform before public launch.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand"><a className="logo logo-light" href="#top" aria-label="MiceGo home"><img src="/micego-logo.svg" alt="MiceGo" width="172" height="58" /></a><p>Corporate Experiences, Simplified.</p></div>
          <div className="footer-links"><a href="#experiences">Experiences</a><a href="#method">Our method</a><a href="#difference">The difference</a><a href="#enquiry">Contact</a></div>
          <div className="footer-contact"><span>MAKE SOMETHING MEANINGFUL.</span><a href="mailto:info@micego.in">info@micego.in</a><a href="https://micego.in">micego.in <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MiceGo™. All rights reserved.</span><span>A Kolina Group company</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
