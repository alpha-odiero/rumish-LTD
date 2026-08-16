export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Request Quote", href: "/quote" },
  { label: "Delivery", href: "/delivery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const quickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Request Quote", href: "/quote" },
  { label: "Delivery", href: "/delivery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerCategoryLinks: NavLink[] = [
  { label: "Building Materials", href: "/categories/building-materials" },
  { label: "Roofing", href: "/categories/roofing" },
  { label: "Plumbing", href: "/categories/plumbing" },
  { label: "Electrical", href: "/categories/electrical" },
  { label: "Paints", href: "/categories/paints" },
  { label: "Tools & Equipment", href: "/categories/tools-equipment" },
];
