'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@shared/ui/Buttons';

type ResumeMemoProps = Record<string, never>;

export const ResumeMemo = forwardRef<HTMLDivElement, ResumeMemoProps>((_, ref) => {
  ResumeMemo.displayName = 'ResumeMemo';

  return (
    <section
      ref={ref}
      className='absolute flex flex-col top-[170px] right-[600px] w-[500px] h-[440px] rounded-lg styles-text-xs
      overflow-hidden cursor-grab hover:z-40 md:hidden'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons ref={ref} />
        <p className='w-full font-semibold text-center'>Resume</p>
      </div>
      <div className='p-4 bg-yellow-200'>
        <b className='styles-text-lg'> Wonsub Kim, 김원섭 </b>
        <br />
        <br />
        📞 010-6816-8***
        <br />
        📧{' '}
        <a href='mailto: raykim.dev@gmail.com?subject=We want to contact with you, RAY!'>
          raykim.dev@gmail.com
        </a>
        <br />
        <br />
        <p>
          Sangmyung University_Scenography (2015.03 - 2021.02)
          <br />
          Hanyang University_Architecture (2013.03 - 2013.07)
        </p>
        <br />
        <p>
          MVL(easi6)_Frontend Engineer (2024.08 - Present)
          <br />
          Fleetune_Frontend Engineer (2022.10 - 2024.02)
        </p>
        <br />
        <p>
          - TypeScript, React.js, Next.js
          <br />
          - Tailwind CSS, Styled-components
          <br />
          - React-Query, Zustand, Recoil
          <br />
          - Viem, Ethers, Wagmi, Privy
          <br />
          - Mapbox GL
          <br />
          - Git, Github Actions, n8n
          <br />
        </p>
        <br />
        <p>
          ✅ TOEIC 905 <br />
          ✅ OPIC IH <br />
        </p>
      </div>
    </section>
  );
});
