import type { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  meta: {
    siteTitle: 'BlueprintStudio',
    defaultDescription:
      'BlueprintStudio — Full-Cycle Software & Solutions Development. Unity tools, custom software, and Asset Store products by Sascha Leitner.',
    skipToContent: 'Skip to content',
  },
  nav: [
    { label: 'Assets', href: '/en/assets' },
    { label: 'Portfolio', href: '/en/portfolio' },
    {
      label: 'Documentation',
      href: '/en/docs',
      children: [
        { label: 'SaveSystemPro', href: '/en/docs/savesystempro' },
        { label: 'Project Slimmer', href: '/en/docs/project-slimmer' },
      ],
    },
    { label: 'Contact', href: '/en/contact' },
    { label: 'About', href: '/en/about' },
  ],
  footer: {
    navigation: 'Navigation',
    legal: 'Legal Notice',
    legalLink: 'Legal Notice',
    tagline: 'Full-Cycle Software & Solutions.',
  },
  ui: {
    docsOverview: 'Overview',
    otherDocs: 'More guides',
    openGuide: 'Open guide',
    unityAssetStore: 'Unity Asset Store',
    documentation: 'Documentation',
    repositories: 'Repositories',
    projects: 'Projects',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navMain: 'Main navigation',
    navMobile: 'Mobile navigation',
  },
  studio: {
    name: 'BlueprintStudio',
    owner: 'Sascha Leitner',
    role: 'Full-Cycle Software & Solutions Developer',
    tagline: 'From prototype to production-ready application',
    intro:
      'Under the BlueprintStudio brand, I build tailored software solutions — from Unity tools and applications to feature-rich products. The focus is on structured delivery, clear communication, and efficient AI-assisted development workflows.',
    why:
      'Every project starts with feature analysis and milestone planning. This produces maintainable systems with measurable progress — whether editor extensions, simulations, or Asset Store tools.',
    location: 'Münzbach, Austria',
  },
  about: {
    pageTitle: 'About',
    pageDescription:
      'Sascha Leitner — Full-Cycle Software & Solutions Developer, SAE graduate, BlueprintStudio.',
    label: 'BlueprintStudio',
    educationTitle: 'Education & Qualifications',
    competenciesTitle: 'Competencies',
    servicesTitle: 'Services',
    workflowTitle: 'Working Method',
    summary:
      'As a Full-Cycle Software & Solutions Developer, I deliver customer requirements end-to-end: requirements analysis, rapid prototyping, iterative implementation, and documented handover. Focus areas include Unity development, editor tools, and productive workflow automation.',
    scope:
      'As a Full-Cycle Developer, I focus on technical implementation and system architecture. I do not offer graphic or UI design services, but collaborate seamlessly with artists or designers when needed.',
    education: [
      'Business Start-up Programme (UGP) — ongoing since 07/2026, market entry focus',
      'Diploma Games Programming, SAE Vienna — 2023 to 2024',
      'Electrical Engineering Apprenticeship — 2016 to 2020',
    ],
    focus: [
      'Unity & Unreal Engine — applications, tools, and prototypes',
      'C#, C++, Python, JavaScript & more — AI-assisted adaptation of additional languages',
      'AI-assisted scripting and structured feature integration',
      'Milestone planning, project documentation, and transparent communication',
    ],
    workflow:
      'BlueprintStudio workflow: detailed feature analysis, milestone planning, and iterative delivery. Rapid prototyping visualises ideas early — as a solid foundation for the final product.',
  },
  services: [
    {
      title: 'Custom Software Development',
      description: 'Tailored applications and Unity projects built to specification.',
    },
    {
      title: 'Feature Integration',
      description: 'Precise implementation of specific customer requirements.',
    },
    {
      title: 'BlueprintStudio Workflow',
      description:
        'Structured project delivery through feature analysis, milestone planning, and iterative releases.',
    },
    {
      title: 'Rapid Prototyping',
      description: 'Fast visualisation of ideas as a foundation for the final product.',
    },
  ],
  assetsPage: {
    title: 'Assets',
    description: 'SaveSystemPro and Project Slimmer — Unity Asset Store tools by BlueprintStudio.',
    label: 'Unity Asset Store',
    heading: 'Assets / Shop',
    intro:
      'Current Unity tools on the Asset Store — with technical documentation and clear editor integration. Additional editor utilities and productivity tools are planned and will be released incrementally.',
  },
  assetsIntro:
    'Current Unity tools on the Asset Store — with technical documentation and clear editor integration. Additional editor utilities and productivity tools are planned and will be released incrementally.',
  assets: [
    {
      name: 'SaveSystemPro',
      slug: 'savesystempro',
      description: 'High-performance, modular solution for efficient data persistence in Unity.',
      storeUrl: '#',
      version: 'Unity 2021.3+',
      summary:
        'Flexible save/load system with a clear API, modular serializer architecture, and minimal runtime overhead.',
      features: [
        'Modular serializers for different data types',
        'Asynchronous saving without frame drops',
        'Versioning and migration of saved data',
        'Editor integration for inspecting save slots',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Import the package from the Unity Asset Store. Compatible from Unity 2021.3 LTS. After import, the tool appears under Blueprint → SaveSystemPro in the editor menu.',
        },
        {
          title: 'Quick Start',
          content:
            'Implement ISaveable on your data classes, register serializers via SaveSystemConfig, and call SaveManager.Save(slot) or Load(slot). Async variants avoid frame spikes with large data sets.',
        },
        {
          title: 'Architecture',
          content:
            'Modular serializer pipeline with versioning. Each save slot contains metadata for migration. Editor window for inspection and debugging of serialization errors.',
        },
      ],
    },
    {
      name: 'Project Slimmer',
      slug: 'project-slimmer',
      description:
        'Optimisation tool for automated Unity project cleanup and build size reduction.',
      storeUrl: '#',
      version: 'Unity 2021.3+',
      summary:
        'Analyses unused assets, redundant references, and oversized textures. Automated reports and selective cleanup.',
      features: [
        'Scan for unreferenced assets',
        'Texture and mesh optimisation suggestions',
        'Build size report before release',
        'Safe preview before permanent deletion',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Editor-only package from the Asset Store. After import: open Window → Blueprint → Project Slimmer.',
        },
        {
          title: 'Workflow',
          content:
            'Run a scan first — the tool lists unreferenced assets, large textures, and redundant meshes. Preview mode shows impact before deletion. Build size report recommended before every release.',
        },
        {
          title: 'Safety',
          content:
            'No automatic deletion without confirmation. Backup or version control before batch operations. Ignore lists for assets that are intentionally unreferenced.',
        },
      ],
    },
  ],
  docsPage: {
    title: 'Documentation',
    description: 'Technical documentation for SaveSystemPro and Project Slimmer.',
    label: 'Wiki',
    heading: 'Documentation',
    intro:
      'Technical guides for setup, workflow, and architecture of BlueprintStudio tools. Select a product from the submenu or directly below.',
  },
  portfolioPage: {
    title: 'Portfolio',
    description:
      'BlueprintStudio project portfolio — SaveSystemPro, Project Slimmer, Unity and Unreal projects.',
    label: 'BlueprintStudio',
    heading: 'Portfolio / Projects',
    intro:
      'Selected projects — from Asset Store tools to Unity simulations and Unreal and RPG prototypes. Unity tools SaveSystemPro and Project Slimmer are the first published products; more editor utilities to follow.',
    workflow:
      'Alongside Asset Store products, I document selected projects and code examples transparently — with clear READMEs, traceable commits, and structured architecture.',
  },
  openSource: {
    workflow:
      'Alongside Asset Store products, I document selected projects and code examples transparently — with clear READMEs, traceable commits, and structured architecture.',
  },
  portfolioProjects: [
    {
      name: 'SaveSystemPro',
      type: 'Asset Store',
      description: 'Modular save/load system for Unity — flexible API and editor integration.',
      internalUrl: '/en/assets',
      tags: ['Unity', 'C#', 'Save System'],
    },
    {
      name: 'Project Slimmer',
      type: 'Asset Store',
      description: 'Editor extension for project optimisation and build size reduction.',
      internalUrl: '/en/assets',
      tags: ['Unity', 'Editor Tool', 'Optimization'],
    },
    {
      name: 'OreExtraction',
      type: 'Unity',
      description: 'Mining simulation focused on system design and playable mechanics.',
      tags: ['Unity', 'Simulation', 'Gameplay'],
    },
    {
      name: 'Escape Strategist',
      type: 'Unreal Engine',
      description: 'Visual Unreal implementation — concept development and technical delivery.',
      tags: ['Unreal', 'Visualization', 'C++'],
    },
    {
      name: 'Necrosia',
      type: 'Prototype',
      description: 'RPG concept prototype — early game mechanics and system validation.',
      tags: ['RPG', 'Prototype', 'Game Design'],
    },
    {
      name: 'VariusLP — GitHub',
      type: 'Open Source',
      description: 'Unity scripts, tool experiments, and reference implementations.',
      url: 'https://github.com/VariusLP',
      tags: ['C#', 'Unity', 'GitHub'],
    },
  ],
  contactPage: {
    title: 'Contact',
    description: 'Contact BlueprintStudio — project inquiries and technical questions.',
    label: 'Inquiry',
    heading: 'Contact',
    intro:
      'Technical inquiries about Unity projects, assets, or collaboration. The form sends your message directly by email.',
    emailLabel: 'Email',
    responseLabel: 'Response time',
    responseText: 'Usually within 48 hours',
  },
  contactForm: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending…',
    subject: 'BlueprintStudio Inquiry',
    fromName: 'BlueprintStudio Contact Form',
    hintConfigured:
      'Your message is sent directly by email — no Outlook or other mail client required.',
    hintNotConfigured: 'Form backend not configured yet. Email directly at',
    success: 'Message sent! I usually respond within 48 hours.',
    successRedirect: 'Message sent! I usually respond within 48 hours.',
    error: 'Sending failed. Opening mail client as fallback — or email',
    notConfigured: 'Direct sending not configured. Opening mail client — or email',
  },
  impressumPage: {
    title: 'Legal Notice',
    description:
      'Legal notice and publisher information for BlueprintStudio — Sascha Leitner, Münzbach, Austria.',
    label: 'Legal',
    heading: 'Legal Notice',
    legalBasis: 'Information pursuant to § 5 ECG and § 25 MedienG (Austria)',
    publisher: 'Media owner and publisher',
    tradeName: 'Business name',
    tradeNameNote: '(brand and project name)',
    profession: 'Profession',
    address: 'Address',
    contact: 'Contact',
    emailLabel: 'Email',
    companyRegister: 'Company register',
    companyRegisterText: 'No entry in the Austrian company register.',
    vat: 'VAT ID',
    vatText: 'No VAT identification number.',
    privacy: 'Privacy / Web analytics',
    privacyText:
      'This website uses Umami Analytics — a cookie-free, anonymised traffic measurement. No personal profiles are created and no data is shared with advertising networks. Analytics are accessible only to the operator of this website. Legal basis: legitimate interest pursuant to Art. 6(1)(f) GDPR (technical optimisation of the website).',
    liabilityContent: 'Liability for content',
    liabilityContentText:
      'The content of this website was created with the greatest care. However, no guarantee can be given for the accuracy, completeness, or timeliness of the content.',
    liabilityLinks: 'Liability for links',
    liabilityLinksText:
      'This website contains links to external third-party websites. I have no influence on their content. The respective provider is always responsible for the content of linked pages.',
  },
  home: {
    ctaAssets: 'Unity Assets',
    ctaContact: 'Request a project',
  },
};
