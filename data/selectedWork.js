export const SW_TABS = [
  { cat: "web", label: "Websites", layout: "wide", items: [
    ["Corporate websites", "Web design & development"], ["Website redesigns", "UX and conversion"], ["Landing pages", "Campaign and product launches"],
  ]},
  { cat: "apps", label: "Web Apps", layout: "wide", items: [
    ["Custom web applications", "Product development"], ["SaaS and MVPs", "From idea to launch"], ["Portals and dashboards", "Business software"],
  ]},
  { cat: "ecommerce", label: "Ecommerce", layout: "wide", items: [
    ["Online stores", "Ecommerce websites"], ["Headless commerce", "Custom integrations"], ["Store migrations", "Platform transitions"],
  ]},
  { cat: "seo", label: "SEO & AI Search", layout: "wide", items: [
    ["Technical SEO", "Search foundations"], ["Content strategy", "Organic discovery"], ["Answer engine optimization", "AI search visibility"],
  ]},
  { cat: "teams", label: "Product Teams", layout: "wide", items: [
    ["Dedicated team", "Extended delivery capacity"], ["Team extension", "Work alongside your team"], ["Product consulting", "Roadmaps and prioritization"],
  ]},
  { cat: "care", label: "Ongoing Support", layout: "wide", items: [
    ["Website maintenance", "Post-launch care"], ["Application support", "Ongoing improvements"], ["Performance reviews", "Quality and speed"],
  ]},
].map((tab, tabIndex) => ({ ...tab, items: tab.items.map(([title, client], i) => ({ title, client, img: `/${(((tabIndex * tab.items.length) + i) % 6) + 1}.jpg`, alt: title, corner: { w: 2, h: 2, cells: [[1, 0], [0, 1], [1, 1]] } })) }));
