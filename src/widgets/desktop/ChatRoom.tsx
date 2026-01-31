'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@shared/ui/Buttons';
import Image from 'next/image';
import profile from '@public/assets/images/profile2.png';
import { usePortfolioStore } from '@shared/store/usePortfolioStore';

type ChatRoomProps = Record<string, never>;

export const ChatRoom = forwardRef<HTMLDivElement, ChatRoomProps>((_, ref) => {
  ChatRoom.displayName = 'ChatRoom';

  const onClickChatRoom = usePortfolioStore((s) => s.onClickChatRoom);
  const setOnClickChatRoom = usePortfolioStore((s) => s.setOnClickChatRoom);

  if (!onClickChatRoom) {
    return null;
  }

  return (
    <div
      ref={ref}
      className='absolute bottom-[250px] flex w-[340px] h-[500px] flex-col bg-sky-100 rounded-md overflow-hidden'
    >
      <Buttons onClickClose={setOnClickChatRoom} />
      <div className='flex py-1 mt-4 border-b h-[12%]'>
        <Image src={profile} alt={'profile'} width={50} />
        <div>
          <p>Ray</p>
          <p>👥 2</p>
        </div>
      </div>
      <div className='h-[68%] border-b overflow-y-scroll'>{/*채팅 기록*/}</div>
      <div className='h-[20%]'>
        <input type='text' className='w-full h-[70%]' />
        {/*<textarea className='w-full h-[71%]'></textarea>*/}
        <div className='h-[30%] bg-white'></div>
      </div>
    </div>
  );
});
