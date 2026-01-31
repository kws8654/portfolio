'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import { TopBar } from '@shared/ui/TopBar';
import { DockBar } from '@shared/ui/DockBar';
import { usePathname } from 'next/navigation';

interface MacLayoutProps {
  children?: React.ReactNode;
}

export const MacLayout = forwardRef<HTMLDivElement, MacLayoutProps>((props, ref) => {
  MacLayout.displayName = 'MacLayout';
  const { children } = props;
  const pathname = usePathname();

  return (
    <section className='flex justify-center items-center w-full h-screen bg-neutral-900'>
      <div
        ref={ref}
        className='relative flex flex-col w-[1450px] h-[850px] border border-gray-500 rounded-lg overflow-hidden styles-transition bg-black'
      >
        <TopBar />
        {children}
        {pathname.includes('/main') && <DockBar />}
      </div>
    </section>
  );
});
