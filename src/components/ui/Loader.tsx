import { cn } from '@/lib/utils';

export function Loader({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}