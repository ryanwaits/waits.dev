export type Action = {
  name: string;
  shortcut?: string[];
  keywords?: string;
  href?: string;
  section: "Navigation" | "Socials" | "Themes";
  icon?: JSX.Element;
  subtitle?: string;
  perform?: () => void;
  color?: string;
  iconColor?: string;
};

export const actions: Action[] = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
    color: "#EC605A",
    iconColor: "#7C3AED",
  },
  {
    name: "Writing",
    keywords: "writing",
    href: "/writing",
    section: "Navigation",
    color: "#F7D358",
    iconColor: "#7C3AED",
  },
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#7C3AED",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#7C3AED",
  },
];


export const Navigation: Action[] = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
  },
  {
    name: "Writing",
    keywords: "writing",
    href: "/writing",
    section: "Navigation",
  },
];

export const Themes: Action[] = [
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
  },
];
