export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
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
];

export const contactEmail = 'saschaleitner1@gmx.at';

/** Öffentlicher Zugangsschlüssel von https://web3forms.com */
export const web3formsAccessKey =
  import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || 'c2917d1f-e707-466a-8f8b-0e210b09be2b';

/** Website-ID von https://cloud.umami.is */
export const umamiWebsiteId =
  import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || 'b39a857d-737c-4133-be1c-cebc8c2cf0d0';

/** Standard-CDN von Umami Cloud; bei Self-Hosting anpassen */
export const umamiScriptUrl =
  import.meta.env.PUBLIC_UMAMI_SCRIPT_URL ?? 'https://cloud.umami.is/script.js';

export const githubUrl = 'https://github.com/VariusLP';
export const githubHandle = 'VariusLP';

const inquiryParams = new URLSearchParams({
  subject: 'Projektanfrage BlueprintStudio',
  body: 'Hallo Sascha,\n\n[Kurze Projektbeschreibung]\n\nMit freundlichen Grüßen',
});

export const mailtoInquiry = `mailto:${contactEmail}?${inquiryParams.toString()}`;
export const mailtoDefault = `mailto:${contactEmail}`;

export const studio = {
  name: 'BlueprintStudio',
  owner: 'Sascha Leitner',
  tradeName: 'BlueprintStudio',
  location: 'Münzbach, Österreich',
  role: 'Full-Cycle Software & Solutions Developer',
  tagline: 'Vom Prototyp bis zur fertigen Applikation',
  intro:
    'Unter der Marke BlueprintStudio entwickle ich maßgeschneiderte Softwarelösungen — von Unity-Tools und Applikationen bis hin zu feature-reichen Produkten. Der Fokus liegt auf strukturierter Umsetzung, klarer Kommunikation und effizienten, KI-gestützten Entwicklungs-Workflows.',
  why:
    'Jedes Projekt beginnt mit Feature-Analyse und Meilenstein-Planung. So entstehen wartbare Systeme mit messbarem Fortschritt — ob Editor-Extension, Simulation oder Asset-Store-Tool.',
};

export const about = {
  headline: 'Profil',
  summary:
    'Als Full-Cycle Software & Solutions Developer realisiere ich Kundenanforderungen end-to-end: Anforderungsanalyse, Rapid Prototyping, iterative Umsetzung und dokumentierte Übergabe. Schwerpunkte sind Unity-Entwicklung, Editor-Tools und produktive Workflow-Automatisierung.',
  education: [
    'Unternehmensgründungsprogramm (UGP) — laufend seit 07/2026, Fokus Markteintritt',
    'Diplom Games Programming, SAE Wien — 2023 bis 2024',
    'Lehre Elektrotechnik — 2016 bis 2020',
  ],
  focus: [
    'Unity & Unreal Engine — Applikationen, Tools und Prototypen',
    'C#, C++ und .NET Framework',
    'KI-gestützte Skripterstellung und strukturierte Feature-Integration',
    'Meilenstein-Planung, Projektdokumentation und transparente Kommunikation',
  ],
  workflow:
    'BlueprintStudio Workflow: Detaillierte Feature-Analyse, Meilenstein-Planung und iterative Umsetzung. Rapid Prototyping visualisiert Ideen früh — als solide Basis für das Endprodukt.',
};

export const services = [
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
];

export const assetsIntro =
  'Aktuelle Unity-Tools im Asset Store — mit technischer Dokumentation und klarer Editor-Integration. Weitere Editor-Utilities und Produktivitäts-Tools sind in Planung und werden schrittweise veröffentlicht.';

export const openSource = {
  workflow:
    'Neben den Asset-Store-Produkten dokumentiere ich ausgewählte Projekte und Code-Beispiele transparent — mit klaren READMEs, nachvollziehbaren Commits und strukturierter Architektur.',
  approach:
    'Der Fokus liegt auf wiederverwendbarem, produktionsnahem Code — Tools und Prototypen mit definiertem Setup, minimalem Overhead und nachvollziehbarer Umsetzung.',
};

export const assets = [
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
];

/** Wiki-Seiten — abgeleitet aus den Asset-Daten */
export const docs = assets.map((asset) => ({
  slug: asset.slug,
  title: asset.name,
  intro: asset.summary,
  sections: asset.sections,
}));

export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  url?: string;
  internalUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
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
    url: githubUrl,
    tags: ['C#', 'Unity', 'GitHub'],
  },
];

export const impressum = {
  owner: 'Sascha Leitner',
  tradeName: 'BlueprintStudio',
  profession: 'Full-Cycle Software & Solutions Developer (Freelancer)',
  street: 'Arbingerstraße 2/5',
  zip: '4323',
  city: 'Münzbach',
  country: 'Österreich',
  firmenbuch: 'Kein Eintrag im österreichischen Firmenbuch.',
  uid: 'Keine UID-Nummer.',
};

export const heroCodeSnippet = `
<span class="text-code-comment">// BlueprintStudio — Editor Performance Tool</span>
<span class="text-code-keyword">using</span> Unity.Profiling;

<span class="text-code-keyword">public sealed class</span> <span class="text-code-type">FrameBudgetProfiler</span> : <span class="text-code-type">EditorWindow</span>
{
    <span class="text-code-keyword">static readonly</span> <span class="text-code-type">ProfilerMarker</span> <span class="text-code-fn">Marker</span>
        = <span class="text-code-keyword">new</span>(<span class="text-code-string">"Blueprint.FrameAnalysis"</span>);

    [<span class="text-code-type">MenuItem</span>(<span class="text-code-string">"Blueprint/Analyze Frame Budget"</span>)]
    <span class="text-code-keyword">static void</span> <span class="text-code-fn">Analyze</span>()
    {
        <span class="text-code-keyword">using</span> (<span class="text-code-fn">Marker</span>.<span class="text-code-fn">Auto</span>())
            <span class="text-code-type">RenderPipelineOptimizer</span>.<span class="text-code-fn">Run</span>();
    }
}
`.trim();
