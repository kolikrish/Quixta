// Six service areas, laid out as the existing animated six-piece grid.
const SEAM = 6;
const COLORS = ["#FE712B", "#FFFFFF", "#000000"];
const cell = (col, row) => [col * (100 + SEAM), row * (100 + SEAM), 100, 100, COLORS[(col + row) % COLORS.length]];
export const CUBE_W = 4 * 100 + 3 * SEAM;
export const CUBE_PX = 280;
export const PIECES = [
  { lever: "Web Design", copy: "Corporate websites, redesigns, landing pages, ecommerce, multilingual sites and startup websites, built around business goals.", cells: [cell(0, 0), cell(0, 1), cell(1, 1)] },
  { lever: "Web Development", copy: "Custom website development with conversion focused layouts, SEO foundations, fast loading and a CMS your team can update.", cells: [cell(1, 0), cell(2, 0)] },
  { lever: "Web Applications", copy: "Custom portals, dashboards, booking systems, SaaS products, MVPs, ERP and CRM software for your workflows.", cells: [cell(3, 0), cell(2, 1), cell(3, 1)] },
  { lever: "Product Teams", copy: "Product development from idea to launch, dedicated teams and team extension for software delivery.", cells: [cell(0, 2), cell(1, 2), cell(0, 3), cell(1, 3)] },
  { lever: "SEO & AI Search", copy: "Technical and local SEO, content strategy, link building, answer engine optimization and visibility in AI generated answers.", cells: [cell(2, 2), cell(2, 3), cell(3, 3)] },
  { lever: "Support & Care", copy: "Website and application maintenance, ongoing improvements and post launch technical support.", cells: [cell(3, 2)] },
];
