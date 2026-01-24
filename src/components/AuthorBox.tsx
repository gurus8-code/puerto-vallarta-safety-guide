import { Shield, Star, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react';
import authorAvatar from '@/assets/author-avatar.jpg';

interface AuthorBoxProps {
  variant?: 'inline' | 'full';
}

const AuthorBox = ({ variant = 'full' }: AuthorBoxProps) => {
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-3">
        <img
          src={authorAvatar}
          alt="Marcus Sullivan - Travel Writer and Puerto Vallarta Expert"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <span className="font-semibold text-foreground">Marcus Sullivan</span>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-muted-foreground text-sm">Mexico Travel Expert</span>
        </div>
      </div>
    );
  }

  return (
    <div className="author-box">
      <img
        src={authorAvatar}
        alt="Marcus Sullivan - Senior Travel Writer specializing in Mexico safety and tourism"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-white shadow-lg flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-display text-lg font-semibold text-foreground">Marcus Sullivan</h4>
          <div className="flex items-center gap-1 bg-palm text-white px-2 py-0.5 rounded-full text-xs font-medium">
            <Shield className="w-3 h-3" />
            Verified Expert
          </div>
        </div>
        <p className="text-sm text-foreground/80 font-medium mb-2">
          Senior Travel Writer & Mexico Specialist
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          With over 12 years covering Latin American destinations and part-time residency in Puerto Vallarta since 2019, 
          I've spent hundreds of days exploring every corner of this beautiful city. My recommendations come from 
          genuine personal experience, not sponsored content or secondhand research.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Based in Puerto Vallarta</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span>12+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent" />
            <span>50+ Mexico Articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox;
