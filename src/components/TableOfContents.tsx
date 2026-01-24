import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

const tocItems: TOCItem[] = [
  { id: 'overview', label: 'Quick Answer: Is Puerto Vallarta Safe?' },
  { id: 'crime-stats', label: '2026 Crime Statistics & Data' },
  { 
    id: 'safe-areas', 
    label: 'Safest Neighborhoods to Stay',
    subItems: [
      { id: 'romantic-zone', label: 'Romantic Zone' },
      { id: 'hotel-zone', label: 'Hotel Zone' },
      { id: 'marina-vallarta', label: 'Marina Vallarta' },
    ]
  },
  { id: 'tips', label: 'Essential Safety Tips for 2026' },
  { id: 'transport', label: 'Transportation Safety Guide' },
  { id: 'nightlife', label: 'Nightlife & Evening Safety' },
  { id: 'comparison', label: 'Puerto Vallarta vs Other Destinations' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="card-bordered p-6 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-primary" />
        <h2 className="font-display text-lg font-semibold">Table of Contents</h2>
      </div>
      <nav aria-label="Table of contents">
        <ol className="space-y-2">
          {tocItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="toc-link w-full text-left flex items-start gap-2"
              >
                <span className="text-primary font-medium">{index + 1}.</span>
                <span>{item.label}</span>
              </button>
              {item.subItems && (
                <ol className="ml-6 mt-1 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => scrollToSection(subItem.id)}
                        className="toc-link w-full text-left text-sm flex items-start gap-2"
                      >
                        <span className="text-muted-foreground">
                          {index + 1}.{subIndex + 1}
                        </span>
                        <span>{subItem.label}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default TableOfContents;
