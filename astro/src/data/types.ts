import type { ImageMetadata } from 'astro';

export type IconName =
  | 'arrow-down'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'whatsapp'
  | 'linkedin'
  | 'github'
  | 'scholar'
  | 'download'
  | 'calendar'
  | 'phone'
  | 'mail'
  | 'award'
  | 'book'
  | 'globe'
  | 'cpu'
  | 'code'
  | 'bar-chart'
  | 'leaf';

export interface LinkButton {
  text: string;
  url: string;
  icon?: IconName;
}

/** A primary link shown as a numbered row in the hero link-hub */
export interface HeroLink {
  label: string;
  url: string;
  icon: IconName;
  /** Emphasize (e.g. CV / contact) */
  primary?: boolean;
  /** Opens in a new tab with rel=noopener (false for mailto:/tel:) */
  external?: boolean;
}

export interface ShowcaseData {
  /** h1 line 1 */
  title: string;
  /** h1 line 2 (light weight) */
  subtitle: string;
  description: string;
  /** Short location line under the name, e.g. "Brussels, Belgium" */
  location: string;
  /** Consolidated primary links rendered as the link-hub */
  links: HeroLink[];
}

export interface FocusItem {
  icon: IconName;
  label: string;
}

export interface AboutData {
  title: string;
  /** Trusted HTML narrative paragraph(s) (author-owned content) */
  contentHtml: string;
  /** Right-rail "focus areas" list shown beside the narrative (md+) */
  focusTitle: string;
  focus: FocusItem[];
}

export interface EducationItem {
  school: string;
  year: string;
  degree: string;
  /** e.g. "Cum Laude" */
  badge?: string;
  /** Trusted HTML note (thesis title + link) */
  noteHtml?: string;
}

export interface PublicationItem {
  title: string;
  organization: string;
  year: string;
  /** Trusted HTML description */
  descriptionHtml: string;
  link: { url: string; text: string };
  /** Optional secondary link (e.g. Google Scholar) */
  link2?: { url: string; text: string };
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  /** Key into companyLogos image map */
  logo?: string;
}

export interface ExperienceData {
  title: string;
  description: string;
  badges: string[];
  linkedin: LinkButton;
  resume: LinkButton;
  items: ExperienceItem[];
}

export interface ClientLogo {
  /** Key into clientLogos image map */
  image: string;
  alt: string;
  /** Set to true for logos that are already light/white (skips CSS invert) */
  noInvert?: boolean;
}

export interface WorkItem {
  title: string;
  stack: string[];
  /** Trusted HTML description */
  descriptionHtml: string;
  button?: LinkButton;
  /** Key into workImages image map */
  image: string;
  /** Optional extra captures shown as a navigable lightbox gallery (featured rows). The card image is prepended automatically. */
  gallery?: { image: string; alt: string }[];
  /** Text on the left, image on the right (md+) — used by featured rows only */
  isEven: boolean;
  /** Shown as a large featured row; otherwise rendered in the compact grid */
  featured?: boolean;
}

export interface ContactData {
  title: string;
  subtitle: string;
  form: {
    action: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitText: string;
  };
  scheduleCallText: string;
}

export interface HomepageData {
  head: {
    title: string;
    description: string;
  };
  nav: { label: string; href: string }[];
  showcase: ShowcaseData;
  about: AboutData;
  techStack: {
    description: string;
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  experience: ExperienceData;
  publications: {
    title: string;
    items: PublicationItem[];
  };
  portfolio: {
    title: string;
    clients: ClientLogo[];
    works: WorkItem[];
  };
  contact: ContactData;
  footer: {
    copyright: string;
    carbonText: string;
    nav: { label: string; href: string }[];
  };
}

export interface ImageMap {
  [key: string]: ImageMetadata;
}
