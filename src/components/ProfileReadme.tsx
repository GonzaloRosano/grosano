import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const README_API_URL =
  "https://api.github.com/repos/GonzaloRosano/GonzaloRosano/contents/README.md";

async function getReadme(): Promise<string | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(README_API_URL, {
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

export async function ProfileReadme() {
  const readme = await getReadme();
  if (!readme) return null;

  return (
    <section className="w-full max-w-2xl border-t border-border px-6 py-16">
      <div className="markdown-body mx-auto max-w-none bg-transparent! [&_p:has(img)]:flex [&_p:has(img)]:flex-wrap [&_p:has(img)]:items-center [&_p:has(img)]:gap-2 [&_img]:m-0! [&_img]:inline-block">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {readme}
        </ReactMarkdown>
      </div>
    </section>
  );
}
