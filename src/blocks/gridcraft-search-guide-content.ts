import { gridcraftSearchGuideUpdated } from '@/lib/gridcraft-guides';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import type {
  GridcraftArticle,
  GridcraftArticleCard,
} from '@/components/gridcraft-article-body';

type Locale = (typeof locales)[number];

// Cards stay separate so the homepage does not load the full article messages.
export function getGridcraftSearchGuideCards(
  locale: Locale = getLocale()
): GridcraftArticleCard[] {
  const options = { locale };
  return [
    {
      slug: 'gridcraft-excel-compatibility',
      sample: 'budget',
      image: 'budget',
      imageAlt: m['gc.search_guides.gridcraft_excel_compatibility.imageAlt'](
        {},
        options
      ),
      imageCaption: m[
        'gc.search_guides.gridcraft_excel_compatibility.imageCaption'
      ]({}, options),
      title: m['gc.search_guides.gridcraft_excel_compatibility.title'](
        {},
        options
      ),
      description: m[
        'gc.search_guides.gridcraft_excel_compatibility.description'
      ]({}, options),
      tag: m['gc.search_guides.gridcraft_excel_compatibility.tag']({}, options),
      time: m['gc.search_guides.gridcraft_excel_compatibility.time'](
        {},
        options
      ),
      id: 'gridcraft-excel-compatibility',
      category: 'essentials',
    },
    {
      slug: 'gridcraft-vs-excel',
      sample: 'sales',
      image: 'hero',
      imageAlt: m['gc.search_guides.gridcraft_vs_excel.imageAlt']({}, options),
      imageCaption: m['gc.search_guides.gridcraft_vs_excel.imageCaption'](
        {},
        options
      ),
      title: m['gc.search_guides.gridcraft_vs_excel.title']({}, options),
      description: m['gc.search_guides.gridcraft_vs_excel.description'](
        {},
        options
      ),
      tag: m['gc.search_guides.gridcraft_vs_excel.tag']({}, options),
      time: m['gc.search_guides.gridcraft_vs_excel.time']({}, options),
      id: 'gridcraft-vs-excel',
      category: 'essentials',
    },
    {
      slug: 'what-is-gridcraft',
      sample: 'sales',
      image: 'hero',
      imageAlt: m['gc.search_guides.what_is_gridcraft.imageAlt']({}, options),
      imageCaption: m['gc.search_guides.what_is_gridcraft.imageCaption'](
        {},
        options
      ),
      title: m['gc.search_guides.what_is_gridcraft.title']({}, options),
      description: m['gc.search_guides.what_is_gridcraft.description'](
        {},
        options
      ),
      tag: m['gc.search_guides.what_is_gridcraft.tag']({}, options),
      time: m['gc.search_guides.what_is_gridcraft.time']({}, options),
      id: 'what-is-gridcraft',
      category: 'essentials',
    },
    {
      slug: 'gridcraft-online',
      sample: 'budget',
      image: 'budget',
      imageAlt: m['gc.search_guides.gridcraft_online.imageAlt']({}, options),
      imageCaption: m['gc.search_guides.gridcraft_online.imageCaption'](
        {},
        options
      ),
      title: m['gc.search_guides.gridcraft_online.title']({}, options),
      description: m['gc.search_guides.gridcraft_online.description'](
        {},
        options
      ),
      tag: m['gc.search_guides.gridcraft_online.tag']({}, options),
      time: m['gc.search_guides.gridcraft_online.time']({}, options),
      id: 'gridcraft-online',
      category: 'essentials',
    },
  ];
}

