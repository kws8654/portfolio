'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePortfolioStore } from '@shared/store/usePortfolioStore';
import { cva } from 'class-variance-authority';

interface FileAssetProps {
  kind: 'file' | 'folder';
  position: { top: number; left: number };
  title: string;
  link?: string | null;
  onOpenFolder?: () => void;
}

const containerClass = cva('absolute flex flex-col items-center cursor-pointer');

const imageClass = cva('', {
  variants: {
    selected: {
      true: 'border bg-gray-500/50 rounded-md',
      false: '',
    },
    type: {
      folder: 'mb-3',
      file: '',
    },
  },
});

const labelClass = cva('px-1 styles-text-sm text-white', {
  variants: {
    selected: {
      true: 'bg-blue-600 rounded-md',
      false: '',
    },
  },
});

export const FileAsset = forwardRef<HTMLDivElement, FileAssetProps>((props, ref) => {
  FileAsset.displayName = 'FileAsset';
  const { kind, position, title, link, onOpenFolder } = props;
  const router = useRouter();
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);
  const isFolder = kind === 'folder';

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  const onDoubleClickHandler = () => {
    if (isFolder) {
      onOpenFolder?.();
      return;
    }

    if (!link) return;
    router.push(link);
  };

  return (
    <div
      ref={ref}
      className={containerClass()}
      style={{ top: position.top, left: position.left }}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
    >
      <Image
        src={isFolder ? '/assets/images/folder.png' : '/assets/images/file.png'}
        alt={`${kind}-${title}`}
        width={isFolder ? 80 : 100}
        height={isFolder ? 80 : 100}
        className={imageClass({ selected: title === clickedPortfolio, type: kind })}
      />
      <p className={labelClass({ selected: title === clickedPortfolio })}>{title}</p>
    </div>
  );
});
