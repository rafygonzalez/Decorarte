// Reusable Skeleton component with scalable variants
'use client';

import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Render text rows instead of a single block */
  lines?: number;
  /** If true, keep square aspect ratio (width = height) */
  square?: boolean;
  /** Add rounded corners */
  rounded?: boolean;
}

/**
 * Skeleton placeholder that adapts to its container.
 *
 * Usage examples:
 *   <Skeleton className="h-48 w-full" />         // rectangular
 *   <Skeleton square className="w-32" />           // square
 *   <Skeleton lines={3} className="w-full" />      // 3 text lines
 */
export default function Skeleton({
  lines = 1,
  square = false,
  rounded = true,
  className,
  ...props
}: SkeletonProps) {
  if (lines > 1) {
    return (
      <div {...props} className={clsx('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={clsx(
              'animate-[pulse_1.2s_ease-in-out_infinite] bg-neutral-300/60 dark:bg-neutral-700/60',
              'h-4 w-full',
              rounded && 'rounded'
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      {...props}
      className={clsx(
        'animate-[pulse_1.2s_ease-in-out_infinite] bg-neutral-300/60 dark:bg-neutral-700/60',
        square && 'aspect-square',
        rounded && 'rounded-lg',
        className
      )}
    />
  );
}
