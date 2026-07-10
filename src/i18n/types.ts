export type Lang = 'de' | 'en';

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type DocSection = {
  title: string;
  content: string;
};

export type AssetItem = {
  name: string;
  slug: string;
  description: string;
  storeUrl: string;
  version: string;
  summary: string;
  features: string[];
  sections: DocSection[];
};

export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  url?: string;
  internalUrl?: string;
};

export type Translations = {
  lang: Lang;
  meta: {
    siteTitle: string;
    defaultDescription: string;
    skipToContent: string;
  };
  nav: NavItem[];
  footer: {
    navigation: string;
    legal: string;
    legalLink: string;
    tagline: string;
  };
  ui: {
    docsOverview: string;
    otherDocs: string;
    openGuide: string;
    unityAssetStore: string;
    documentation: string;
    repositories: string;
    projects: string;
    menuOpen: string;
    menuClose: string;
    navMain: string;
    navMobile: string;
  };
  studio: {
    name: string;
    owner: string;
    role: string;
    tagline: string;
    intro: string;
    why: string;
    location: string;
  };
  about: {
    pageTitle: string;
    pageDescription: string;
    label: string;
    educationTitle: string;
    competenciesTitle: string;
    servicesTitle: string;
    workflowTitle: string;
    summary: string;
    scope: string;
    education: string[];
    focus: string[];
    workflow: string;
  };
  services: { title: string; description: string }[];
  assetsPage: {
    title: string;
    description: string;
    label: string;
    heading: string;
    intro: string;
  };
  assetsIntro: string;
  assets: AssetItem[];
  docsPage: {
    title: string;
    description: string;
    label: string;
    heading: string;
    intro: string;
  };
  portfolioPage: {
    title: string;
    description: string;
    label: string;
    heading: string;
    intro: string;
    workflow: string;
  };
  openSource: {
    workflow: string;
  };
  portfolioProjects: PortfolioProject[];
  contactPage: {
    title: string;
    description: string;
    label: string;
    heading: string;
    intro: string;
    emailLabel: string;
    responseLabel: string;
    responseText: string;
  };
  contactForm: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    subject: string;
    fromName: string;
    hintConfigured: string;
    hintNotConfigured: string;
    success: string;
    successRedirect: string;
    error: string;
    notConfigured: string;
  };
  impressumPage: {
    title: string;
    description: string;
    label: string;
    heading: string;
    legalBasis: string;
    publisher: string;
    tradeName: string;
    tradeNameNote: string;
    profession: string;
    address: string;
    contact: string;
    emailLabel: string;
    companyRegister: string;
    companyRegisterText: string;
    vat: string;
    vatText: string;
    privacy: string;
    privacyText: string;
    liabilityContent: string;
    liabilityContentText: string;
    liabilityLinks: string;
    liabilityLinksText: string;
  };
  home: {
    ctaAssets: string;
    ctaContact: string;
  };
};
