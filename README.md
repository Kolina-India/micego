# MICEGO™ Website — V1.0

**Positioning:** MICEGO™ — Corporate Experiences, Simplified.  
**Brand promise:** Where Business Meets Experience.  
**Target domain:** `micego.in`  
**Current status:** Website source in feature branch; not confirmed deployed to production.

## Local development

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- Responsive Next.js App Router website using React and TypeScript.
- Premium navy, champagne and ivory design language.
- Wordmark asset reads **MICEGO** without the separator dot.
- Corporate experience categories covering incentive journeys, meetings/conferences, leadership offsites, employee engagement, corporate events/launches and dealer/channel programmes.
- MICEGO operating method: Discover → Design → Source → Manage → Deliver → Measure.
- Clear “MICEGO vs Traditional Agencies” positioning around programme-wide coordination, accountability and commercial discipline.
- Founder experience and operating principles section. The founder's previous industry experience is described separately from MICEGO's own delivery record.
- More qualified enquiry brief fields: experience type, group size, destination, timing, indicative budget, buyer role and objectives.
- SEO metadata, canonical URL, Open Graph/Twitter summaries, `sitemap.xml` and `robots.txt`.
- Corporate event imagery only; no airplane, globe, map, pin, mountain, suitcase, route or generic travel-agency imagery.

## Important production gaps

1. **Enquiry capture:** The current form is a temporary email-based fallback. It does not persist leads in a database or guarantee submission. Before launch, replace it with a server-side validated, spam-protected enquiry API integrated through a controlled, versioned API boundary to the MICEGO platform/CRM.
2. **Logo master:** The in-repo SVG is a lightweight website wordmark adaptation. Replace it with the final approved production vector if the master artwork differs; generate matching favicon and social-share assets.
3. **Privacy and legal:** Approve privacy notice, terms, data-retention language, consent text and company contact details before collecting personal information.
4. **Images:** Confirm rights and production use for image assets. Prefer self-hosted, optimized, approved images rather than relying on remote image URLs.
5. **Quality gates:** Run `npm run typecheck`, `npm run lint`, and `npm run build`; complete keyboard/accessibility, responsive, metadata, form, security and performance checks.
6. **Deployment:** Configure production hosting, environment variables, DNS/TLS, redirects, monitoring and rollback. Verify domain ownership and production route configuration.
7. **Credibility:** Publish genuine MICEGO case studies and testimonials only after delivery and client approval. Do not represent historical projects delivered by other companies as MICEGO's own work.

## Frozen brand and architecture rules

- Do not redesign the approved MICEGO identity without explicit approval. Any website adaptation must use the single-word spelling **MICEGO**; no separator dot in the wordmark.
- Premium corporate/editorial presentation; business-experience photography, never generic travel clichés.
- Operating philosophy: Discover → Design → Source → Manage → Deliver → Measure.
- The public website and MICEGO operating platform share the brand but connect through a controlled, versioned API boundary.
- GitHub is the engineering system of record.
- No Odoo. The accounting boundary is TallyPrime/Tally API through the platform's controlled adapter.
