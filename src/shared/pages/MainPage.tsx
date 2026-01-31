'use client';

import React, { createRef, useMemo, useRef, useState } from 'react';
import { MacLayout } from '@shared/ui/MacLayout';
import { ResumeMemo } from '@widgets/desktop/ResumeMemo';
import { FaceTimeVideo } from '@widgets/desktop/FaceTimeVideo';
import { usePortfolioStore } from '@shared/store/usePortfolioStore';
import { Notification } from '@widgets/desktop/Notification';
import { OpenedFolder } from '@widgets/desktop/OpenedFolder';
import { MusicPlayer } from '@widgets/desktop/MusicPlayer';
import { NOTIFICATIONS, DESKTOP_ITEMS } from '@shared/constants/common';
import { FileAsset } from '@widgets/desktop/FileAsset';
import { useDraggable } from '@shared/lib/useDraggable';
import Image from 'next/image';
import macBookBackgroundImage from '@public/assets/images/macbook-background.jpeg';

export const MainPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);
  const [onClickFolder, setOnClickFolder] = useState(false);

  const fileRefs = useRef(
    Object.fromEntries(DESKTOP_ITEMS.map((item) => [item.id, createRef<HTMLDivElement>()])),
  ).current;
  const faceTimeRef = useRef<HTMLDivElement | null>(null);
  const musicRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const openedFolderRef = useRef<HTMLDivElement | null>(null);

  const draggableItems = useMemo(
    () => [
      ...Object.entries(fileRefs).map(([id, ref]) => ({ id, ref })),
      { id: 'faceTime', ref: faceTimeRef },
      { id: 'music', ref: musicRef },
      { id: 'resume', ref: resumeRef },
      { id: 'openedFolder', ref: openedFolderRef },
    ],
    [fileRefs],
  );

  useDraggable(containerRef, draggableItems);

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
            const onOpenFolder = isFolder ? () => setOnClickFolder(true) : undefined;

            return (
              <FileAsset
                key={asset.id}
                ref={fileRefs[asset.id]}
                kind={asset.kind}
                title={asset.title}
                link={asset.link}
                position={asset.position}
                onOpenFolder={onOpenFolder}
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
        <div className='absolute top-[40px] right-[10px] flex flex-col gap-[10px] md:hidden'>
          {NOTIFICATIONS.map((notification) => (
            <Notification
              key={`${notification.title}-${notification.message}`}
              title={notification.title}
              message={notification.message}
            />
          ))}
        </div>
      </section>
    </MacLayout>
  );
};
