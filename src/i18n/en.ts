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
    { label: 'About me', href: '/en/about' },
  ],
  footer: {
    navigation: 'Navigation',
    legal: 'Legal Notice',
    legalLink: 'Legal Notice',
    tagline: 'Full-Cycle Software & Solutions.',
  },
  ui: {
    docsOverview: 'Overview',
    otherDocs: 'Other guides',
    openGuide: 'Open guide',
    unityAssetStore: 'Unity Asset Store',
    documentation: 'Documentation',
    repositories: 'Repositories',
    projects: 'Projects',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navMain: 'Main navigation',
    navMobile: 'Mobile navigation',
    languageSelection: 'Language',
  },
  studio: {
    name: 'BlueprintStudio',
    owner: 'Sascha Leitner',
    role: 'Full-Cycle Software & Solutions Developer',
    tagline: 'From prototype to production-ready applications',
    intro:
      'Under the BlueprintStudio brand, I build tailored software solutions — from Unity tools and applications to feature-rich products. I focus on structured delivery, clear communication, and efficient AI-assisted development workflows.',
    why:
      'Every project starts with feature analysis and milestone planning. That way you get maintainable systems with measurable progress — whether it is an editor extension, a simulation, or an Asset Store tool.',
    location: 'Münzbach, Austria',
  },
  about: {
    pageTitle: 'About me',
    pageDescription:
      'Sascha Leitner — Full-Cycle Software & Solutions Developer, SAE Vienna graduate, BlueprintStudio.',
    label: 'BlueprintStudio',
    educationTitle: 'Education & qualifications',
    competenciesTitle: 'Skills & expertise',
    servicesTitle: 'Services',
    workflowTitle: 'How I work',
    summary:
      'As a Full-Cycle Software & Solutions Developer, I take client requirements from start to finish: requirements analysis, rapid prototyping, iterative implementation, and documented handover. My focus is Unity development, editor tools, and workflow automation that improves day-to-day productivity.',
    scope:
      'I focus on technical implementation and system architecture. I do not offer graphic or UI design services, but I work closely with artists and designers whenever a project requires it.',
    education: [
      'Start-up Program (UGP) — ongoing since 07/2026, focused on market entry',
      'Diploma in Games Programming, SAE Vienna — 2023 to 2024',
      'Electrical engineering apprenticeship — 2016 to 2020',
    ],
    focus: [
      'Unity & Unreal Engine — applications, tools, and prototypes',
      'C#, C++, Python, JavaScript & more — quick ramp-up on additional languages with AI support',
      'AI-assisted scripting and structured feature integration',
      'Milestone planning, project documentation, and clear, transparent communication',
    ],
    workflow:
      'BlueprintStudio workflow: detailed feature analysis, milestone planning, and iterative delivery. Rapid prototyping helps validate ideas early and gives the final product a solid foundation.',
  },
  services: [
    {
      title: 'Custom software development',
      description: 'Applications and Unity projects built to your requirements.',
    },
    {
      title: 'Feature integration',
      description: 'Targeted implementation of specific client features and requirements.',
    },
    {
      title: 'BlueprintStudio workflow',
      description:
        'Structured project delivery through feature analysis, milestone planning, and iterative releases.',
    },
    {
      title: 'Rapid prototyping',
      description: 'Quick visual prototypes to validate ideas before building the final product.',
    },
  ],
  assetsPage: {
    title: 'Assets',
    description: 'SaveSystemPro and Project Slimmer — Unity Asset Store tools by BlueprintStudio.',
    label: 'Unity Asset Store',
    heading: 'Assets / Shop',
    intro:
      'Unity tools currently available on the Asset Store — each with technical documentation and clear editor integration. More editor utilities and productivity tools are in development and will be released step by step.',
  },
  assetsIntro:
    'Unity tools currently available on the Asset Store — each with technical documentation and clear editor integration. More editor utilities and productivity tools are in development and will be released step by step.',
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
            'Implement ISaveable on your data classes, register serializers through SaveSystemConfig, and call SaveManager.Save(slot) or Load(slot). The async variants prevent frame spikes when saving or loading large data sets.',
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
            'Run a scan first — the tool lists unreferenced assets, large textures, and redundant meshes. Preview mode shows the impact before anything is deleted. A build size report is recommended before every release.',
        },
        {
          title: 'Safety',
          content:
            'Nothing is deleted automatically without your confirmation. Create a backup or use version control before batch operations. Ignore lists let you keep assets that are intentionally unreferenced.',
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
      'Technical guides for setup, workflow, and architecture of BlueprintStudio tools. Pick a product from the menu above or choose one below.',
  },
  portfolioPage: {
    title: 'Portfolio',
    description:
      'BlueprintStudio project portfolio — SaveSystemPro, Project Slimmer, Unity and Unreal projects.',
    label: 'BlueprintStudio',
    heading: 'Portfolio / Projects',
    intro:
      'Selected projects — from Asset Store tools to Unity simulations and Unreal and RPG prototypes. SaveSystemPro and Project Slimmer were the first published Unity tools; more editor utilities are on the way.',
    workflow:
      'Alongside my Asset Store products, I share selected projects and code examples openly — with clear READMEs, a transparent commit history, and well-structured architecture.',
  },
  openSource: {
    workflow:
      'Alongside my Asset Store products, I share selected projects and code examples openly — with clear READMEs, a transparent commit history, and well-structured architecture.',
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
      description: 'Visual Unreal project — concept development and technical implementation.',
      tags: ['Unreal', 'Visualization', 'C++'],
    },
    {
      name: 'Necrosia',
      type: 'Prototype',
      description: 'RPG concept prototype — early game mechanics and system validation.',
      tags: ['RPG', 'Prototype', 'Game Design'],
    },
    {
      name: 'BlueprintStudioDev — GitHub',
      type: 'Open Source',
      description: 'Unity scripts, tool experiments, and reference implementations.',
      url: 'https://github.com/BlueprintStudioDev',
      tags: ['C#', 'Unity', 'GitHub'],
    },
  ],
  contactPage: {
    title: 'Contact',
    description: 'Contact BlueprintStudio — project inquiries and technical questions.',
    label: 'Get in touch',
    heading: 'Contact',
    intro:
      'Questions about Unity projects, assets, or working together? Use the form below — your message is sent directly by email.',
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
    subject: 'BlueprintStudio inquiry',
    fromName: 'BlueprintStudio contact form',
    hintConfigured:
      'Your message is delivered directly by email — no Outlook or other mail client required.',
    hintNotConfigured: 'The form is not set up yet. Please email me at',
    success: 'Message sent! I will usually get back to you within 48 hours.',
    successRedirect: 'Message sent! I will usually get back to you within 48 hours.',
    error: 'Could not send your message. Your email app will open as a fallback — or email me at',
    notConfigured: 'Direct sending is not set up yet. Your email app will open — or email me at',
  },
  impressumPage: {
    title: 'Legal Notice',
    description:
      'Legal notice and publisher information for BlueprintStudio — Sascha Leitner, Münzbach, Austria.',
    label: 'Legal',
    heading: 'Legal Notice',
    legalBasis:
      'Legal information according to Austrian law (ECG / MedienG). Details pursuant to § 5 ECG and § 25 MedienG.',
    publisher: 'Owner and publisher',
    tradeName: 'Trading name',
    tradeNameNote: '(brand and project name)',
    profession: 'Profession',
    address: 'Address',
    contact: 'Contact',
    emailLabel: 'Email',
    companyRegister: 'Company register',
    companyRegisterText: 'Not registered in the Austrian company register.',
    vat: 'VAT ID',
    vatText: 'Not applicable.',
    privacy: 'Privacy / Web analytics',
    privacyText:
      'This website uses Umami Analytics — a cookie-free, anonymised traffic measurement. No personal profiles are created, and no data is shared with third-party advertising networks. Analytics are accessible only to the operator of this website. Legal basis: legitimate interest pursuant to Art. 6(1)(f) GDPR (technical optimisation of the website).',
    liabilityContent: 'Liability for content',
    liabilityContentText:
      'The content of this website has been prepared with the greatest possible care. However, no guarantee can be given for the accuracy, completeness, or timeliness of the information provided.',
    liabilityLinks: 'Liability for links',
    liabilityLinksText:
      'This website contains links to external third-party websites. I have no control over their content. The respective provider is always responsible for the content of linked pages.',
  },
  home: {
    ctaAssets: 'Unity assets',
    ctaContact: 'Discuss your project',
  },
};
