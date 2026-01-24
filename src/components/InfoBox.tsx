import { Lightbulb, AlertTriangle, Info } from 'lucide-react';
import { ReactNode } from 'react';

interface InfoBoxProps {
  type: 'tip' | 'warning' | 'info';
  title?: string;
  children: ReactNode;
}

const InfoBox = ({ type, title, children }: InfoBoxProps) => {
  const icons = {
    tip: <Lightbulb className="w-5 h-5 text-palm" />,
    warning: <AlertTriangle className="w-5 h-5 text-coral" />,
    info: <Info className="w-5 h-5 text-primary" />,
  };

  const styles = {
    tip: 'info-box-tip',
    warning: 'info-box-warning',
    info: 'info-box-info',
  };

  const defaultTitles = {
    tip: 'Pro Tip',
    warning: 'Important Warning',
    info: 'Good to Know',
  };

  return (
    <div className={`info-box ${styles[type]} my-6`}>
      <div className="flex items-center gap-2 mb-2">
        {icons[type]}
        <span className="font-semibold text-foreground">{title || defaultTitles[type]}</span>
      </div>
      <div className="text-foreground/80">{children}</div>
    </div>
  );
};

export default InfoBox;
