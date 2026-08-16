import {
  Boxes,
  ClipboardList,
  DoorOpen,
  Droplet,
  Fence,
  GitBranch,
  Hammer,
  HardHat,
  Layers,
  LayoutGrid,
  Package,
  Paintbrush,
  Search,
  TreePine,
  Truck,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  Layers,
  Warehouse,
  Droplet,
  Zap,
  Paintbrush,
  Hammer,
  TreePine,
  Fence,
  DoorOpen,
  LayoutGrid,
  GitBranch,
  Package,
};

export const serviceIcons: Record<string, LucideIcon> = {
  Layers,
  Boxes,
  HardHat,
  ClipboardList,
  Search,
  Truck,
};

interface CategoryIconProps {
  name: string;
  className?: string;
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const Icon = categoryIcons[name] ?? Package;
  return <Icon className={className} aria-hidden="true" />;
}

export function ServiceIcon({ name, className }: CategoryIconProps) {
  const Icon = serviceIcons[name] ?? Package;
  return <Icon className={className} aria-hidden="true" />;
}
