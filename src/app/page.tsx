import {
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
  {
    number: "01",
    title: "Incentive Experiences",
    description:
      "Recognise achievement with programmes that give people a meaningful reason to connect, explore and celebrate.",
    tags: "Dealer incentives · Sales achievers · Recognition",
  },
  {
    number: "02",
    title: "Conferences & Summits",
    description:
      "Bring teams, partners and ideas together through carefully coordinated business gatherings.",
    tags: "Annual meets · Partner summits · Conferences",
  },
  {
    number: "03",
    title: "Leadership Meets",
    description:
      "Create the space for alignment, strategy and important conversations to happen well.",
    tags: "Leadership offsites · Strategy meets · Board retreats",
  },
  {
    number: "04",
    title: "Employee Experiences",
    description:
      "Build belonging and momentum through people-first experiences with a clear purpose.",
    tags: "Engagement · Team experiences · Milestones",
  },
  {
    number: "05",
    title: "Product & Brand Experiences",
    description:
      "Make launches and brand moments coherent, considered and memorable for the people who matter.",
    tags: "Launches · Brand activations · Partner events",
  },
  {
    number: "06",
    title: "Custom Corporate Programmes",
    description:
      "Start with your business objective. We will shape the programme around the brief—not a template.",
    tags: "Multi-city · Bespoke programmes · Special projects",
  },
];

const steps = [
  ["01", "Discover", "Understand the business objective, audience, constraints and measures of success."],
  ["02", "Design", "Shape the experience, programme structure, brief and delivery plan."],
  ["03", "Source", "Evaluate suitable suppliers, compare options and align commercials."],
  ["04", "Manage", "Coordinate people, workstreams, decisions, documents and readiness."],
  ["05", "Deliver", "Keep execution aligned with the plan while resolving exceptions clearly."],
  ["06", "Measure", "Reconcile costs, review outcomes and capture learning for the next programme."],
];

