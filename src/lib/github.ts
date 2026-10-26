const GITHUB_USER = "GonzaloRosano";

export async function getProjectReadme(
  repo: string,
  filename: string = "README.md"
): Promise<string | null> {
  try {
    // raw.githubusercontent no cuenta contra el rate limit de la API (403 sin token).
    const res = await fetch(
      `https://raw.githubusercontent.com/${GITHUB_USER}/${repo}/HEAD/${filename}`
    );
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}
