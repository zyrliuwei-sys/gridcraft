// Shared by the guide loader and sitemap; keep public article URLs in one place.
export const gridcraftSearchGuideSlugs = [
  'gridcraft-excel-compatibility',
  'gridcraft-vs-excel',
  'what-is-gridcraft',
  'gridcraft-online',
] as const;

export const gridcraftGuideSlugs = [
  'getting-started',
  'formulas',
  'charts-and-pivots',
  ...gridcraftSearchGuideSlugs,
] as const;

export type GridcraftGuideSlug = (typeof gridcraftGuideSlugs)[number];
export const gridcraftSearchGuideUpdated = '2026-11-05';