export default function HomePage() {
  return (
    <main id="top">
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top" aria-label="MiceGo home">
            MICE<span>·</span>GO<sup>™</sup>
          </a>
          <nav aria-label="Main navigation">
            <a href="#experiences">Experiences</a>
            <a href="#approach">Our approach</a>
            <a href="#difference">Why MiceGo</a>
          </nav>
          <a className="btn btn-navy nav-cta" href="#enquiry">
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light"><i /> FOR BUSINESSES THAT BRING PEOPLE TOGETHER</p>
            <h1>Corporate<br />experiences,<br /><em>thoughtfully made.</em></h1>
            <p className="lede">
              From incentive programmes to leadership meets, MiceGo brings the brief,
              people, suppliers and delivery plan into one considered experience.
            </p>
            <div className="actions">
              <a className="btn btn-gold" href="#enquiry">Let’s shape your brief <ArrowRight size={16} /></a>
              <a className="text-link light-link" href="#experiences">Explore experiences <ArrowDownRight size={16} /></a>
            </div>
            <p className="hero-note">DISCOVER · DESIGN · SOURCE · MANAGE · DELIVER · MEASURE</p>
          </div>
          <div className="hero-art" aria-label="Abstract architectural artwork" role="img">
            <div className="art-label"><span>THE MICEGO PERSPECTIVE</span><span>01 / 06</span></div>
            <div className="art-frame">
              <div className="art-glow" />
              <div className="disc" />
              <div className="arch arch-one" />
              <div className="arch arch-two" />
              <div className="arch arch-three" />
              <div className="beam" />
              <div className="plinth plinth-one" />
              <div className="plinth plinth-two" />
              <div className="floor" />
              <span className="art-index">DESIGNED AROUND PEOPLE</span>
            </div>
            <div className="art-caption"><span>INTENTION, MADE TANGIBLE</span><span>MG / 001</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>A MORE CONSIDERED WAY TO BRING PEOPLE TOGETHER</span><i /><span>BUILT AROUND YOUR OBJECTIVE</span></div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow"><i /> BEYOND THE BOOKING</p>
            <h2>Good experiences<br />are designed.<br /><em>Great ones are coordinated.</em></h2>
          </div>
          <div className="intro-body">
            <p className="lead">The details matter. The connections between them matter even more.</p>
            <p>
              A corporate programme is more than a venue, a room list or a schedule.
              It is a network of decisions, people, suppliers, deadlines and moments
              that need to work together.
            </p>
            <p>
              MiceGo brings those moving parts into one coordinated operating approach—from
              the first business brief to on-ground delivery and post-event commercial closure.
            </p>
            <a className="text-link" href="#approach">See how we work <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section experiences" id="experiences">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow"><i /> WHAT WE CREATE</p><h2>Experiences with<br /><em>a purpose.</em></h2></div>
            <p className="section-intro">Different objectives. Different audiences. One considered approach to planning, coordination and delivery.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.number}>
                <div className="card-top"><span>{experience.number}</span><ArrowUpRight size={17} /></div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <div className="tags">{experience.tags.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="experience-note"><Sparkles size={16} /> Have a different brief? We’ll shape the experience around your objective.</p>
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow light"><i /> THE MICEGO METHOD</p><h2>One connected<br /><em>way of working.</em></h2></div>
            <p className="section-intro">A clear path from the first conversation to the final review—designed to make ownership and progress visible.</p>
          </div>
          <div className="steps">
            {steps.map(([number, title, description], index) => (
              <article className="step" key={number}>
                <div className="step-no">{number}<span>{index === 5 ? <Check size={15} /> : <ArrowRight size={15} />}</span></div>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
          <p className="approach-note">↗ From fragmented arrangements to a coordinated operating plan.</p>
        </div>
      </section>

      <section className="section difference" id="difference">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow"><i /> THE DIFFERENCE</p><h2>Coordination is not<br /><em>an afterthought.</em></h2></div>
            <p className="section-intro">Traditional arrangements can leave teams coordinating across disconnected conversations and documents. MiceGo is designed around the complete experience.</p>
          </div>
          <div className="compare">
            <div>
              <p className="compare-label">A FRAGMENTED APPROACH</p>
              {["Scattered supplier conversations", "Spreadsheets with separate versions", "Unclear ownership between teams", "Issues surfaced at the last minute", "Limited post-event cost visibility"].map((item) => <p className="compare-row" key={item}><span>—</span>{item}</p>)}
            </div>
            <div className="compare-good">
              <p className="compare-label">THE MICEGO APPROACH</p>
              {["Connected supplier and workstream coordination", "Structured information and version control", "Clear roles, responsibilities and approvals", "Readiness checks and exception escalation", "Commercial reconciliation and outcome review"].map((item) => <p className="compare-row" key={item}><b><Check size={12} /></b>{item}</p>)}
            </div>
          </div>
          <p className="disclaimer">MiceGo’s operating approach is designed to support these practices. Specific capabilities are delivered as the platform and service offering are implemented.</p>
        </div>
      </section>

      <section className="values">
        <div className="container values-grid">
          <div><Layers3 /><b>Connected workstreams</b><span>People, suppliers and plans aligned.</span></div>
          <div><ShieldCheck /><b>Accountable execution</b><span>Clear ownership and follow-through.</span></div>
          <div><Users /><b>Participant-aware</b><span>Experiences centred on people.</span></div>
          <div><Target /><b>Commercial clarity</b><span>Costs and outcomes considered.</span></div>
        </div>
      </section>

      <section className="section enquiry" id="enquiry">
        <div className="container enquiry-grid">
          <div>
            <p className="eyebrow light"><i /> START A CONVERSATION</p>
            <h2>Tell us what<br />you want to <em>make possible.</em></h2>
            <p className="enquiry-lede">Share the objective. We’ll start with the right questions, not a generic package.</p>
            <p className="enquiry-small">For incentives, conferences, leadership meets, employee engagement and custom corporate programmes.</p>
          </div>
          <form className="form" action="mailto:info@micego.in" method="post" encType="text/plain">
            <div className="form-top"><span>YOUR BRIEF</span><span>01 / 06</span></div>
            <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
            <div className="form-row">
              <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
              <label>Company<input name="company" autoComplete="organization" placeholder="Company name" required /></label>
            </div>
            <div className="form-row">
              <label>Experience type<select name="experienceType" defaultValue="" required><option value="" disabled>Select a category</option>{experiences.map((experience) => <option key={experience.number}>{experience.title}</option>)}<option>Not sure yet</option></select></label>
              <label>Approx. participants<select name="participants" defaultValue=""><option value="">Select range</option><option>Under 50</option><option>50–150</option><option>151–500</option><option>501–1,000</option><option>1,000+</option></select></label>
            </div>
            <label>What would you like to achieve?<textarea name="brief" rows={3} placeholder="Objective, preferred dates, location, budget range or anything we should know." /></label>
            <button className="btn btn-gold submit" type="submit">Send your brief <ArrowRight size={16} /></button>
            <p className="form-note">Preview form only. Replace this email-based action with a secure, validated MiceGo enquiry API before production launch. Do not publish as a live lead-capture system.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <div><a className="logo footer-logo" href="#top">MICE<span>·</span>GO<sup>™</sup></a><p>Corporate Experiences, Simplified.</p></div>
          <div className="footer-links"><a href="#experiences">Experiences</a><a href="#approach">Our approach</a><a href="#difference">Why MiceGo</a><a href="#enquiry">Contact</a></div>
          <div className="footer-contact"><small>LET’S PLAN SOMETHING MEANINGFUL</small><a href="mailto:info@micego.in">info@micego.in</a><a href="https://micego.in">micego.in</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MiceGo™. All rights reserved.</span><span>A Kolina Group company</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
