// src/types/lucide-react.d.ts
declare module 'lucide-react' {
  import { SVGProps } from 'react';

  export type LucideIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;

  export const SomeIcon: LucideIcon; // Replace with actual icon names as needed
  export const AnotherIcon: LucideIcon; // Add other icons here
  export const Moon: LucideIcon;
  export const Sun: LucideIcon;

  // Add more icons as needed...
}