export const SW_TABS = [
  { cat: "web", label: "Websites", layout: "wide", items: [
    ["Corporate websites", "Web design & development", null], ["Website redesigns", "UX and conversion", null], ["Landing pages", "Campaign and product launches", null],
  ]},
  { cat: "apps", label: "Web Apps", layout: "wide", items: [
    ["Custom web applications", "Product development", null], ["SaaS and MVPs", "From idea to launch", null], ["Portals and dashboards", "Business software", null],
  ]},
  { cat: "ecommerce", label: "Ecommerce", layout: "wide", items: [
    ["Online stores", "Ecommerce websites", null], ["Headless commerce", "Custom integrations", null], ["Store migrations", "Platform transitions", null],
  ]},
  { cat: "seo", label: "SEO & AI Search", layout: "wide", items: [
    ["Technical SEO", "Search foundations", null], ["Content strategy", "Organic discovery", null], ["Answer engine optimization", "AI search visibility", null],
  ]},
  { cat: "teams", label: "Product Teams", layout: "wide", items: [
    ["Dedicated team", "Extended delivery capacity", null], ["Team extension", "Work alongside your team", null], ["Product consulting", "Roadmaps and prioritization", null],
  ]},
  { cat: "care", label: "Ongoing Support", layout: "wide", items: [
    ["Website maintenance", "Post-launch care", null], ["Application support", "Ongoing improvements", null], ["Performance reviews", "Quality and speed", null],
  ]},
].map((tab, tabIndex) => ({ ...tab, items: tab.items.map(([title, client], i) => ({ title, client, img: `/${(((tabIndex * tab.items.length) + i) % 6) + 1}.jpg`, alt: title, corner: { w: 2, h: 2, cells: [[1, 0], [0, 1], [1, 1]] } })) }));
