# MiceGo™ Website — V1.0

**Positioning:** Corporate Experiences, Simplified.  
**Target domain:** `micego.in`

Premium B2B corporate-experience website built with Next.js, React and TypeScript. This repository is the source of truth for the public website.

## Business division and architecture boundaries

MiceGo operates two distinct business divisions: **MiceGo Incentives** and **MiceGo PCO (Professional Conference Organising)**. They share the MiceGo parent brand and approved common platform foundations, but retain distinct business ownership, workflows, commercial data, access grants, reporting and release requirements where applicable. A user granted access to one division does not automatically receive access to the other.

Kolina Core owns group-wide architecture and shared platform governance. MiceGo owns its division-specific product and operational implementation. Vertex Trips is a separate outbound travel brand and does not own MICE business capabilities. QIJ may provide contracted inbound destination/ground services to a MiceGo programme or conference without becoming the programme/PCO owner.

## Local development
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Frozen brand rules
- Premium corporate/editorial design using MiceGo navy, champagne and ivory.
- No airplane, globe, map, pin, mountain, suitcase, route or generic travel-agency imagery.
- Core process: Discover → Design → Source → Manage → Deliver → Measure.
- Website and MiceGo operating platform must connect through a controlled, versioned API boundary.
- Enquiry form must use a server-side validated API before production; do not rely on mailto as the live lead capture system.

## Before production
Add final approved logo/favicon, privacy/legal content, sitemap/robots, social preview, accessibility/security tests, production build checks, DNS/TLS and deployment configuration.
