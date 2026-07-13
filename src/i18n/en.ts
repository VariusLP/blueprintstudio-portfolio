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
      description:
        'Production-ready save/load system for Unity games — multi-slot, backups, profiles, and runtime spawns. v1.0.0 Asset Store package.',
      storeUrl: '#',
      version: 'v1.0.0 · Unity 2021 LTS – Unity 6',
      summary:
        'A central SaveManager instance orchestrates saving, loading, backups, profiles, and runtime spawns. SaveableEntity + ISaveable, serializer registry, safe-write pipeline, and comprehensive editor tools.',
      features: [
        'Multi-slot, autosave, quicksave — manifest, thumbnails, retention & continue policies',
        'Safe write pipeline (temp → replace) + rotating backups (.bak1–.bak3) with fallback on load',
        'Multi-scene, multi-profile, runtime spawn persistence via SaveableEntity & ISaveable',
        'Extensible serializer registry, pipeline hooks, validators — 3 demo scenes & UI samples',
      ],
      sections: [
        {
          title: 'Installation & compatibility',
          content:
            'Unity Asset Store package (v1.0.0, copyright 2026). Compatible with Unity 2021 LTS, 2022 LTS, and Unity 6 (6000). Namespace BlueprintStudio.SaveSystemPro, assembly BlueprintStudio.SaveSystemPro — no external package dependencies. Project structure under Assets/BlueprintStudio/SaveSystemPro/ (Runtime, Editor, Samples, Documentation).',
        },
        {
          title: 'Quick start',
          content:
            'Add a SaveManager to your scene (one instance per scene). Attach SaveableEntity to all persistable objects; optionally add SaveTransform for position, rotation, and scale. Implement custom logic via ISaveable (CaptureState / RestoreState). For runtime spawns: RuntimeSpawned + prefab mapping on the SaveManager. API: SaveManager.Instance.SetActiveSlot("slot1"); SaveManager.Instance.Save(); SaveManager.Instance.Load(); — plus HasSave(), GetLatestSlot(), and additional helpers.',
        },
        {
          title: 'Architecture',
          content:
            'The SaveManager is the central save authority: slots, autosave, backups, profiles, export/import, and metadata. SaveableEntity marks objects with a unique GUID; SaveScope controls storage location (Scene, Global, PlayerData, PersistentRuntime). Serializer system via ISaveStateSerializer with built-in types (bool, int, float, string, Vector2/3, quaternion, TransformState) — registry auto-generated by SerializerRegistryGenerator. Extensible through ISaveValidator, IAutosaveGuard, ISavePipelineHook, ISaveEntityFilter, and ISaveStorageProvider. Optional GZip compression and local encryption.',
        },
        {
          title: 'Editor tools & demos',
          content:
            'Editor: SaveManagerEditor (custom inspector, slot management, thumbnails), SaveSystemProSaveBrowserWindow, SaveSystemProDiagnosticsWindow, SerializerRegistryGenerator, and SaveSystemAutoSetup. Three demo scenes: Basic Demo (3 slots, player/coins/health), Runtime Spawn Demo (persistent prefab spawns), and Advanced Safety Demo (backup recovery). Additional UI samples: SaveLoadMenuUI, SaveLoadOverlayUI, SaveSlotPreviewDemoUI.',
        },
      ],
    },
    {
      name: 'Project Slimmer',
      slug: 'project-slimmer',
      description:
        'Editor tool for project optimisation — find large files, detect unused assets, clean up safely. v1.0, Asset Store ready.',
      storeUrl: '#',
      version: 'v1.0 · Unity 2021.3+',
      summary:
        'Editor window at Tools → Project Slimmer with two tabs: the 20 largest files under Assets/ and potentially unused assets via dependency graph. Confidence ratings, report export, and safe batch deletion.',
      features: [
        'Top 20 Largest Files tab — scan under Assets/, colour-coded (>10 MB orange, >50 MB red), ping in Project window',
        'Potentially Unused Assets tab — dependency graph from scenes, prefabs, and ScriptableObjects',
        'Confidence system High / Medium / Low, plus filter, sort, search, and report export',
        'Safe batch deletion in groups of 25, protection for critical folders (Resources, StreamingAssets, URP/HDRP)',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Editor-only package for the Unity Asset Store (v1.0, release candidate). After import: open Tools → Project Slimmer. Demo scene at Assets/BlueprintStudio/ProjectSlimmer/DemoScene.unity.',
        },
        {
          title: 'Interface & workflow',
          content:
            'Tab 1 — Top 20 Largest Files: Scans all files under Assets/ and lists the 20 largest, colour-coded (>10 MB orange, >50 MB red). Click a filename to ping it in the Project window. Tab 2 — Potentially Unused Assets: Builds a dependency graph from scenes, prefabs, and ScriptableObjects and lists assets not referenced in that graph. Confidence system (High / Medium / Low) with heuristics, plus filter, sort, search, and report export.',
        },
        {
          title: 'Safety',
          content:
            'Deletion runs safely in batches of 25 files via EditorApplication.delayCall. Critical folders are protected — including Resources, StreamingAssets, and URP/HDRP settings. Nothing is deleted without confirmation; backup or version control recommended before batch operations.',
        },
        {
          title: 'Architecture',
          content:
            'IMGUI (classic EditorWindow.OnGUI), namespace BlueprintStudio.ProjectSlimmer, dedicated assembly definition BlueprintStudio.ProjectSlimmer.Editor.asmdef. Around 1,550 lines of C#, extensively commented.',
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
      description:
        'Production-ready save/load system — multi-slot, backups, profiles, runtime spawns, and editor tools (v1.0.0).',
      internalUrl: '/en/assets',
      tags: ['Unity', 'C#', 'Save System'],
    },
    {
      name: 'Project Slimmer',
      type: 'Asset Store',
      description:
        'Editor extension — find large files, detect unused assets via dependency graph, clean up safely (v1.0).',
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
