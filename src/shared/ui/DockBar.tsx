'use client';

import React from 'react';
import Image from 'next/image';
import chrome from '@public/assets/images/chrome.png';
import discord from '@public/assets/images/discord.png';
import music from '@public/assets/images/music.png';
import vsc from '@public/assets/images/vsc.png';
import docker from '@public/assets/images/docker.png';
import terminal from '@public/assets/images/terminal.png';
import notion from '@public/assets/images/notion.png';
import slack from '@public/assets/images/slack.png';
import git from '@public/assets/images/git.png';
import Link from 'next/link';

export const DockBar = () => {
  return (
    <>
      <section className='styles-x-center bottom-8 px-2 flex items-center justify-between rounded-2xl bg-gray-400/60 h-[70px] w-[750px] md:hidden'>
        <Link href='https://www.google.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={chrome} alt={'chrome'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        <Link href='https://www.discord.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            src={discord}
            alt={'discord'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://www.docker.com/' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={docker} alt={'docker'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        <Link
          href='https://visualstudio.microsoft.com'
          passHref
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            // onClick={() => setOnClickGallery(true)}
            src={vsc}
            alt={'vsc'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://slack.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            // onClick={() => setOnClickChatRoom(true)}
            src={slack}
            alt={'slack'}
            width={52}
            height={52}
            className='styles-dock-icon mx-2'
          />
        </Link>
        <Link href='https://www.iterm2.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            src={terminal}
            alt={'terminal'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://www.notion.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={notion} alt={'notion'} width={55} height={55} className='styles-dock-icon' />
        </Link>
        <Link href='https://github.com/kws8654' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={git} alt={'git'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        {/*크롬, 디스코드, 카카오톡, 음악, 갤러리, 터미널*/}
        {/*링크드인, 깃허브, 노션은 외부 링크로 이동*/}
      </section>
      <section className='hidden styles-x-center bottom-8 px-2 items-center justify-between rounded-2xl bg-gray-400/60 h-[70px] w-[90%] md:flex'>
        <Image src={chrome} alt={'chrome'} width={65} className='styles-dock-icon' />
        <Image src={music} alt={'music'} width={65} className='styles-dock-icon' />
        <Image src={notion} alt={'notion'} width={55} className='styles-dock-icon' />
        {/*<Image src={velog} alt={'velog'} width={50} className='styles-dock-icon' />*/}
      </section>
    </>
  );
};
