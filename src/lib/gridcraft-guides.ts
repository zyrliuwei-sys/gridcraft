// Shared by the guide loader and sitemap; keep public article URLs in one place.
export const gridcraftSearchGuideSlugs = [
  'gridcraft-excel-compatibility',
  'gridcraft-vs-excel',
  'what-is-gridcraft',
  'gridcraft-online',
] as const;

export const gridcraftBilingualGuideSlugs = [
  'getting-started',
  'formulas',
  'charts-and-pivots',
  ...gridcraftSearchGuideSlugs,
] as const;

export const gridcraftTestedGuideSlugs = [
  'vlookup-xlookup',
  'pivot-table-tutorial',
  'csv-import-export',
  'formulas-not-recalculating',
  'large-spreadsheet-performance',
] as const;

export const gridcraftGuideSlugs = [
  ...gridcraftBilingualGuideSlugs,
  ...gridcraftTestedGuideSlugs,
] as const;

export type GridcraftGuideSlug = (typeof gridcraftGuideSlugs)[number];
export const gridcraftSearchGuideUpdated = '2026-11-13';
