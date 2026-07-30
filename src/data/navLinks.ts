export interface NavLink {
  href: string;
  labelKey: string; // Translation key
}

export const navLinks: NavLink[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/projects", labelKey: "nav.projects" },
  { href: "/pricing", labelKey: "nav.pricing" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/careers", labelKey: "nav.careers" },
  { href: "/contact", labelKey: "nav.contact" },
];
