export const contactEmail = 'saschaleitner1@gmx.at';

export const web3formsAccessKey =
  import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || 'c2917d1f-e707-466a-8f8b-0e210b09be2b';

export const umamiWebsiteId =
  import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || 'b39a857d-737c-4133-be1c-cebc8c2cf0d0';

export const umamiScriptUrl =
  import.meta.env.PUBLIC_UMAMI_SCRIPT_URL ?? 'https://cloud.umami.is/script.js';

export const githubUrl = 'https://github.com/BlueprintStudioDev';
export const githubHandle = 'BlueprintStudioDev';

export const impressumData = {
  owner: 'Sascha Leitner',
  tradeName: 'BlueprintStudio',
  street: 'Arbingerstraße 2/5',
  zip: '4323',
  city: 'Münzbach',
  countryDe: 'Österreich',
  countryEn: 'Austria',
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
