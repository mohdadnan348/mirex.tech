import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div className={cn('glass rounded-xl p-6 transition-all hover:shadow-xl', className)} {...props}>
      {children}
    </div>
  );
}