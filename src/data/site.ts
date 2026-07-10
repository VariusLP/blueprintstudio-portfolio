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
  tagline: 'Unity, Algorithmen & Performance',
  intro:
    'Ich bin Softwareentwickler mit Fokus auf Unity, algorithmische Problemlösung und messbare Laufzeit-Performance. BlueprintStudio ist mein technisches Studio für Editor-Tools, Optimierung und produktive Asset-Store-Lösungen.',
  why:
    'Statt oberflächlicher Features liefere ich Profiler-gestützte Analysen, automatisierte Workflows und wartbaren C#-Code — mit klarem Fokus auf Frame Times, Speicher und Build-Effizienz.',
};

export const about = {
  headline: 'Technischer Background',
  summary:
    'Softwareentwickler mit Ausbildung am SAE Institute. Schwerpunkt: Unity-Entwicklung, Performance-Engineering und Automatisierung von Entwicklungsprozessen.',
  education: 'SAE Institute — Software Engineering / Game Development',
  focus: [
    'Unity Editor Tools & UI Toolkit',
    'Performance-Profiling und Frame-Time-Optimierung',
    'Algorithmen und System-Design',
    'Workflow-Automatisierung und Build-Pipelines',
  ],
};

export const openSource = {
  workflow:
    'Repositories werden mit klaren READMEs, nachvollziehbaren Commits und semantischer Versionierung gepflegt. Editor-Utilities und Performance-Tools entstehen zuerst in produktiven Projekten und werden bei Reife schrittweise als Open Source veröffentlicht.',
  approach:
    'Der Fokus liegt auf wiederverwendbarem, dokumentiertem Code — keine Demo-Repos, sondern Tools mit definiertem Setup, minimalem Overhead und nachvollziehbarer Architektur.',
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

export const portfolioProjects = [
  {
    name: 'VariusLP — GitHub',
    type: 'Open Source',
    description:
      'Unity Editor-Skripte, Performance-Utilities und Tool-Experimente außerhalb des Asset Stores.',
    url: githubUrl,
    tags: ['C#', 'Unity', 'Editor Tools'],
  },
  {
    name: 'FrameBudgetProfiler',
    type: 'Code Example',
    description:
      'Editor-Utility zur Frame-Time-Analyse mit Profiler-Marker-Integration — Referenzimplementierung für Performance-Workflows.',
    url: githubUrl,
    tags: ['Profiler', 'C#', 'Performance'],
  },
];

export const impressum = {
  owner: 'Sascha Leitner',
  tradeName: 'BlueprintStudio',
  profession: 'Software-Entwicklung (Freelancer)',
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
