"use client";

import {
  BarChart3,
  Target,
  Search,
  Users,
  Settings,
  RefreshCcw,
  ShoppingCart,
  Shield,
  Brain,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import { IconName } from "@/data/services";

const iconMap: Record<IconName, LucideIcon> = {
  BarChart3,
  Target,
  Search,
  Users,
  Settings,
  RefreshCcw,
  ShoppingCart,
  Shield,
  Brain,
  GraduationCap,
};

interface ServiceIconProps {
  name: IconName;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
