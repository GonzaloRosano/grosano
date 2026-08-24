import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const REPO_CONTENTS_URL =
  "https://api.github.com/repos/GonzaloRosano/GonzaloRosano/contents";

async function getReadme(filename: string): Promise<string | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(`${REPO_CONTENTS_URL}/${filename}`, {
      headers: {
        Accept: "application/vnd.github.raw+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

const markdownClassName =
  "markdown-body mx-auto max-w-none bg-transparent! [&_p:has(img)]:flex [&_p:has(img)]:flex-wrap [&_p:has(img)]:items-center [&_p:has(img)]:gap-2 [&_img]:m-0! [&_img]:inline-block";

export async function ProfileReadme() {
  const [fetchedEn, fetchedEs] = await Promise.all([
    getReadme("README.md"),
    getReadme("README.es.md"),
  ]);

  // Si uno de los dos falla (ej. rate limit de la API en build time), mostramos
  // el otro igual en vez de dejar la seccion vacia para ese idioma.
  const readmeEn = fetchedEn ?? fetchedEs;
  const readmeEs = fetchedEs ?? fetchedEn;

  if (!readmeEn && !readmeEs) return null;

  return (
    <section className="w-full max-w-2xl border-t border-border px-6 py-16">
      {readmeEn && (
        <div className={`lang-en ${markdownClassName}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {readmeEn}
          </ReactMarkdown>
        </div>
      )}

      {readmeEs && (
        <div className={`lang-es ${markdownClassName}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {readmeEs}
          </ReactMarkdown>
        </div>
      )}
    </section>
  );
}
