import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';

export const gridcraftGuideSlugs = [
  'getting-started',
  'formulas',
  'charts-and-pivots',
] as const;
export type GridcraftGuideSlug = (typeof gridcraftGuideSlugs)[number];

export function getGridcraftGuides(
  locale: (typeof locales)[number] = getLocale()
) {
  const options = { locale };
  return [
    {
      slug: 'getting-started',
      sample: 'budget',
      image: 'budget',
      title: m['gc.guides.start.title']({}, options),
      description: m['gc.guides.start.description']({}, options),
      tag: m['gc.resources.guide.start.tag']({}, options),
      time: m['gc.resources.guide.start.time']({}, options),
      intro: m['gc.guides.start.intro']({}, options),
      before: m['gc.guides.start.before']({}, options),
      steps: [
        m['gc.resources.guide.start.step1']({}, options),
        m['gc.resources.guide.start.step2']({}, options),
        m['gc.resources.guide.start.step3']({}, options),
        m['gc.resources.guide.start.step4']({}, options),
      ],
      after: m['gc.guides.start.after']({}, options),
      note: m['gc.resources.guide.start.note']({}, options),
      example:
        'A1: Category       B1: Amount\nA2: Groceries      B2: 120\nA3: Transport      B3: 45\nA4: Total          B4: =SUM(B2:B3)',
      exampleCaption: m['gc.guides.start.example']({}, options),
    },
    {
      slug: 'formulas',
      sample: 'grades',
      image: 'grades-formulas',
      title: m['gc.guides.formulas.title']({}, options),
      description: m['gc.guides.formulas.description']({}, options),
      tag: m['gc.resources.guide.formulas.tag']({}, options),
      time: m['gc.resources.guide.formulas.time']({}, options),
      intro: m['gc.guides.formulas.intro']({}, options),
      before: m['gc.guides.formulas.before']({}, options),
      steps: [
        m['gc.resources.guide.formulas.step1']({}, options),
        m['gc.resources.guide.formulas.step2']({}, options),
        m['gc.resources.guide.formulas.step3']({}, options),
        m['gc.resources.guide.formulas.step4']({}, options),
      ],
      after: m['gc.guides.formulas.after']({}, options),
      note: m['gc.resources.guide.formulas.note']({}, options),
      example:
        '=SUM(A2:A4)\n// 120 + 85 + 45 = 250\n\n=IF(A2>100,"Review","OK")\n// A2 = 120 → Review',
      exampleCaption: m['gc.guides.formulas.example']({}, options),
    },
    {
      slug: 'charts-and-pivots',
      sample: 'sales',
      image: 'pivot',
      title: m['gc.guides.analysis.title']({}, options),
      description: m['gc.guides.analysis.description']({}, options),
      tag: m['gc.resources.guide.analysis.tag']({}, options),
      time: m['gc.resources.guide.analysis.time']({}, options),
      intro: m['gc.guides.analysis.intro']({}, options),
      before: m['gc.guides.analysis.before']({}, options),
      steps: [
        m['gc.resources.guide.analysis.step1']({}, options),
        m['gc.resources.guide.analysis.step2']({}, options),
        m['gc.resources.guide.analysis.step3']({}, options),
        m['gc.resources.guide.analysis.step4']({}, options),
      ],
      after: m['gc.guides.analysis.after']({}, options),
      note: m['gc.resources.guide.analysis.note']({}, options),
      example:
        'Region    Product    Revenue\nNorth     Studio     480\nSouth     Studio     320\nNorth     Workshop   240\n\nNorth total: 720\nGrand total: 1,040',
      exampleCaption: m['gc.guides.analysis.example']({}, options),
    },
  ];
}
export type GridcraftGuideContent = ReturnType<
  typeof getGridcraftGuides
>[number];
