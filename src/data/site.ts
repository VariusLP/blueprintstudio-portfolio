export const nav = [
  { label: 'Leistungen', href: '/services' },
  { label: 'Assets', href: '/assets' },
  { label: 'Portfolio', href: '/portfolio' },
] as const;

export const contactEmail = 'saschaleitner1@gmx.at';
export const githubUrl = 'https://github.com/VariusLP';
export const githubHandle = 'VariusLP';

const inquiryParams = new URLSearchParams({
  subject: 'Projektanfrage BlueprintStudio',
  body: 'Hallo Sascha,\n\n[Kurze Projektbeschreibung]\n\nMit freundlichen Grüßen',
});

/** mailto:-Link für Projektanfragen — öffnet das Standard-E-Mail-Programm */
export const mailtoInquiry = `mailto:${contactEmail}?${inquiryParams.toString()}`;
export const mailtoDefault = `mailto:${contactEmail}`;

export const openSource = {
  workflow:
    'Repositories werden mit klaren READMEs, nachvollziehbaren Commits und semantischer Versionierung gepflegt. Editor-Utilities und Performance-Tools entstehen zuerst in produktiven Projekten und werden bei Reife schrittweise als Open Source veröffentlicht.',
  approach:
    'Der Fokus liegt auf wiederverwendbarem, dokumentiertem Code — keine Demo-Repos, sondern Tools mit definiertem Setup, minimalem Overhead und nachvollziehbarer Architektur.',
};

export const studio = {
  name: 'BlueprintStudio',
  legalName: 'BlueprintStudio e.U.',
  owner: 'Sascha Leitner',
  location: 'Münzbach, Österreich',
  tagline: 'High-Performance Software & Unity Development',
  summary:
    'BlueprintStudio entwickelt performante Unity-Lösungen, maßgeschneiderte Editor-Tools und skalierbare Software-Architekturen. Der Fokus liegt auf messbarer Laufzeit-Performance, wartbarem Code und effizienten Entwicklungs-Workflows.',
};

export const focusAreas = [
  {
    title: 'Unity Editor Tools',
    description:
      'Automatisierung wiederkehrender Aufgaben, Custom Inspectors, Build-Pipelines und interne Toolchains für Produktionsteams.',
  },
  {
    title: 'Performance Engineering',
    description:
      'Profiler-gestützte Analyse von CPU-, GPU- und Memory-Bottlenecks. Ziel: stabile Frame Times und vorhersagbares Runtime-Verhalten.',
  },
  {
    title: 'Individuelle Software',
    description:
      'C#-basierte Anwendungen, technische Beratung und System-Optimierung für projektspezifische Anforderungen.',
  },
];

export const techStack = [
  'Unity 6 / Unity LTS',
  'C# / .NET',
  'UI Toolkit (Editor)',
  'Unity Profiler & Frame Debugger',
  'Addressables & Asset Bundles',
  'Git / CI-Pipelines',
];

export const services = [
  {
    title: 'Unity Performance-Optimierung',
    description:
      'Analyse und Refactoring von komplexen Unity-Projekten. Fokus auf Frame-Time-Optimierung, Speicher-Management und Code-Effizienz.',
    icon: 'chart' as const,
    details:
      'Ich identifiziere Engpässe über Unity Profiler, Memory Profiler und Frame Debugger — von GC-Spikes über übermäßige Draw Calls bis zu ineffizienten Update-Loops. Anschließend erfolgt ein gezieltes Refactoring mit messbaren Zielwerten.',
    deliverables: [
      'Profiler-Report mit priorisierten Bottlenecks',
      'Refactoring-Plan und Umsetzung kritischer Pfade',
      'Memory- und Allocation-Analyse',
      'Empfehlungen für Rendering- und Scripting-Pipeline',
    ],
    technologies: ['Unity Profiler', 'Frame Debugger', 'Burst / Jobs (optional)', 'URP / HDRP'],
  },
  {
    title: 'Custom Editor Tools',
    description:
      'Entwicklung von maßgeschneiderten Editor-Erweiterungen für Unity, um Workflows zu beschleunigen und Entwicklungsprozesse zu automatisieren.',
    icon: 'tool' as const,
    featured: true,
    details:
      'Editor-Tools reduzieren manuelle Schritte, verhindern Konfigurationsfehler und standardisieren Team-Workflows. Entwicklung bevorzugt mit UI Toolkit für wartbare, performante Editor-Oberflächen unter Unity 6.',
    deliverables: [
      'Custom Editor Windows & Inspectors',
      'Asset-Pipeline-Automatisierung',
      'Build- und Validierungs-Skripte',
      'Dokumentation und Übergabe an das Team',
    ],
    technologies: ['UI Toolkit', 'EditorWindow', 'ScriptableObject-Workflows', 'AssetDatabase API'],
  },
  {
    title: 'Software-Architektur',
    description:
      'Beratung und Unterstützung bei der Planung und Umsetzung von skalierbaren Software-Architekturen.',
    icon: 'layers' as const,
    details:
      'Klare Modulgrenzen, lose Kopplung und testbare Strukturen — besonders relevant bei wachsenden Unity-Codebases und paralleler Team-Entwicklung. Architektur-Reviews und schrittweise Migration bestehender Systeme.',
    deliverables: [
      'Architektur-Review bestehender Codebase',
      'Modul- und Schnittstellen-Design',
      'Patterns für State, Events und Dependency Injection',
      'Migrations-Roadmap bei Legacy-Strukturen',
    ],
    technologies: ['SOLID Principles', 'Service Locator / DI', 'Assembly Definitions', 'Event Systems'],
  },
  {
    title: 'IT-Support',
    description:
      'Technische Unterstützung und System-Optimierung für individuelle Softwareanforderungen.',
    icon: 'support' as const,
    details:
      'Unterstützung bei Setup, Debugging, Toolchain-Konfiguration und laufenden technischen Problemen — von Unity-Projekten bis zu allgemeinen C#-Anwendungen und Entwicklungsumgebungen.',
    deliverables: [
      'Fehleranalyse und Debugging',
      'Entwicklungsumgebung & Toolchain-Setup',
      'Performance-Tuning von Workstations und Pipelines',
      'Technische Dokumentation',
    ],
    technologies: ['Windows / macOS', 'Visual Studio / Rider', 'Git', 'Unity Hub & Build Targets'],
  },
];

