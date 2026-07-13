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
    languageSelection: 'Sprache',
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
        'Produktionsreifes Save/Load-System für Unity-Spiele — Multi-Slot, Backups, Profile und Runtime-Spawns. v1.0.0, Asset-Store-Paket.',
      storeUrl: '#',
      version: 'v1.0.0 · Unity 2021 LTS – Unity 6',
      summary:
        'Zentrale SaveManager-Instanz orchestriert Speichern, Laden, Backups, Profile und Runtime-Spawns. SaveableEntity + ISaveable, Serializer-Registry, Safe-Write-Pipeline und umfangreiche Editor-Tools.',
      features: [
        'Multi-Slot, Autosave, QuickSave — Manifest, Thumbnails, Retention & Continue Policies',
        'Safe Write Pipeline (Temp → Replace) + rotierende Backups (.bak1–.bak3) mit Fallback beim Laden',
        'Multi-Scene, Multi-Profile, Runtime-Spawn-Persistenz via SaveableEntity & ISaveable',
        'Erweiterbare Serializer-Registry, Pipeline-Hooks, Validatoren — 3 Demo-Szenen & UI-Samples',
      ],
      sections: [
        {
          title: 'Installation & Kompatibilität',
          content:
            'Unity Asset Store-Paket (v1.0.0, Copyright 2026). Kompatibel mit Unity 2021 LTS, 2022 LTS und Unity 6 (6000). Namespace BlueprintStudio.SaveSystemPro, Assembly BlueprintStudio.SaveSystemPro — keine externen Package-Abhängigkeiten. Projektstruktur unter Assets/BlueprintStudio/SaveSystemPro/ (Runtime, Editor, Samples, Documentation).',
        },
        {
          title: 'Quick Start',
          content:
            'SaveManager in die Szene legen (eine Instanz pro Szene). SaveableEntity auf alle persistierbaren Objekte, optional SaveTransform für Position/Rotation/Scale. Eigene Logik via ISaveable (CaptureState / RestoreState). Runtime-Spawns: RuntimeSpawned + Prefab-Mapping im SaveManager. API: SaveManager.Instance.SetActiveSlot("slot1"); SaveManager.Instance.Save(); SaveManager.Instance.Load(); — plus HasSave(), GetLatestSlot() und weitere Hilfsmethoden.',
        },
        {
          title: 'Architektur',
          content:
            'Kern ist der SaveManager als zentrale Save-Authority: Slots, Autosave, Backups, Profile, Export/Import und Metadaten. SaveableEntity markiert Objekte mit eindeutiger GUID; SaveScope steuert den Speicherort (Scene, Global, PlayerData, PersistentRuntime). Serializer-System über ISaveStateSerializer mit eingebauten Typen (Bool, Int, Float, String, Vector2/3, Quaternion, TransformState) — Registry auto-generiert via SerializerRegistryGenerator. Erweiterbar über ISaveValidator, IAutosaveGuard, ISavePipelineHook, ISaveEntityFilter und ISaveStorageProvider. Optional: GZip-Kompression und lokale Verschlüsselung.',
        },
        {
          title: 'Editor-Tools & Demos',
          content:
            'Editor: SaveManagerEditor (Custom Inspector, Slot-Verwaltung, Thumbnails), SaveSystemProSaveBrowserWindow, SaveSystemProDiagnosticsWindow, SerializerRegistryGenerator und SaveSystemAutoSetup. Drei Demo-Szenen: Basic Demo (3 Slots, Player/Coins/Health), Runtime Spawn Demo (persistente Prefab-Spawns) und Advanced Safety Demo (Backup-Wiederherstellung). Zusätzliche UI-Samples: SaveLoadMenuUI, SaveLoadOverlayUI, SaveSlotPreviewDemoUI.',
        },
      ],
    },
    {
      name: 'Project Slimmer',
      slug: 'project-slimmer',
      description:
        'Editor-Tool zur Projektoptimierung — große Dateien finden, ungenutzte Assets erkennen, sicher bereinigen. v1.0, Asset-Store-bereit.',
      storeUrl: '#',
      version: 'v1.0 · Unity 2021.3+',
      summary:
        'Editor-Fenster unter Tools → Project Slimmer mit zwei Tabs: die 20 größten Dateien unter Assets/ und potenziell ungenutzte Assets per Dependency Graph. Confidence-Bewertung, Report-Export und sicheres Batch-Löschen.',
      features: [
        'Tab Top 20 Largest Files — Scan unter Assets/, farbcodiert (>10 MB orange, >50 MB rot), Ping im Project-Fenster',
        'Tab Potentially Unused Assets — Dependency Graph aus Szenen, Prefabs und ScriptableObjects',
        'Confidence-System High / Medium / Low, Filter, Sortierung, Suche und Report-Export',
        'Sicheres Batch-Löschen à 25 Dateien, Schutz für kritische Ordner (Resources, StreamingAssets, URP/HDRP)',
      ],
      sections: [
        {
          title: 'Installation',
          content:
            'Editor-only Package für den Unity Asset Store (v1.0, Release Candidate). Nach dem Import: Tools → Project Slimmer öffnen. Demo-Szene unter Assets/BlueprintStudio/ProjectSlimmer/DemoScene.unity.',
        },
        {
          title: 'Oberfläche & Workflow',
          content:
            'Tab 1 — Top 20 Largest Files: Scannt alle Dateien unter Assets/ und listet die 20 größten farbcodiert (>10 MB orange, >50 MB rot). Klick auf einen Dateinamen pingt die Datei im Project-Fenster. Tab 2 — Potentially Unused Assets: Baut einen Dependency Graph aus Szenen, Prefabs und ScriptableObjects und listet Assets, die darin nicht vorkommen. Confidence-System (High / Medium / Low) mit Heuristiken, plus Filter, Sortierung, Suche und Export als Report.',
        },
        {
          title: 'Sicherheit',
          content:
            'Löschen erfolgt sicher in Batches à 25 Dateien über EditorApplication.delayCall. Kritische Ordner sind geschützt — u. a. Resources, StreamingAssets und URP/HDRP-Settings. Keine automatische Löschung ohne Bestätigung; Backup oder Version Control vor Batch-Operationen empfohlen.',
        },
        {
          title: 'Architektur',
          content:
            'IMGUI (klassisches EditorWindow.OnGUI), Namespace BlueprintStudio.ProjectSlimmer, eigene Assembly Definition BlueprintStudio.ProjectSlimmer.Editor.asmdef. Ca. 1.550 Zeilen C#, ausführlich kommentiert.',
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
      description:
        'Produktionsreifes Save/Load-System — Multi-Slot, Backups, Profile, Runtime-Spawns und Editor-Tools (v1.0.0).',
      internalUrl: '/assets',
      tags: ['Unity', 'C#', 'Save System'],
    },
    {
      name: 'Project Slimmer',
      type: 'Asset Store',
      description:
        'Editor Extension — große Dateien finden, ungenutzte Assets per Dependency Graph erkennen, sicher bereinigen (v1.0).',
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
      name: 'BlueprintStudioDev — GitHub',
      type: 'Open Source',
      description: 'Unity-Skripte, Tool-Experimente und Referenzimplementierungen.',
      url: 'https://github.com/BlueprintStudioDev',
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
