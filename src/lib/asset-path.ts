/**
 * Prefix static asset paths for GitHub Pages subpath deployment.
 * Local dev uses an empty prefix; production build uses /france.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
