import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2',
        {
          'border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10': variant === 'default',
          'border-transparent bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800': variant === 'secondary',
          'text-zinc-500 border-zinc-800': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
