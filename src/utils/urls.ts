const PLACEHOLDER_TOKENS = new Set([
  "GITHUB_REPOSITORY_URL",
  "YOUTUBE_VIDEO_URL",
  "VIDEO_ID",
  "PROJECT_URL",
  "URL",
  "LINK",
  "",
]);

const PLACEHOLDER_HINT = /^(?:[A-Z0-9]+_)*[A-Z0-9]+_URL$|^[A-Z0-9]+_REPOSITORY_URL$/;

/**
 * Returns true only when a URL is a real, absolute http(s) link.
 * Placeholder tokens such as GITHUB_REPOSITORY_URL or YOUTUBE_VIDEO_URL
 * are treated as "not configured" so no broken link is ever rendered.
 */
export function isConfiguredUrl(url?: string | null): boolean {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (PLACEHOLDER_TOKENS.has(trimmed.toUpperCase())) return false;
  if (PLACEHOLDER_HINT.test(trimmed)) return false;
  return /^https?:\/\/\S+$/i.test(trimmed);
}

const YOUTUBE_ID_PATTERNS = [
  /youtube\.com\/watch\?(?:[^#]*&)?v=([A-Za-z0-9_-]{6,})/i,
  /youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/i,
  /youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/i,
  /youtube\.com\/live\/([A-Za-z0-9_-]{6,})/i,
  /youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{6,})/i,
  /youtu\.be\/([A-Za-z0-9_-]{6,})/i,
];

/**
 * Converts a YouTube watch / short / embed URL into the embeddable form.
 * Returns null when the URL is not a YouTube link that can be embedded.
 */
export function toYouTubeEmbedUrl(url: string): string | null {
  const trimmed = url.trim();
  for (const pattern of YOUTUBE_ID_PATTERNS) {
    const match = trimmed.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}
