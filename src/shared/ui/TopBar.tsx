'use client';

import React from 'react';
import Image from 'next/image';
import appleUdLogo from '@public/assets/images/apple-ud-logo.png';
import kakaoTalk from '@public/assets/images/kakaotalk.png';
import network from '@public/assets/images/internet.png';
import battery from '@public/assets/images/battery.png';
import wifi from '@public/assets/images/wifi.png';
import magnifier from '@public/assets/images/magnifier.png';
import toggle from '@public/assets/images/toggle.png';
import { LiveTime } from '@shared/ui/LiveTime';

export const TopBar = () => {
  return (
    <>
      <section className='flex justify-between p-2 h-[26px] styles-bar-gradient border-b border-gray-300 md:hidden'>
        <div className='flex items-center gap-[5px] styles-text-sm'>
          <Image src={appleUdLogo} alt={'appleUdLogo'} width={25} />
          <p className='mx-2 font-semibold'>Wonsub's Portfolio</p>
          <div className='flex gap-[15px]'>
            <p>파일</p>
            <p>편집</p>
            <p>보기</p>
            <p>이동</p>
            <p>도움말</p>
          </div>
        </div>
        <div className='flex items-center gap-[15px]'>
          <Image src={kakaoTalk} alt={'kakaoTalk'} width={17} />
          <Image src={network} alt={'network'} width={15} />
          <Image src={battery} alt={'battery'} width={20} />
          <Image src={wifi} alt={'wifi'} width={19} />
          <Image src={magnifier} alt={'magnifier'} width={15} />
          <Image src={toggle} alt={'toggle'} width={15} />
          <LiveTime />
        </div>
      </section>
      <section className='flex justify-between items-center p-2 px-4 h-[30px] bg-macbookBackgroundImage text-white hidden md:flex'>
        <p className='text-black'>12:03</p>
        <div className='h-[20px] w-[150px] bg-black rounded-2xl'></div>
        <div className='flex items-center gap-[10px]'>
          <Image src={wifi} alt={'wifi'} width={20} />
          <Image src={battery} alt={'battery'} width={20} />
        </div>
      </section>
    </>
  );
};
