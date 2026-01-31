import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { cva } from 'class-variance-authority';

interface FileAssetProps {
  kind: 'file' | 'folder';
  position: { top: string; left: string };
  title: string;
  link?: string | null;
  openFolder?: React.Dispatch<React.SetStateAction<boolean>>;
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

export const FileAsset = forwardRef((props: FileAssetProps, ref: ForwardedRef<any>) => {
  FileAsset.displayName = 'FileAsset';
  const { kind, position, title, link, openFolder } = props;
  const router = useRouter();
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);
  const isFolder = kind === 'folder';

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  const onDoubleClickHandler = () => {
    if (isFolder) {
      openFolder?.(true);
      return;
    }

    if (link) {
      router.push(link);
    }
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
