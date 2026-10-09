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
  { number: "02", title: "Meetings & conferences", subtitle: "ALIGN PEOPLE AND IDEAS", className: "experience-image--conference", description: "Bring teams, partners and decision-makers together with a clear purpose." },
  { number: "03", title: "Leadership retreats & offsites", subtitle: "MAKE SPACE FOR WHAT MATTERS", className: "experience-image--leadership", description: "Give leaders the setting and structure to align, plan and make decisions." },
  { number: "04", title: "Employee engagement", subtitle: "BUILD A SENSE OF BELONGING", className: "experience-image--employee", description: "Recognise contribution and create shared moments that bring people together." },
  { number: "05", title: "Corporate events & launches", subtitle: "BRING THE STORY TO LIFE", className: "experience-image--brand", description: "Bring launches, dealer meets and brand moments to life with coordinated delivery." },
  { number: "06", title: "Dealer & channel programmes", subtitle: "REWARD PARTNERSHIP", className: "experience-image--bespoke", description: "Design incentive-led programmes for dealers, distributors, channel partners and sales teams." },
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
      <div className="topline"><span>A VERTEX TRIPS BRAND</span><span>WHERE BUSINESS MEETS EXPERIENCE.</span><span>MG / 001</span></div>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top" aria-label="MiceGo home"><span className="logo-crop"><img src="/micego-logo.svg" alt="MiceGo" width="258" height="86" /></span></a>
          <nav aria-label="Main navigation">
            <a href="#experiences">Experiences</a>
            <a href="#method">Our method</a>
            <a href="#leadership">Our experience</a>
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
            <h1>Where business<br />meets <em>experience.</em></h1>
            <p className="hero-lede">MICEGO turns corporate objectives into meaningful experiences, stronger connections and programmes that are thoughtfully designed and carefully delivered—from the first brief to the final detail.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#enquiry">Plan your corporate experience <ArrowUpRight size={17} /></a>
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
        <div className="container signal-inner"><span>INCENTIVES</span><i /> <span>MEETINGS & CONFERENCES</span><i /> <span>LEADERSHIP OFFSITES</span><i /> <span>DEALER MEETS</span><i /> <span>CORPORATE EVENTS</span></div>
      </div>

      <section className="manifesto section" id="manifesto">
        <div className="container manifesto-grid">
          <div className="manifesto-kicker"><span className="eyebrow"><span /> THE MICEGO POINT OF VIEW</span><span className="big-index">01<span>/</span>06</span></div>
          <div className="manifesto-content">
            <h2>Corporate objectives.<br /><em>Meaningful experiences.</em></h2>
            <div className="manifesto-bottom">
              <p>From incentives and conferences to leadership retreats and brand experiences, MICEGO brings objectives, people, suppliers, schedules and commercial details into one coordinated programme.</p>
              <a className="circle-link" href="#method" aria-label="Discover the MiceGo method"><ArrowDownRight size={23} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section" id="experiences">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> WHAT WE CREATE</p><h2>Different objectives.<br /><em>Remarkable moments.</em></h2></div>
            <p>From rewarding high performers to aligning leadership teams, we build around the business objective, the audience and the experience you want people to remember.</p>
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
            <h2>One connected method.<br /><em>From brief to impact.</em></h2>
            <p>Discover. Design. Source. Manage. Deliver. Measure. One connected method brings decisions, suppliers and execution together, with clear ownership at every stage.</p>
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

      <section className="credibility-section section" id="leadership">
        <div className="container credibility-grid">
          <div className="credibility-intro">
            <p className="eyebrow"><span /> EXPERIENCE BEHIND THE EXPERIENCE</p>
            <h2>Built on real-world experience.<br /><em>Designed for corporate outcomes.</em></h2>
            <p>MICEGO is being built on the founder’s 26 years in the travel industry, spanning sales, customer service and operations. That perspective informs how we approach supplier coordination, group movements, participant requirements and delivery accountability.</p>
            <a className="text-arrow" href="#enquiry">Discuss your corporate programme <ArrowRight size={16} /></a>
          </div>
          <div className="credibility-principles">
            <article><span>01 / OBJECTIVE</span><h3>Start with the business reason.</h3><p>Define the audience, purpose, budget and measures of success before building the programme.</p></article>
            <article><span>02 / COORDINATION</span><h3>Connect every workstream.</h3><p>Bring venues, accommodation, transport, suppliers, schedules and participants into one plan.</p></article>
            <article><span>03 / ACCOUNTABILITY</span><h3>Make ownership visible.</h3><p>Clarify decisions, responsibilities, dependencies and readiness from brief to delivery.</p></article>
            <article><span>04 / MEASUREMENT</span><h3>Close the loop.</h3><p>Review feedback, commercial outcomes and learning after the programme—not only on event day.</p></article>
          </div>
        </div>
      </section>

      <section className="difference-section section" id="difference">
        <div className="difference-visual">
          <div className="difference-photo" role="img" aria-label="A carefully staged corporate gathering" />
          <div className="difference-photo-label"><span>DETAILS, CONNECTED.</span><span>MG / 002</span></div>
        </div>
        <div className="difference-copy">
          <p className="eyebrow"><span /> MICEGO VS TRADITIONAL AGENCIES</p>
          <h2>Beyond bookings.<br /><em>One connected programme.</em></h2>
          <p className="difference-lede">A corporate programme is more than separate hotel, venue, transport and activity bookings. We coordinate the moving parts around one objective, one brief and a shared delivery plan.</p>
          <div className="difference-list">
            <div><span><Check size={14} /></span><p><b>Programme-wide coordination</b><small>People, suppliers, schedules and workstreams planned as one.</small></p></div>
            <div><span><Check size={14} /></span><p><b>Clear accountability</b><small>Decisions, owners, readiness and follow-through are visible.</small></p></div>
            <div><span><Check size={14} /></span><p><b>Commercial discipline</b><small>Budgets, changes and outcomes considered across the programme.</small></p></div>
          </div>
          <a className="text-arrow" href="#enquiry">See what this could mean for your team <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="principles">
        <div className="container principles-grid">
          <div><Layers3 /><b>Connected by design</b><span>Every workstream has a place in the bigger picture.</span></div>
          <div><ShieldCheck /><b>Accountable by default</b><span>Clear accountability from brief to closure.</span></div>
          <div><Users /><b>People at the centre</b><span>Experiences built for the people who make business happen.</span></div>
          <div><Target /><b>Purpose over templates</b><span>Start with what needs to change, not a standard package.</span></div>
        </div>
      </section>

      <section className="enquiry-section section" id="enquiry">
        <div className="container enquiry-layout">
          <div className="enquiry-copy">
            <p className="eyebrow eyebrow-light"><span /> YOUR NEXT EXPERIENCE STARTS HERE</p>
            <h2>What does success<br /><em>look like for your<br />business?</em></h2>
            <p>Tell us the objective, audience, timing and initial scope. We’ll use your brief to start a focused corporate conversation—not send you a generic package.</p>
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
            <div className="form-pair">
              <label>PREFERRED DESTINATION<input name="destination" placeholder="City, country or open to ideas" /></label>
              <label>EXPECTED TIMING<select name="timing" defaultValue=""><option value="">Choose timing</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option><option>Dates to be decided</option></select></label>
            </div>
            <div className="form-pair">
              <label>INDICATIVE BUDGET<select name="budget" defaultValue=""><option value="">Choose a budget range</option><option>Under ₹5 lakh</option><option>₹5–15 lakh</option><option>₹15–30 lakh</option><option>₹30–75 lakh</option><option>₹75 lakh+</option><option>To be discussed</option></select></label>
              <label>YOUR ROLE<select name="role" defaultValue=""><option value="">Choose if relevant</option><option>Leadership / Management</option><option>HR / People & Culture</option><option>Sales / Channel / Incentives</option><option>Marketing / Brand</option><option>Procurement / Administration</option><option>Event / Corporate Travel</option><option>Other</option></select></label>
            </div>
            <label>WHAT WOULD SUCCESS LOOK LIKE?<textarea name="brief" rows={3} placeholder="A little about your objective, timing or initial thoughts…" /></label>
            <button className="btn btn-gold form-submit" type="submit">Share your brief <ArrowUpRight size={17} /></button>
            <p className="form-preview-note">This form is a design preview. Online submission is not active yet; please email info@micego.in until the enquiry API is configured.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand"><a className="logo logo-light" href="#top" aria-label="MiceGo home"><span className="logo-crop"><img src="/micego-logo.svg" alt="MiceGo" width="258" height="86" /></span></a><p>Corporate Experiences, Simplified.</p><div className="brand-attribution"><span className="brand-parent">A Vertex Trips Brand</span><span className="brand-group">Part of Kolina Group</span></div></div>
          <div className="footer-links"><a href="#experiences">Experiences</a><a href="#method">Our method</a><a href="#difference">The difference</a><a href="#enquiry">Contact</a></div>
          <div className="footer-contact"><span>MAKE SOMETHING MEANINGFUL.</span><a href="mailto:info@micego.in">info@micego.in</a><a href="https://micego.in">micego.in <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MICEGO™. All rights reserved.</span><span>Kolina India Private Limited</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
