import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li className="flex items-center">
          <span className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-default">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </span>
        </li>
        <li className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
          <span className="text-muted-foreground cursor-default">Mexico Travel</span>
        </li>
        <li className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
          <span className="text-primary font-medium">Is Puerto Vallarta Safe 2026</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
