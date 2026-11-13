import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import type {
  GridcraftArticle,
  GridcraftArticleCard,
} from '@/components/gridcraft-article-body';

// These new guides are intentionally English-only. No /zh fallbacks are published.
export function getGridcraftTestedGuideCards(
  locale = getLocale()
): GridcraftArticleCard[] {
  if (locale !== 'en') return [];
  const options = { locale };
  return [
    {
      id: 'vlookup-xlookup',
      slug: 'vlookup-xlookup',
      category: 'tested',
      title: m['gc.tested_guides.vlookup_xlookup.title']({}, options),
      description: m['gc.tested_guides.vlookup_xlookup.description'](
        {},
        options
      ),
      tag: m['gc.tested_guides.vlookup_xlookup.tag']({}, options),
      time: m['gc.tested_guides.vlookup_xlookup.time']({}, options),
      image: 'grades-formulas',
      sample: 'grades',
      imageAlt: m['gc.tested_guides.vlookup_xlookup.imageAlt']({}, options),
      imageCaption: m['gc.tested_guides.vlookup_xlookup.imageCaption'](
        {},
        options
      ),
    },
    {
      id: 'pivot-table-tutorial',
      slug: 'pivot-table-tutorial',
      category: 'tested',
      title: m['gc.tested_guides.pivot_table_tutorial.title']({}, options),
      description: m['gc.tested_guides.pivot_table_tutorial.description'](
        {},
        options
      ),
      tag: m['gc.tested_guides.pivot_table_tutorial.tag']({}, options),
      time: m['gc.tested_guides.pivot_table_tutorial.time']({}, options),
      image: 'tested-pivot',
      sample: 'sales',
      imageAlt: m['gc.tested_guides.pivot_table_tutorial.imageAlt'](
        {},
        options
      ),
      imageCaption: m['gc.tested_guides.pivot_table_tutorial.imageCaption'](
        {},
        options
      ),
    },
    {
      id: 'csv-import-export',
      slug: 'csv-import-export',
      category: 'tested',
      title: m['gc.tested_guides.csv_import_export.title']({}, options),
      description: m['gc.tested_guides.csv_import_export.description'](
        {},
        options
      ),
      tag: m['gc.tested_guides.csv_import_export.tag']({}, options),
      time: m['gc.tested_guides.csv_import_export.time']({}, options),
      image: 'budget',
      sample: 'budget',
      imageAlt: m['gc.tested_guides.csv_import_export.imageAlt']({}, options),
      imageCaption: m['gc.tested_guides.csv_import_export.imageCaption'](
        {},
        options
      ),
    },
    {
      id: 'formulas-not-recalculating',
      slug: 'formulas-not-recalculating',
      category: 'tested',
      title: m['gc.tested_guides.formulas_not_recalculating.title'](
        {},
        options
      ),
      description: m['gc.tested_guides.formulas_not_recalculating.description'](
        {},
        options
      ),
      tag: m['gc.tested_guides.formulas_not_recalculating.tag']({}, options),
      time: m['gc.tested_guides.formulas_not_recalculating.time']({}, options),
      image: 'grades-formulas',
      sample: 'grades',
      imageAlt: m['gc.tested_guides.formulas_not_recalculating.imageAlt'](
        {},
        options
      ),
      imageCaption: m[
        'gc.tested_guides.formulas_not_recalculating.imageCaption'
      ]({}, options),
    },
    {
      id: 'large-spreadsheet-performance',
      slug: 'large-spreadsheet-performance',
      category: 'tested',
      title: m['gc.tested_guides.large_spreadsheet_performance.title'](
        {},
        options
      ),
      description: m[
        'gc.tested_guides.large_spreadsheet_performance.description'
      ]({}, options),
      tag: m['gc.tested_guides.large_spreadsheet_performance.tag']({}, options),
      time: m['gc.tested_guides.large_spreadsheet_performance.time'](
        {},
        options
      ),
      image: 'tested-large',
      sample: 'sales',
      imageAlt: m['gc.tested_guides.large_spreadsheet_performance.imageAlt'](
        {},
        options
      ),
      imageCaption: m[
        'gc.tested_guides.large_spreadsheet_performance.imageCaption'
      ]({}, options),
    },
  ];
}

