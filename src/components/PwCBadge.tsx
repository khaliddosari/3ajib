import { motion } from 'framer-motion';
import pwcLogo from '@/assets/pwc-logo.png';

interface PwCBadgeProps {
  variant?: 'fixed' | 'inline' | 'footer';
}

const PwCBadge = ({ variant = 'fixed' }: PwCBadgeProps) => {
  if (variant === 'fixed') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-4 right-4 z-50"
      >
        <div className="glass-strong px-3 md:px-4 py-2 rounded-full flex items-center glow-primary">
          <img src={pwcLogo} alt="PwC" className="h-4 md:h-5 w-auto" />
        </div>
      </motion.div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="glass px-4 md:px-6 py-3 rounded-lg inline-flex items-center gap-3 max-w-full overflow-hidden">
        <img src={pwcLogo} alt="PwC" className="h-6 md:h-8 w-auto shrink-0" />
        <div className="text-left min-w-0">
          <p className="text-xs text-muted-foreground">Powered by</p>
          <p className="text-sm font-semibold text-foreground truncate">PwC AI Accelerator</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
      <img src={pwcLogo} alt="PwC" className="h-4 w-auto" />
      <span className="text-xs font-medium text-primary-glow">Partner</span>
    </div>
  );
};

export default PwCBadge;
