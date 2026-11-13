import { ArrowUpRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';

type GuideSummary = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  time: string;
};

export function GridcraftGuideList({ guides }: { guides: GuideSummary[] }) {
  return (
    <div className="gc-guide-directory">
      {guides.map((guide) => (
        <Link
          key={guide.slug}
          href={`/guides/${guide.slug}`}
          className="gc-guide-directory-item"
        >
          <div className="gc-guide-meta">
            <span>{guide.tag}</span>
            <span>{guide.time}</span>
          </div>
          <h3>
            {guide.title}
            <ArrowUpRight size={18} aria-hidden="true" />
          </h3>
          <p>{guide.description}</p>
        </Link>
      ))}
    </div>
  );
}
