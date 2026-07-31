export interface NavLink {
  href: string;
  label: string; // अब label है, labelKey नहीं
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];