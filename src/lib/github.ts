const GITHUB_USER = "GonzaloRosano";
const EXCLUDED_REPOS = new Set([GITHUB_USER.toLowerCase()]);

const DESCRIPTIONS: Record<string, { en: string; es: string }> = {
  grosano: {
    en: "This personal landing page",
    es: "Esta misma landing page personal",
  },
  aruberuto: {
    en: "Landing page for Aruberuto Makoto's online Japanese course",
    es: "Landing page para el curso de japonés online de Aruberuto Makoto",
  },
  dfgroup: {
    en: "Dark Feather Group website",
    es: "Sitio web de Dark Feather Group",
  },
  plasmastudios: {
    en: "Marketing site for Plasma Studios",
    es: "Sitio de marketing de Plasma Studios",
  },
};

function authHeaders(extra?: Record<string, string>): Record<string, string> {
  const token = process.env.GITHUB_TOKEN;
  return {
    ...extra,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export type Project = {
  name: string;
  description: string | null;
  descriptionEn: string | null;
  descriptionEs: string | null;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
};

type GithubRepo = {
  name: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

export async function getPublicProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?type=public&sort=updated&per_page=100`,
      { headers: authHeaders() }
    );
    if (!res.ok) return [];
    const repos: GithubRepo[] = await res.json();

    return repos
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          !EXCLUDED_REPOS.has(repo.name.toLowerCase())
      )
      .map((repo) => {
        const dict = DESCRIPTIONS[repo.name.toLowerCase()];
        return {
          name: repo.name,
          description: repo.description,
          descriptionEn: dict?.en ?? repo.description,
          descriptionEs: dict?.es ?? repo.description,
          homepage: repo.homepage || null,
          language: repo.language,
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at,
          topics: repo.topics ?? [],
        };
      });
  } catch {
    return [];
  }
}

export async function getProjectReadme(
  repo: string,
  filename: string = "README.md"
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${repo}/contents/${filename}`,
      { headers: authHeaders({ Accept: "application/vnd.github.raw+json" }) }
    );
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}
