'use client';

import React, { createRef, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { MacLayout } from '@shared/ui/MacLayout';
import { ResumeMemo } from '@widgets/desktop/ResumeMemo';
import { FaceTimeVideo } from '@widgets/desktop/FaceTimeVideo';
import { usePortfolioStore } from '@shared/store/usePortfolioStore';
import { Notification } from '@widgets/desktop/Notification';
import { OpenedFolder } from '@widgets/desktop/OpenedFolder';
import { MusicPlayer } from '@widgets/desktop/MusicPlayer';
import { NOTIFICATIONS, DESKTOP_ITEMS } from '@shared/constants/common';
import { ChatRoom } from '@widgets/desktop/ChatRoom';
import { FileAsset } from '@widgets/desktop/FileAsset';
import Image from 'next/image';
import macBookBackgroundImage from '@public/assets/images/macbook-background.jpeg';

export const MainPage = () => {
  const containerRef = useRef(null);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);
  const [onClickFolder, setOnClickFolder] = useState(false);

  const fileRefs = useRef(
    Object.fromEntries(DESKTOP_ITEMS.map((item) => [item.id, createRef<any>()])),
  ).current;
  const faceTimeRef = useRef(null);
  const musicRef = useRef(null);
  const resumeRef = useRef(null);
  const openedFolderRef = useRef(null);
  const chatRoomRef = useRef(null);

  const draggableRefs = useMemo(
    () => [
      ...Object.values(fileRefs),
      faceTimeRef,
      musicRef,
      resumeRef,
      openedFolderRef,
      chatRoomRef,
    ],
    [fileRefs],
  );

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();

    draggableRefs.forEach((componentRef: RefObject<any>) => {
      if (!componentRef.current) return;

      const { width: boxWidth, height: boxHeight } = componentRef.current.getBoundingClientRect();

      let isDragging: boolean = null;
      let originLeft: number = null;
      let originTop: number = null;
      let originX: number = null;
      let originY: number = null;

      componentRef.current.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        isDragging = true;
        originX = e.clientX;
        originY = e.clientY;
        originLeft = componentRef.current.offsetLeft;
        originTop = componentRef.current.offsetTop;
      });

      document.addEventListener('mouseup', (e: MouseEvent) => {
        isDragging = false;
      });

      document.addEventListener('mousemove', (e: MouseEvent) => {
        if (isDragging) {
          const diffX = e.clientX - originX;
          const diffY = e.clientY - originY;
          const endOfXPoint = containerWidth - boxWidth;
          const endOfYPoint = containerHeight - boxHeight;
          componentRef.current.style.left = `${Math.min(
            Math.max(0, originLeft + diffX),
            endOfXPoint,
          )}px`;
          componentRef.current.style.top = `${Math.min(
            Math.max(0, originTop + diffY),
            endOfYPoint,
          )}px`;
        }
      });
    });
  }, [containerRef, draggableRefs]);

  return (
    <MacLayout ref={containerRef}>
      <section
        className='relative w-full h-[calc(100%-25px)]'
        onClick={() => setClickedPortfolio(null)}
      >
        <Image src={macBookBackgroundImage} alt='macBookBackgroundImage' fill={true} />
        <div className='grid grid-cols-2 gap-[20px] w-[250px]'>
          {DESKTOP_ITEMS.map((asset) => {
            const isFolder = asset.kind === 'folder';
            const openFolder = isFolder ? setOnClickFolder : undefined;

            return (
              <FileAsset
                key={asset.id}
                ref={fileRefs[asset.id]}
                kind={asset.kind}
                title={asset.title}
                link={asset.link}
                position={asset.position}
                openFolder={openFolder}
              />
            );
          })}
        </div>
        <FaceTimeVideo ref={faceTimeRef} />
        <MusicPlayer ref={musicRef} />
        <ResumeMemo ref={resumeRef} />
        <OpenedFolder
          ref={openedFolderRef}
          onClickFolder={onClickFolder}
          setOnClickFolder={setOnClickFolder}
        />
        <ChatRoom ref={chatRoomRef} />
        <div className='absolute top-[40px] right-[10px] flex flex-col gap-[10px] md:hidden'>
          {NOTIFICATIONS.map((notification: { title: string; message: string }, index: number) => {
            return (
              <Notification key={index} title={notification.title} message={notification.message} />
            );
          })}
        </div>
      </section>
    </MacLayout>
  );
};