export function getGridcraftSearchGuides(
  locale: Locale = getLocale()
): GridcraftArticle[] {
  const options = { locale };
  const cards = getGridcraftSearchGuideCards(locale);
  return [
    {
      ...cards[0],
      updated: gridcraftSearchGuideUpdated,
      intro: m['gc.search_guides.gridcraft_excel_compatibility.intro'](
        {},
        options
      ),
      sections: [
        {
          id: 'prepare',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.0.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.0.paragraphs.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.0.paragraphs.1'
            ]({}, options),
          ],
          links: [
            {
              href: '/#download',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.0.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'open-edit-save',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.1.title'
          ]({}, options),
          steps: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.1.steps.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.1.steps.1'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.1.steps.2'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.1.steps.3'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.1.steps.4'
            ]({}, options),
          ],
          links: [
            {
              href: '/editor?sample=budget',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.1.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'check-formulas',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.2.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.2.paragraphs.0'
            ]({}, options),
          ],
          example: {
            code: 'B2: 120\nB3: 45\nB4: =SUM(B2:B3)\nB5: =IF(B4>150,"Review","OK")\nB6: =B4-150',
            caption: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.2.example.caption'
            ]({}, options),
          },
          figure: {
            image: 'grades-formulas',
            alt: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.2.figure.alt'
            ]({}, options),
            caption: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.2.figure.caption'
            ]({}, options),
          },
          links: [
            {
              href: '/guides/formulas',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.2.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'formats',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.3.title'
          ]({}, options),
          table: {
            headers: [
              m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.headers.0'
              ]({}, options),
              m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                '.xlsx',
                m[
                  'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.rows.0.1'
                ]({}, options),
              ],
              [
                '.xlsm',
                m[
                  'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.rows.1.1'
                ]({}, options),
              ],
              [
                '.xls',
                m[
                  'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.rows.2.1'
                ]({}, options),
              ],
              [
                '.xlsb / .ods',
                m[
                  'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.rows.3.1'
                ]({}, options),
              ],
              [
                '.csv / .tsv',
                m[
                  'gc.search_guides.gridcraft_excel_compatibility.sections.3.table.rows.4.1'
                ]({}, options),
              ],
            ],
          },
          links: [
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/docs/file-format-parity.md',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/docs/xlsb-import.md',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.3.links.1.label'
              ]({}, options),
            },
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/docs/ods-import.md',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.3.links.2.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'review-charts',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.4.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.4.paragraphs.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.4.paragraphs.1'
            ]({}, options),
          ],
          figure: {
            image: 'format-chart',
            alt: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.4.figure.alt'
            ]({}, options),
            caption: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.4.figure.caption'
            ]({}, options),
          },
        },
        {
          id: 'reconcile',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.5.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.5.paragraphs.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.5.paragraphs.1'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.5.paragraphs.2'
            ]({}, options),
          ],
          example: {
            code: 'Workbook: inventory-test.xlsx\nBaseline total: 240\nChange: increase one quantity by 5\nExpected total: 245\nCheck: GridCraft → saved XLSX → Excel',
            caption: m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.5.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'diagnose-differences',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.6.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.6.paragraphs.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.6.paragraphs.1'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.6.paragraphs.2'
            ]({}, options),
          ],
        },
        {
          id: 'exchange-routine',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.7.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.7.paragraphs.0'
            ]({}, options),
            m[
              'gc.search_guides.gridcraft_excel_compatibility.sections.7.paragraphs.1'
            ]({}, options),
          ],
          links: [
            {
              href: '/guides/gridcraft-online#save',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.7.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'questions',
          title: m[
            'gc.search_guides.gridcraft_excel_compatibility.sections.8.title'
          ]({}, options),
          questions: [
            {
              question: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.0.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.0.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.1.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.1.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.2.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.2.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.3.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.questions.3.answer'
              ]({}, options),
            },
          ],
          links: [
            {
              href: '/guides/gridcraft-vs-excel',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.links.0.label'
              ]({}, options),
            },
            {
              href: '/#learn',
              label: m[
                'gc.search_guides.gridcraft_excel_compatibility.sections.8.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/docs/file-format-parity.md',
          label: m[
            'gc.search_guides.gridcraft_excel_compatibility.sources.0.label'
          ]({}, options),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
          label: m[
            'gc.search_guides.gridcraft_excel_compatibility.sources.1.label'
          ]({}, options),
        },
      ],
      relatedSlugs: ['gridcraft-vs-excel', 'gridcraft-online', 'formulas'],
    },
    {
      ...cards[1],
      updated: gridcraftSearchGuideUpdated,
      intro: m['gc.search_guides.gridcraft_vs_excel.intro']({}, options),
      sections: [
        {
          id: 'quick-comparison',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.0.paragraphs.0'](
              {},
              options
            ),
          ],
          table: {
            headers: [
              m[
                'gc.search_guides.gridcraft_vs_excel.sections.0.table.headers.0'
              ]({}, options),
              'GridCraft',
              'Excel',
            ],
            rows: [
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.0.1'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.0.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.1.1'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.1.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.2.1'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.2.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.3.1'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.3.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.4.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.4.1'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.0.table.rows.4.2'
                ]({}, options),
              ],
            ],
          },
          links: [
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.0.links.0.label'
              ]({}, options),
            },
            {
              href: 'https://www.microsoft.com/en-us/microsoft-365/excel',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.0.links.1.label'
              ]({}, options),
            },
            {
              href: 'https://support.microsoft.com/en-us/excel/work-with-vba-macros-in-excel-for-the-web',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.0.links.2.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'when-gridcraft',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          figure: {
            image: 'budget',
            alt: m['gc.search_guides.gridcraft_vs_excel.sections.1.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.gridcraft_vs_excel.sections.1.figure.caption'
            ]({}, options),
          },
          links: [
            {
              href: '/editor?sample=budget',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.1.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'when-excel',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.2.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.2.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.2.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/ROADMAP.md',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.2.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/gridcraft-excel-compatibility',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.2.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'evaluation',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.3.title'](
            {},
            options
          ),
          steps: [
            m['gc.search_guides.gridcraft_vs_excel.sections.3.steps.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.3.steps.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.3.steps.2'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.3.steps.3'](
              {},
              options
            ),
          ],
          figure: {
            image: 'pivot',
            alt: m['gc.search_guides.gridcraft_vs_excel.sections.3.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.gridcraft_vs_excel.sections.3.figure.caption'
            ]({}, options),
          },
        },
        {
          id: 'three-scenarios',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.4.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.4.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.4.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.4.paragraphs.2'](
              {},
              options
            ),
          ],
        },
        {
          id: 'decision-scorecard',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.5.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.5.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.5.paragraphs.1'](
              {},
              options
            ),
          ],
          table: {
            headers: [
              m[
                'gc.search_guides.gridcraft_vs_excel.sections.5.table.headers.0'
              ]({}, options),
              m[
                'gc.search_guides.gridcraft_vs_excel.sections.5.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.2.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_vs_excel.sections.5.table.rows.3.1'
                ]({}, options),
              ],
            ],
          },
        },
        {
          id: 'cost-of-switching',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.6.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_vs_excel.sections.6.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.6.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_vs_excel.sections.6.paragraphs.2'](
              {},
              options
            ),
          ],
        },
        {
          id: 'questions',
          title: m['gc.search_guides.gridcraft_vs_excel.sections.7.title'](
            {},
            options
          ),
          questions: [
            {
              question: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.0.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.0.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.1.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.1.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.2.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.2.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.3.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.3.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.4.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.questions.4.answer'
              ]({}, options),
            },
          ],
          links: [
            {
              href: '/guides/gridcraft-online',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.links.0.label'
              ]({}, options),
            },
            {
              href: '/#compare',
              label: m[
                'gc.search_guides.gridcraft_vs_excel.sections.7.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
          label: m['gc.search_guides.gridcraft_vs_excel.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/ROADMAP.md',
          label: m['gc.search_guides.gridcraft_vs_excel.sources.1.label'](
            {},
            options
          ),
        },
        {
          href: 'https://www.microsoft.com/en-us/microsoft-365/excel',
          label: m['gc.search_guides.gridcraft_vs_excel.sources.2.label'](
            {},
            options
          ),
        },
        {
          href: 'https://support.microsoft.com/en-us/excel/work-with-vba-macros-in-excel-for-the-web',
          label: m['gc.search_guides.gridcraft_vs_excel.sources.3.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'gridcraft-excel-compatibility',
        'what-is-gridcraft',
        'gridcraft-online',
      ],
    },
    {
      ...cards[2],
      updated: gridcraftSearchGuideUpdated,
      intro: m['gc.search_guides.what_is_gridcraft.intro']({}, options),
      sections: [
        {
          id: 'identity',
          title: m['gc.search_guides.what_is_gridcraft.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.0.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.0.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: 'https://getartcraft.com/apps/gridcraft',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.0.links.0.label'
              ]({}, options),
            },
            {
              href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.0.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'workspace',
          title: m['gc.search_guides.what_is_gridcraft.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          figure: {
            image: 'grades-formulas',
            alt: m['gc.search_guides.what_is_gridcraft.sections.1.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.what_is_gridcraft.sections.1.figure.caption'
            ]({}, options),
          },
          links: [
            {
              href: '/guides/getting-started',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.1.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/formulas',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.1.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'features',
          title: m['gc.search_guides.what_is_gridcraft.sections.2.title'](
            {},
            options
          ),
          bullets: [
            m['gc.search_guides.what_is_gridcraft.sections.2.bullets.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.2.bullets.1'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.2.bullets.2'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.2.bullets.3'](
              {},
              options
            ),
          ],
          figure: {
            image: 'pivot',
            alt: m['gc.search_guides.what_is_gridcraft.sections.2.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.what_is_gridcraft.sections.2.figure.caption'
            ]({}, options),
          },
          links: [
            {
              href: '/guides/charts-and-pivots',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.2.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'choose-version',
          title: m['gc.search_guides.what_is_gridcraft.sections.3.title'](
            {},
            options
          ),
          table: {
            headers: [
              m[
                'gc.search_guides.what_is_gridcraft.sections.3.table.headers.0'
              ]({}, options),
              m[
                'gc.search_guides.what_is_gridcraft.sections.3.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.2.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.search_guides.what_is_gridcraft.sections.3.table.rows.3.1'
                ]({}, options),
              ],
            ],
          },
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.3.paragraphs.0'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/#download',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/gridcraft-online',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.3.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'first-session',
          title: m['gc.search_guides.what_is_gridcraft.sections.4.title'](
            {},
            options
          ),
          steps: [
            m['gc.search_guides.what_is_gridcraft.sections.4.steps.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.4.steps.1'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.4.steps.2'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.4.steps.3'](
              {},
              options
            ),
          ],
        },
        {
          id: 'worked-example',
          title: m['gc.search_guides.what_is_gridcraft.sections.5.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.5.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.5.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.5.paragraphs.2'](
              {},
              options
            ),
          ],
          example: {
            code: 'A1: Item        B1: Quantity   C1: Unit cost   D1: Line total\nA2: Notebooks   B2: 12         C2: 4           D2: =B2*C2\nA3: Markers     B3: 3          C3: 6           D3: =B3*C3\nA4: Folders     B4: 12         C4: 2           D4: =B4*C4\nA5: Total                                     D5: =SUM(D2:D4)',
            caption: m[
              'gc.search_guides.what_is_gridcraft.sections.5.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'download-checklist',
          title: m['gc.search_guides.what_is_gridcraft.sections.6.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.6.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.6.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.6.paragraphs.2'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/#download',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.6.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'learning-path',
          title: m['gc.search_guides.what_is_gridcraft.sections.7.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.what_is_gridcraft.sections.7.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.what_is_gridcraft.sections.7.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guides/formulas',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.7.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/charts-and-pivots',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.7.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'questions',
          title: m['gc.search_guides.what_is_gridcraft.sections.8.title'](
            {},
            options
          ),
          questions: [
            {
              question: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.0.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.0.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.1.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.1.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.2.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.2.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.3.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.what_is_gridcraft.sections.8.questions.3.answer'
              ]({}, options),
            },
          ],
          links: [
            {
              href: '/guides/gridcraft-vs-excel',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.8.links.0.label'
              ]({}, options),
            },
            {
              href: '/#learn',
              label: m[
                'gc.search_guides.what_is_gridcraft.sections.8.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
          label: m['gc.search_guides.what_is_gridcraft.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/ROADMAP.md',
          label: m['gc.search_guides.what_is_gridcraft.sources.1.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.7.0',
          label: m['gc.search_guides.what_is_gridcraft.sources.2.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'getting-started',
        'gridcraft-online',
        'gridcraft-vs-excel',
      ],
    },
    {
      ...cards[3],
      updated: gridcraftSearchGuideUpdated,
      intro: m['gc.search_guides.gridcraft_online.intro']({}, options),
      sections: [
        {
          id: 'launch',
          title: m['gc.search_guides.gridcraft_online.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.0.paragraphs.0'](
              {},
              options
            ),
          ],
          steps: [
            m['gc.search_guides.gridcraft_online.sections.0.steps.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.0.steps.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.0.steps.2'](
              {},
              options
            ),
          ],
          figure: {
            image: 'online-launch',
            alt: m['gc.search_guides.gridcraft_online.sections.0.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.gridcraft_online.sections.0.figure.caption'
            ]({}, options),
            height: 1111,
          },
          links: [
            {
              href: '/editor?sample=budget',
              label: m[
                'gc.search_guides.gridcraft_online.sections.0.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'open-edit',
          title: m['gc.search_guides.gridcraft_online.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guides/gridcraft-excel-compatibility',
              label: m[
                'gc.search_guides.gridcraft_online.sections.1.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/getting-started',
              label: m[
                'gc.search_guides.gridcraft_online.sections.1.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'save',
          title: m['gc.search_guides.gridcraft_online.sections.2.title'](
            {},
            options
          ),
          steps: [
            m['gc.search_guides.gridcraft_online.sections.2.steps.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.2.steps.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.2.steps.2'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.2.steps.3'](
              {},
              options
            ),
          ],
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.2.paragraphs.0'](
              {},
              options
            ),
          ],
          figure: {
            image: 'format-chart',
            alt: m['gc.search_guides.gridcraft_online.sections.2.figure.alt'](
              {},
              options
            ),
            caption: m[
              'gc.search_guides.gridcraft_online.sections.2.figure.caption'
            ]({}, options),
          },
        },
        {
          id: 'troubleshooting',
          title: m['gc.search_guides.gridcraft_online.sections.3.title'](
            {},
            options
          ),
          table: {
            headers: [
              m['gc.search_guides.gridcraft_online.sections.3.table.headers.0'](
                {},
                options
              ),
              m['gc.search_guides.gridcraft_online.sections.3.table.headers.1'](
                {},
                options
              ),
            ],
            rows: [
              [
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.2.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.3.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.4.0'
                ]({}, options),
                m[
                  'gc.search_guides.gridcraft_online.sections.3.table.rows.4.1'
                ]({}, options),
              ],
            ],
          },
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.3.paragraphs.0'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/#download',
              label: m[
                'gc.search_guides.gridcraft_online.sections.3.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'first-ten-minutes',
          title: m['gc.search_guides.gridcraft_online.sections.4.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.4.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.4.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.4.paragraphs.2'](
              {},
              options
            ),
          ],
        },
        {
          id: 'file-hygiene',
          title: m['gc.search_guides.gridcraft_online.sections.5.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.5.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.5.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.5.paragraphs.2'](
              {},
              options
            ),
          ],
        },
        {
          id: 'loading-or-file',
          title: m['gc.search_guides.gridcraft_online.sections.6.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.search_guides.gridcraft_online.sections.6.paragraphs.0'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.6.paragraphs.1'](
              {},
              options
            ),
            m['gc.search_guides.gridcraft_online.sections.6.paragraphs.2'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guides/gridcraft-excel-compatibility#diagnose-differences',
              label: m[
                'gc.search_guides.gridcraft_online.sections.6.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'questions',
          title: m['gc.search_guides.gridcraft_online.sections.7.title'](
            {},
            options
          ),
          questions: [
            {
              question: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.0.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.0.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.1.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.1.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.2.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.2.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.3.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.3.answer'
              ]({}, options),
            },
            {
              question: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.4.question'
              ]({}, options),
              answer: m[
                'gc.search_guides.gridcraft_online.sections.7.questions.4.answer'
              ]({}, options),
            },
          ],
          links: [
            {
              href: '/guides/what-is-gridcraft',
              label: m[
                'gc.search_guides.gridcraft_online.sections.7.links.0.label'
              ]({}, options),
            },
            {
              href: '/#learn',
              label: m[
                'gc.search_guides.gridcraft_online.sections.7.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.7.0/README.md',
          label: m['gc.search_guides.gridcraft_online.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: '/editor-app/HOSTING.md',
          label: m['gc.search_guides.gridcraft_online.sources.1.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'getting-started',
        'gridcraft-excel-compatibility',
        'what-is-gridcraft',
      ],
    },
  ];
}
