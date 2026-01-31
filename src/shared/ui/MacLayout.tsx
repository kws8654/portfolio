'use client';

import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { TopBar } from '@shared/ui/TopBar';
import { DockBar } from '@shared/ui/DockBar';
import { usePathname } from 'next/navigation';

interface MacLayoutProps {
  children?: React.ReactNode;
}

const BASE_WIDTH = 1450;
const BASE_HEIGHT = 850;
const VERTICAL_MARGIN = 24;

export const MacLayout = forwardRef<HTMLDivElement, MacLayoutProps>((props, ref) => {
  MacLayout.displayName = 'MacLayout';
  const { children } = props;
  const pathname = usePathname();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const availableHeight = Math.max(0, window.innerHeight - VERTICAL_MARGIN * 2);
      const nextScale = Math.min(1, window.innerWidth / BASE_WIDTH, availableHeight / BASE_HEIGHT);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section
      className='flex justify-center items-center w-full h-screen bg-neutral-900 overflow-hidden'
      style={{ paddingTop: `${VERTICAL_MARGIN}px`, paddingBottom: `${VERTICAL_MARGIN}px` }}
    >
      <div
        className='relative w-full h-full flex justify-center items-center'
      >
        <div
          ref={ref}
          className='relative flex flex-col border border-gray-500 rounded-lg overflow-hidden styles-transition bg-black'
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${BASE_HEIGHT}px`,
            transformOrigin: 'center',
            transform: `scale(${scale})`,
          }}
        >
          <TopBar />
          {children}
          {pathname.includes('/main') && <DockBar />}
        </div>
      </div>
    </section>
  );
});
