export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface AuthorLink {
  name: string;
  href: string;
  icon?: string;
}

export interface SiteConfig {
  lang: string;
  title: string;
  description: string;
  author: string;
  authorUrl: string;
  authorBio: string;
  authorDetails: string;
  authorLocation: string;
  avatar: string;
  authorLinks?: AuthorLink[];
  url: string;
  postsPerPage: number;
  nav: NavItem[];
  giscus: {
    enabled: boolean;
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    theme: string;
    darkTheme: string;
    lang: string;
  };
}

export function defineConfig(config: SiteConfig): SiteConfig {
  return config;
}

export default defineConfig({
  lang: "en",
  title: "雑魚君’s Blog",
  description: "Notes on technology, language, and everyday observations.",
  author: "雑魚君",
  authorUrl: "https://github.com/zakokun",
  authorBio: "Senior backend engineer focused on Go, distributed systems, and system design.",
  authorDetails:
    "I am a senior backend engineer with 10 years of experience building large-scale production systems.\n\nI enjoy backend architecture and system design, especially distributed systems, data platforms, performance, and reliability.",
  authorLocation: "China",
  avatar: "/avatar.jpeg",
  authorLinks: [
    {
      name: "GitHub",
      href: "https://github.com/zakokun",
      icon: "lucide:github",
    },
    {
      name: "X / Twitter",
      href: "https://x.com/_evanszhang",
      icon: "lucide:twitter",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hongwen-zhang",
      icon: "lucide:linkedin",
    },
    { name: "Email", href: "mailto:blog@wen.moe", icon: "lucide:mail" },
  ],
  url: "https://blog.zakokun.com",
  postsPerPage: 6,
  nav: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "Blog", href: "/blog", icon: "lucide:book-open" },
    { name: "About", href: "/about", icon: "lucide:user" },
  ],
  giscus: {
    enabled: false,
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
    theme: "light",
    darkTheme: "dark",
    lang: "en",
  },
});
