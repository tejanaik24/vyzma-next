'use client';

import { cn } from '@/lib/utils';

interface MenuToggleIconProps {
  open: boolean;
  className?: string;
  duration?: number;
}

export function MenuToggleIcon({ open, className, duration = 300 }: MenuToggleIconProps) {
  const style: React.CSSProperties = {
    transition: `transform ${duration}ms ease, opacity ${duration}ms ease`,
  };

  return (
    <div className={cn('relative flex flex-col items-center justify-center gap-[5px]', className)}>
      <span
        className="block h-[1.5px] w-full origin-center rounded-full bg-current"
        style={{
          ...style,
          transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
        }}
      />
      <span
        className="block h-[1.5px] w-full rounded-full bg-current"
        style={{
          ...style,
          opacity: open ? 0 : 1,
          transform: open ? 'scaleX(0)' : 'none',
        }}
      />
      <span
        className="block h-[1.5px] w-full origin-center rounded-full bg-current"
        style={{
          ...style,
          transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
        }}
      />
    </div>
  );
}
