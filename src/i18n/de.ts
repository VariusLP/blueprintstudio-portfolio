import type { Translations } from './types';

export const de: Translations = {
  lang: 'de',
  meta: {
    siteTitle: 'BlueprintStudio',
    defaultDescription:
      'BlueprintStudio — Full-Cycle Software & Solutions Development. Unity-Tools, maßgeschneiderte Software und Asset-Store-Produkte von Sascha Leitner.',
    skipToContent: 'Zum Inhalt springen',
  },
  nav: [
    { label: 'Assets', href: '/assets' },
    { label: 'Portfolio', href: '/portfolio' },
    {
      label: 'Dokumentation',
      href: '/docs',
      children: [
        { label: 'SaveSystemPro', href: '/docs/savesystempro' },
        { label: 'Project Slimmer', href: '/docs/project-slimmer' },
      ],
    },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Über mich', href: '/ueber-mich' },
  ],
  footer: {
    navigation: 'Navigation',
    legal: 'Impressum',
    legalLink: 'Impressum',
    tagline: 'Full-Cycle Software & Solutions.',
  },
  ui: {
    docsOverview: 'Übersicht',
    otherDocs: 'Weitere Anleitungen',
    openGuide: 'Anleitung öffnen',
    unityAssetStore: 'Unity Asset Store',
    documentation: 'Dokumentation',
    repositories: 'Repositories',
    projects: 'Projekte',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    navMain: 'Hauptnavigation',
    navMobile: 'Mobile Navigation',
  },
  studio: {
    name: 'BlueprintStudio',
    owner: 'Sascha Leitner',
    role: 'Full-Cycle Software & Solutions Developer',
    tagline: 'Vom Prototyp bis zur fertigen Applikation',
    intro:
      'Unter der Marke BlueprintStudio entwickle ich maßgeschneiderte Softwarelösungen — von Unity-Tools und Applikationen bis hin zu feature-reichen Produkten. Der Fokus liegt auf strukturierter Umsetzung, klarer Kommunikation und effizienten, KI-gestützten Entwicklungs-Workflows.',
    why:
      'Jedes Projekt beginnt mit Feature-Analyse und Meilenstein-Planung. So entstehen wartbare Systeme mit messbarem Fortschritt — ob Editor-Extension, Simulation oder Asset-Store-Tool.',
    location: 'Münzbach, Österreich',
  },
  about: {
    pageTitle: 'Über mich',
    pageDescription:
      'Sascha Leitner — Full-Cycle Software & Solutions Developer, SAE-Absolvent, BlueprintStudio.',
    label: 'BlueprintStudio',
    educationTitle: 'Ausbildung & Qualifikationen',
    competenciesTitle: 'Kompetenzen',
    servicesTitle: 'Dienstleistungen',
    workflowTitle: 'Arbeitsweise',
    summary:
      'Als Full-Cycle Software & Solutions Developer realisiere ich Kundenanforderungen end-to-end: Anforderungsanalyse, Rapid Prototyping, iterative Umsetzung und dokumentierte Übergabe. Schwerpunkte sind Unity-Entwicklung, Editor-Tools und produktive Workflow-Automatisierung.',
    scope:
      'Ich konzentriere mich als Full-Cycle Developer auf die technische Realisierung und Systemarchitektur. Ich biete keine Grafik- oder UI-Design-Leistungen an, arbeite aber bei Bedarf nahtlos mit Grafikern oder Designern zusammen.',
    education: [
      'Unternehmensgründungsprogramm (UGP) — laufend seit 07/2026, Fokus Markteintritt',
      'Diplom Games Programming, SAE Wien — 2023 bis 2024',
      'Lehre Elektrotechnik — 2016 bis 2020',
    ],
    focus: [
      'Unity & Unreal Engine — Applikationen, Tools und Prototypen',
      'C#, C++, Python, JavaScript & mehr — KI-gestützte Adaption weiterer Sprachen',
      'KI-gestützte Skripterstellung und strukturierte Feature-Integration',
      'Meilenstein-Planung, Projektdokumentation und transparente Kommunikation',
    ],
    workflow:
      'BlueprintStudio Workflow: Detaillierte Feature-Analyse, Meilenstein-Planung und iterative Umsetzung. Rapid Prototyping visualisiert Ideen früh — als solide Basis für das Endprodukt.',
  },
  services: [
    {
      title: 'Individuelle Softwareentwicklung',
      description: 'Umsetzung von Applikationen und Unity-Projekten nach Maß.',
    },
    {
      title: 'Feature-Integration',
      description: 'Präzise Implementierung spezifischer Kundenanforderungen.',
    },
    {
      title: 'BlueprintStudio Workflow',
      description:
        'Strukturierte Projektabwicklung durch Feature-Analyse, Meilenstein-Planung und iterative Releases.',
    },
    {
      title: 'Rapid Prototyping',
      description: 'Schnelle Visualisierung von Ideen als Basis für das Endprodukt.',
    },
  ],
  assetsPage: {
    title: 'Assets',
    description: 'SaveSystemPro und Project Slimmer — Unity Asset Store Tools von BlueprintStudio.',
    label: 'Unity Asset Store',
    heading: 'Assets / Shop',
    intro:
      'Aktuelle Unity-Tools im Asset Store — mit technischer Dokumentation und klarer Editor-Integration. Weitere Editor-Utilities und Produktivitäts-Tools sind in Planung und werden schrittweise veröffentlicht.',
  },
  assetsIntro:
    'Aktuelle Unity-Tools im Asset Store — mit technischer Dokumentation und klarer Editor-Integration. Weitere Editor-Utilities und Produktivitäts-Tools sind in Planung und werden schrittweise veröffentlicht.',
  assets: [
    {
      name: 'SaveSystemPro',
      slug: 'savesystempro',
      description:
        'Performante, modular aufgebaute Lösung zur effizienten Datenpersistenz in Unity.',
      storeUrl: '#',
      version: 'Unity 2021.3+',
      summary:
        'Flexibles Save/Load-System mit klarer API, modularer Serializer-Architektur und minimalem Runtime-Overhead.',
      features: [
        'Modulare Serializer für unterschiedliche Datentypen',
        'Asynchrones Speichern ohne Frame-Drops',
        'Versionierung und Migration gespeicherter Daten',
        'Editor-Integration zur Inspektion von Save-Slots',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Package über den Unity Asset Store importieren. Ab Unity 2021.3 LTS kompatibel. Nach dem Import erscheint das Tool unter Blueprint → SaveSystemPro im Editor-Menü.',
        },
        {
          title: 'Quick Start',
          content:
            'Implementiere ISaveable auf deinen Datenklassen, registriere Serializer über SaveSystemConfig und rufe SaveManager.Save(slot) bzw. Load(slot) auf. Asynchrone Varianten vermeiden Frame-Spikes bei großen Datenmengen.',
        },
        {
          title: 'Architektur',
          content:
            'Modulare Serializer-Pipeline mit Versionierung. Jeder Save-Slot enthält Metadaten für Migration. Editor-Fenster zur Inspektion und zum Debuggen von Serialisierungsfehlern.',
        },
      ],
    },
    {
      name: 'Project Slimmer',
      slug: 'project-slimmer',
      description:
        'Optimierungs-Tool zur automatisierten Bereinigung von Unity-Projekten und Reduzierung von Build-Größen.',
      storeUrl: '#',
      version: 'Unity 2021.3+',
      summary:
        'Analysiert ungenutzte Assets, redundante Referenzen und überdimensionierte Texturen. Automatisierte Reports und selektive Bereinigung.',
      features: [
        'Scan nach unreferenzierten Assets',
        'Texture- und Mesh-Optimierungsvorschläge',
        'Build-Size-Report vor dem Release',
        'Sichere Vorschau vor endgültigem Löschen',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Editor-only Package aus dem Asset Store. Nach dem Import: Window → Blueprint → Project Slimmer öffnen.',
        },
        {
          title: 'Workflow',
          content:
            'Zuerst Scan ausführen — das Tool listet unreferenzierte Assets, große Texturen und redundante Meshes. Vorschau-Modus zeigt Auswirkungen vor dem Löschen. Build-Size-Report vor jedem Release empfohlen.',
        },
        {
          title: 'Sicherheit',
          content:
            'Keine automatische Löschung ohne Bestätigung. Backup oder Version Control vor Batch-Operationen. Ignore-Listen für Assets, die absichtlich unreferenziert sind.',
        },
      ],
    },
  ],
  docsPage: {
    title: 'Dokumentation',
    description: 'Technische Dokumentation für SaveSystemPro und Project Slimmer.',
    label: 'Wiki',
    heading: 'Dokumentation',
    intro:
      'Technische Anleitungen für Setup, Workflow und Architektur der BlueprintStudio-Tools. Wähle ein Produkt aus dem Untermenü oder hier direkt.',
  },
  portfolioPage: {
    title: 'Portfolio',
    description:
      'BlueprintStudio Projekt-Portfolio — SaveSystemPro, Project Slimmer, Unity- und Unreal-Projekte.',
    label: 'BlueprintStudio',
    heading: 'Portfolio / Projekte',
    intro:
      'Ausgewählte Projekte — von Asset-Store-Tools über Unity-Simulationen bis zu Unreal- und RPG-Prototypen. Die Unity-Tools SaveSystemPro und Project Slimmer sind die ersten veröffentlichten Produkte; weitere Editor-Utilities folgen.',
    workflow:
      'Neben den Asset-Store-Produkten dokumentiere ich ausgewählte Projekte und Code-Beispiele transparent — mit klaren READMEs, nachvollziehbaren Commits und strukturierter Architektur.',
  },
  openSource: {
    workflow:
      'Neben den Asset-Store-Produkten dokumentiere ich ausgewählte Projekte und Code-Beispiele transparent — mit klaren READMEs, nachvollziehbaren Commits und strukturierter Architektur.',
  },
  portfolioProjects: [
    {
      name: 'SaveSystemPro',
      type: 'Asset Store',
      description: 'Modulares Save/Load-System für Unity — flexible API und Editor-Integration.',
      internalUrl: '/assets',
      tags: ['Unity', 'C#', 'Save System'],
    },
    {
      name: 'Project Slimmer',
      type: 'Asset Store',
      description: 'Editor Extension zur Projekt-Optimierung und Build-Size-Reduktion.',
      internalUrl: '/assets',
      tags: ['Unity', 'Editor Tool', 'Optimization'],
    },
    {
      name: 'OreExtraction',
      type: 'Unity',
      description: 'Mining-Simulation mit Fokus auf System-Design und spielbare Mechaniken.',
      tags: ['Unity', 'Simulation', 'Gameplay'],
    },
    {
      name: 'Escape Strategist',
      type: 'Unreal Engine',
      description: 'Visuelle Unreal-Umsetzung — Konzeptentwicklung und technische Realisierung.',
      tags: ['Unreal', 'Visualization', 'C++'],
    },
    {
      name: 'Necrosia',
      type: 'Prototype',
      description: 'RPG-Konzept-Prototyp — frühe Spielmechaniken und System-Validierung.',
      tags: ['RPG', 'Prototype', 'Game Design'],
    },
    {
      name: 'VariusLP — GitHub',
      type: 'Open Source',
      description: 'Unity-Skripte, Tool-Experimente und Referenzimplementierungen.',
      url: 'https://github.com/VariusLP',
      tags: ['C#', 'Unity', 'GitHub'],
    },
  ],
  contactPage: {
    title: 'Kontakt',
    description: 'Kontakt zu BlueprintStudio — Projektanfragen und technische Fragen.',
    label: 'Anfrage',
    heading: 'Kontakt',
    intro:
      'Technische Anfragen zu Unity-Projekten, Assets oder Zusammenarbeit. Das Formular sendet deine Nachricht direkt per E-Mail.',
    emailLabel: 'E-Mail',
    responseLabel: 'Antwortzeit',
    responseText: 'In der Regel innerhalb von 48 Stunden',
  },
  contactForm: {
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet…',
    subject: 'Anfrage BlueprintStudio',
    fromName: 'BlueprintStudio Kontaktformular',
    hintConfigured:
      'Die Nachricht wird direkt per E-Mail zugestellt — ohne Outlook oder anderes E-Mail-Programm.',
    hintNotConfigured: 'Formular-Backend noch nicht konfiguriert. Schreib direkt an',
    success: 'Nachricht gesendet! Ich melde mich in der Regel innerhalb von 48 Stunden.',
    successRedirect:
      'Nachricht gesendet! Ich melde mich in der Regel innerhalb von 48 Stunden.',
    error:
      'Senden fehlgeschlagen. E-Mail-Programm wird als Fallback geöffnet — oder schreib an',
    notConfigured:
      'Direktversand nicht eingerichtet. E-Mail-Programm wird geöffnet — oder schreib an',
  },
  impressumPage: {
    title: 'Impressum',
    description:
      'Impressum und Anbieterkennzeichnung von BlueprintStudio — Sascha Leitner, Münzbach, Österreich.',
    label: 'Rechtliches',
    heading: 'Impressum',
    legalBasis: 'Angaben gemäß § 5 ECG und § 25 MedienG (Österreich)',
    publisher: 'Medieninhaber und Herausgeber',
    tradeName: 'Unternehmensbezeichnung',
    tradeNameNote: '(Marken- und Projektname)',
    profession: 'Beruf',
    address: 'Anschrift',
    contact: 'Kontakt',
    emailLabel: 'E-Mail',
    companyRegister: 'Firmenbuch',
    companyRegisterText: 'Kein Eintrag im österreichischen Firmenbuch.',
    vat: 'UID-Nummer',
    vatText: 'Keine UID-Nummer.',
    privacy: 'Datenschutz / Webanalyse',
    privacyText:
      'Diese Website verwendet Umami Analytics — eine cookie-freie, anonymisierte Reichweitenmessung. Es werden keine personenbezogenen Profile erstellt und keine Daten an Werbenetzwerke weitergegeben. Die Auswertung ist nur für den Betreiber dieser Website zugänglich. Rechtsgrundlage: berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO (technische Optimierung der Website).',
    liabilityContent: 'Haftung für Inhalte',
    liabilityContentText:
      'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.',
    liabilityLinks: 'Haftung für Links',
    liabilityLinksText:
      'Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
  },
  home: {
    ctaAssets: 'Unity Assets',
    ctaContact: 'Projekt anfragen',
  },
};