export function getGridcraftTestedGuides(
  locale = getLocale()
): GridcraftArticle[] {
  if (locale !== 'en') return [];
  const options = { locale };
  const cards = getGridcraftTestedGuideCards(locale);
  return [
    {
      ...cards[0],

      updated: '2026-11-13',
      intro: m['gc.tested_guides.vlookup_xlookup.intro']({}, options),
      sections: [
        {
          id: 'sample',
          title: m['gc.tested_guides.vlookup_xlookup.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.vlookup_xlookup.sections.0.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.vlookup_xlookup.sections.0.paragraphs.1'](
              {},
              options
            ),
          ],
          example: {
            code: '=VLOOKUP(20,A2:B5,2,FALSE)\n=XLOOKUP(20,A2:A5,B2:B5)',
            caption: m[
              'gc.tested_guides.vlookup_xlookup.sections.0.example.caption'
            ]({}, options),
          },
          links: [
            {
              href: '/guide-samples/lookup.csv',
              label: m[
                'gc.tested_guides.vlookup_xlookup.sections.0.links.0.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'vlookup',
          title: m['gc.tested_guides.vlookup_xlookup.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.vlookup_xlookup.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.vlookup_xlookup.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          table: {
            headers: [
              m['gc.tested_guides.vlookup_xlookup.sections.1.table.headers.0'](
                {},
                options
              ),
              m['gc.tested_guides.vlookup_xlookup.sections.1.table.headers.1'](
                {},
                options
              ),
            ],
            rows: [
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.0.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.0.1'](
                  {},
                  options
                ),
              ],
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.1.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.1.1'](
                  {},
                  options
                ),
              ],
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.2.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.2.1'](
                  {},
                  options
                ),
              ],
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.3.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.3.1'](
                  {},
                  options
                ),
              ],
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.4.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.4.1'](
                  {},
                  options
                ),
              ],
              [
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.5.0'](
                  {},
                  options
                ),
                m['gc.tested_guides.vlookup_xlookup.sections.1.table.rows.5.1'](
                  {},
                  options
                ),
              ],
            ],
          },
        },
        {
          id: 'xlookup',
          title: m['gc.tested_guides.vlookup_xlookup.sections.2.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.vlookup_xlookup.sections.2.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.vlookup_xlookup.sections.2.paragraphs.1'](
              {},
              options
            ),
            m['gc.tested_guides.vlookup_xlookup.sections.2.paragraphs.2'](
              {},
              options
            ),
          ],
          example: {
            code: '=XLOOKUP(99,A2:A5,B2:B5,"missing")\n=XLOOKUP(25,A2:A5,B2:B5,"missing",-1)\n=XLOOKUP(20,A2:A5,B2:B5,"missing",0,-1)',
            caption: m[
              'gc.tested_guides.vlookup_xlookup.sections.2.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'check',
          title: m['gc.tested_guides.vlookup_xlookup.sections.3.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.vlookup_xlookup.sections.3.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.vlookup_xlookup.sections.3.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guides/csv-import-export',
              label: m[
                'gc.tested_guides.vlookup_xlookup.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/formulas-not-recalculating',
              label: m[
                'gc.tested_guides.vlookup_xlookup.sections.3.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.19.1',
          label: m['gc.tested_guides.vlookup_xlookup.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.19.1/docs/cli.md',
          label: m['gc.tested_guides.vlookup_xlookup.sources.1.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'formulas',
        'csv-import-export',
        'gridcraft-excel-compatibility',
      ],
    },
    {
      ...cards[1],

      updated: '2026-11-13',
      intro: m['gc.tested_guides.pivot_table_tutorial.intro']({}, options),
      sections: [
        {
          id: 'source',
          title: m['gc.tested_guides.pivot_table_tutorial.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.pivot_table_tutorial.sections.0.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.pivot_table_tutorial.sections.0.paragraphs.1'](
              {},
              options
            ),
          ],
          example: {
            code: 'Region   Product    Revenue\nNorth    Studio     480\nSouth    Studio     320\nNorth    Workshop   240',
            caption: m[
              'gc.tested_guides.pivot_table_tutorial.sections.0.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'build',
          title: m['gc.tested_guides.pivot_table_tutorial.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.pivot_table_tutorial.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.pivot_table_tutorial.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          table: {
            headers: [
              m[
                'gc.tested_guides.pivot_table_tutorial.sections.1.table.headers.0'
              ]({}, options),
              m[
                'gc.tested_guides.pivot_table_tutorial.sections.1.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.tested_guides.pivot_table_tutorial.sections.1.table.rows.2.1'
                ]({}, options),
              ],
            ],
          },
        },
        {
          id: 'chart',
          title: m['gc.tested_guides.pivot_table_tutorial.sections.2.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.pivot_table_tutorial.sections.2.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.pivot_table_tutorial.sections.2.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guide-samples/pivot.xlsx',
              label: m[
                'gc.tested_guides.pivot_table_tutorial.sections.2.links.0.label'
              ]({}, options),
            },
          ],
          figure: {
            image: 'pivot',
            alt: m[
              'gc.tested_guides.pivot_table_tutorial.sections.2.figure.alt'
            ]({}, options),
            caption: m[
              'gc.tested_guides.pivot_table_tutorial.sections.2.figure.caption'
            ]({}, options),
          },
        },
        {
          id: 'refresh',
          title: m['gc.tested_guides.pivot_table_tutorial.sections.3.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.pivot_table_tutorial.sections.3.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.pivot_table_tutorial.sections.3.paragraphs.1'](
              {},
              options
            ),
            m['gc.tested_guides.pivot_table_tutorial.sections.3.paragraphs.2'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guides/csv-import-export',
              label: m[
                'gc.tested_guides.pivot_table_tutorial.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/charts-and-pivots',
              label: m[
                'gc.tested_guides.pivot_table_tutorial.sections.3.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.19.1',
          label: m['gc.tested_guides.pivot_table_tutorial.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.19.1/docs/cli.md',
          label: m['gc.tested_guides.pivot_table_tutorial.sources.1.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'charts-and-pivots',
        'csv-import-export',
        'large-spreadsheet-performance',
      ],
    },
    {
      ...cards[2],

      updated: '2026-11-13',
      intro: m['gc.tested_guides.csv_import_export.intro']({}, options),
      sections: [
        {
          id: 'encoding',
          title: m['gc.tested_guides.csv_import_export.sections.0.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.csv_import_export.sections.0.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.0.paragraphs.1'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guide-samples/utf8.csv',
              label: m[
                'gc.tested_guides.csv_import_export.sections.0.links.0.label'
              ]({}, options),
            },
            {
              href: '/guide-samples/quoted.csv',
              label: m[
                'gc.tested_guides.csv_import_export.sections.0.links.1.label'
              ]({}, options),
            },
          ],
        },
        {
          id: 'delimiter',
          title: m['gc.tested_guides.csv_import_export.sections.1.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.csv_import_export.sections.1.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.1.paragraphs.1'](
              {},
              options
            ),
          ],
          table: {
            headers: [
              m[
                'gc.tested_guides.csv_import_export.sections.1.table.headers.0'
              ]({}, options),
              m[
                'gc.tested_guides.csv_import_export.sections.1.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.2.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.3.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.4.0'
                ]({}, options),
                m[
                  'gc.tested_guides.csv_import_export.sections.1.table.rows.4.1'
                ]({}, options),
              ],
            ],
          },
        },
        {
          id: 'types',
          title: m['gc.tested_guides.csv_import_export.sections.2.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.csv_import_export.sections.2.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.2.paragraphs.1'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.2.paragraphs.2'](
              {},
              options
            ),
          ],
          example: {
            code: '{"command":"file.open","params":{"path":"/absolute/path/utf8.csv","csvAsText":true}}',
            caption: m[
              'gc.tested_guides.csv_import_export.sections.2.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'export',
          title: m['gc.tested_guides.csv_import_export.sections.3.title'](
            {},
            options
          ),
          paragraphs: [
            m['gc.tested_guides.csv_import_export.sections.3.paragraphs.0'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.3.paragraphs.1'](
              {},
              options
            ),
            m['gc.tested_guides.csv_import_export.sections.3.paragraphs.2'](
              {},
              options
            ),
          ],
          links: [
            {
              href: '/guide-samples/semicolon.csv',
              label: m[
                'gc.tested_guides.csv_import_export.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: '/guide-samples/tabs.tsv',
              label: m[
                'gc.tested_guides.csv_import_export.sections.3.links.1.label'
              ]({}, options),
            },
            {
              href: '/guides/formulas-not-recalculating',
              label: m[
                'gc.tested_guides.csv_import_export.sections.3.links.2.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.19.1',
          label: m['gc.tested_guides.csv_import_export.sources.0.label'](
            {},
            options
          ),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.19.1/docs/cli.md',
          label: m['gc.tested_guides.csv_import_export.sources.1.label'](
            {},
            options
          ),
        },
      ],
      relatedSlugs: [
        'formulas-not-recalculating',
        'vlookup-xlookup',
        'gridcraft-excel-compatibility',
      ],
    },
    {
      ...cards[3],

      updated: '2026-11-13',
      intro: m['gc.tested_guides.formulas_not_recalculating.intro'](
        {},
        options
      ),
      sections: [
        {
          id: 'baseline',
          title: m[
            'gc.tested_guides.formulas_not_recalculating.sections.0.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.0.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.0.paragraphs.1'
            ]({}, options),
          ],
          example: {
            code: 'A1: 2\nB1: =A1*3     → 6\nChange A1 to 5 → B1 becomes 15',
            caption: m[
              'gc.tested_guides.formulas_not_recalculating.sections.0.example.caption'
            ]({}, options),
          },
        },
        {
          id: 'manual',
          title: m[
            'gc.tested_guides.formulas_not_recalculating.sections.1.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.1.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.1.paragraphs.1'
            ]({}, options),
          ],
          table: {
            headers: [
              m[
                'gc.tested_guides.formulas_not_recalculating.sections.1.table.headers.0'
              ]({}, options),
              m[
                'gc.tested_guides.formulas_not_recalculating.sections.1.table.headers.1'
              ]({}, options),
              m[
                'gc.tested_guides.formulas_not_recalculating.sections.1.table.headers.2'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.0.1'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.0.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.1.1'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.1.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.2.1'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.2.2'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.3.1'
                ]({}, options),
                m[
                  'gc.tested_guides.formulas_not_recalculating.sections.1.table.rows.3.2'
                ]({}, options),
              ],
            ],
          },
        },
        {
          id: 'text',
          title: m[
            'gc.tested_guides.formulas_not_recalculating.sections.2.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.2.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.2.paragraphs.1'
            ]({}, options),
          ],
        },
        {
          id: 'references',
          title: m[
            'gc.tested_guides.formulas_not_recalculating.sections.3.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.3.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.3.paragraphs.1'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.3.paragraphs.2'
            ]({}, options),
          ],
        },
        {
          id: 'report',
          title: m[
            'gc.tested_guides.formulas_not_recalculating.sections.4.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.4.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.formulas_not_recalculating.sections.4.paragraphs.1'
            ]({}, options),
          ],
          links: [
            {
              href: '/guides/vlookup-xlookup',
              label: m[
                'gc.tested_guides.formulas_not_recalculating.sections.4.links.0.label'
              ]({}, options),
            },
            {
              href: '/contact',
              label: m[
                'gc.tested_guides.formulas_not_recalculating.sections.4.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.19.1',
          label: m[
            'gc.tested_guides.formulas_not_recalculating.sources.0.label'
          ]({}, options),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.19.1/docs/cli.md',
          label: m[
            'gc.tested_guides.formulas_not_recalculating.sources.1.label'
          ]({}, options),
        },
      ],
      relatedSlugs: ['formulas', 'vlookup-xlookup', 'csv-import-export'],
    },
    {
      ...cards[4],

      updated: '2026-11-13',
      intro: m['gc.tested_guides.large_spreadsheet_performance.intro'](
        {},
        options
      ),
      sections: [
        {
          id: 'workload',
          title: m[
            'gc.tested_guides.large_spreadsheet_performance.sections.0.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.0.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.0.paragraphs.1'
            ]({}, options),
          ],
        },
        {
          id: 'observations',
          title: m[
            'gc.tested_guides.large_spreadsheet_performance.sections.1.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.1.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.1.paragraphs.1'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.1.paragraphs.2'
            ]({}, options),
          ],
          table: {
            headers: [
              m[
                'gc.tested_guides.large_spreadsheet_performance.sections.1.table.headers.0'
              ]({}, options),
              m[
                'gc.tested_guides.large_spreadsheet_performance.sections.1.table.headers.1'
              ]({}, options),
            ],
            rows: [
              [
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.0.0'
                ]({}, options),
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.0.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.1.0'
                ]({}, options),
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.1.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.2.0'
                ]({}, options),
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.2.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.3.0'
                ]({}, options),
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.3.1'
                ]({}, options),
              ],
              [
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.4.0'
                ]({}, options),
                m[
                  'gc.tested_guides.large_spreadsheet_performance.sections.1.table.rows.4.1'
                ]({}, options),
              ],
            ],
          },
        },
        {
          id: 'limits',
          title: m[
            'gc.tested_guides.large_spreadsheet_performance.sections.2.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.2.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.2.paragraphs.1'
            ]({}, options),
          ],
        },
        {
          id: 'repeat',
          title: m[
            'gc.tested_guides.large_spreadsheet_performance.sections.3.title'
          ]({}, options),
          paragraphs: [
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.3.paragraphs.0'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.3.paragraphs.1'
            ]({}, options),
            m[
              'gc.tested_guides.large_spreadsheet_performance.sections.3.paragraphs.2'
            ]({}, options),
          ],
          links: [
            {
              href: '/guides/formulas-not-recalculating',
              label: m[
                'gc.tested_guides.large_spreadsheet_performance.sections.3.links.0.label'
              ]({}, options),
            },
            {
              href: '/guides/pivot-table-tutorial',
              label: m[
                'gc.tested_guides.large_spreadsheet_performance.sections.3.links.1.label'
              ]({}, options),
            },
          ],
        },
      ],
      sources: [
        {
          href: 'https://github.com/storytold/gridcraft/releases/tag/v0.19.1',
          label: m[
            'gc.tested_guides.large_spreadsheet_performance.sources.0.label'
          ]({}, options),
        },
        {
          href: 'https://github.com/storytold/gridcraft/blob/v0.19.1/docs/cli.md',
          label: m[
            'gc.tested_guides.large_spreadsheet_performance.sources.1.label'
          ]({}, options),
        },
      ],
      relatedSlugs: [
        'formulas-not-recalculating',
        'pivot-table-tutorial',
        'gridcraft-vs-excel',
      ],
    },
  ];
}