export const workflow = [
  {
    step: '01',
    title: 'Analyse',
    description:
      'Verständnis des Projekts, der Zielplattform und der technischen Constraints. Klärung von Scope, Deadline und Erfolgskriterien.',
  },
  {
    step: '02',
    title: 'Konzept',
    description:
      'Technisches Konzept, Architektur-Skizze oder Optimierungs-Plan. Abstimmung vor der Implementierung.',
  },
  {
    step: '03',
    title: 'Umsetzung',
    description:
      'Iterative Entwicklung mit regelmäßigem Feedback. Fokus auf sauberen, dokumentierten und wartbaren Code.',
  },
  {
    step: '04',
    title: 'Übergabe',
    description:
      'Code-Review, Dokumentation und optional Einarbeitung ins Team. Nachbetreuung bei Rückfragen.',
  },
];

export const assets = [
  {
    name: 'SaveSystemPro',
    slug: 'savesystempro',
    description:
      'Performante, modular aufgebaute Lösung zur effizienten Datenpersistenz in Unity.',
    url: '#',
    featured: true,
    version: 'Unity 2021.3+',
    summary:
      'SaveSystemPro bietet ein flexibles Save/Load-System mit klarer API, modularer Serializer-Architektur und minimalem Runtime-Overhead. Entwickelt für Projekte, die zuverlässige Persistenz ohne monolithische Save-Klassen benötigen.',
    features: [
      'Modulare Serializer für unterschiedliche Datentypen',
      'Asynchrones Speichern ohne Frame-Drops',
      'Versionierung und Migration gespeicherter Daten',
      'Editor-Integration zur Inspektion von Save-Slots',
      'Erweiterbar durch eigene ISaveable-Implementierungen',
    ],
    compatibility: ['Unity 2021.3 LTS', 'Unity 6', 'Standalone & Mobile'],
  },
  {
    name: 'Project Slimmer',
    slug: 'project-slimmer',
    description:
      'Optimierungs-Tool zur automatisierten Bereinigung von Unity-Projekten und Reduzierung von Build-Größen.',
    url: '#',
    version: 'Unity 2021.3+',
    summary:
      'Project Slimmer analysiert ungenutzte Assets, redundante Referenzen und überdimensionierte Texturen. Automatisierte Reports und selektive Bereinigung helfen, Build-Größen und Import-Zeiten zu reduzieren.',
    features: [
      'Scan nach unreferenzierten Assets',
      'Texture- und Mesh-Optimierungsvorschläge',
      'Build-Size-Report vor dem Release',
      'Batch-Operationen über das Editor-Fenster',
      'Sichere Vorschau vor endgültigem Löschen',
    ],
    compatibility: ['Unity 2021.3 LTS', 'Unity 6', 'Editor-only'],
  },
];

export const projects = [
  {
    name: 'SaveSystemPro',
    type: 'Unity Asset',
    description: 'Modulares Save/Load-Framework mit Editor-Tools und Performance-Fokus.',
    url: '#',
    tags: ['C#', 'Unity', 'Persistence'],
  },
  {
    name: 'Project Slimmer',
    type: 'Unity Editor Tool',
    description: 'Automatisierte Projekt-Analyse und Build-Size-Optimierung.',
    url: '#',
    tags: ['C#', 'Unity Editor', 'Optimization'],
  },
  {
    name: 'FrameBudgetProfiler',
    type: 'Open Source',
    description: 'Editor-Utility zur Frame-Time-Analyse und Profiler-Marker-Integration.',
    url: githubUrl,
    tags: ['C#', 'Profiler', 'Editor Tool'],
  },
  {
    name: 'BlueprintStudio Tools',
    type: 'Internal Toolchain',
    description: 'Sammlung wiederverwendbarer Editor-Erweiterungen und Build-Skripte.',
    url: githubUrl,
    tags: ['UI Toolkit', 'Automation', 'Pipeline'],
  },
];

export const skills = [
  { category: 'Unity', items: ['Editor Scripting', 'UI Toolkit', 'Performance Profiling', 'URP / Built-in'] },
  { category: 'Sprachen', items: ['C#', 'HLSL (Basics)', 'Shell / PowerShell'] },
  { category: 'Tools', items: ['Git', 'Rider', 'Visual Studio', 'Unity Profiler'] },
  { category: 'Fokus', items: ['Frame-Time', 'Memory Management', 'Build Optimization', 'Architecture'] },
];

export const impressum = {
  status: 'In Vorbereitung',
  company: 'BlueprintStudio e.U.',
  owner: 'Sascha Leitner',
  street: 'Arbingerstraße 2/5',
  city: '4323 Münzbach',
  country: 'Österreich',
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
