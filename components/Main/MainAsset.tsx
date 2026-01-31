import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { cva } from 'class-variance-authority';

const ABSOLUTE_POSITION = [
  { top: '40px', left: '25px' },
  { top: '160px', left: '8px' },
  { top: '280px', left: '26px' },
  { top: '400px', left: '6px' },
  { top: '520px', left: '6px' },
  { top: '40px', left: '140px' },
  { top: '160px', left: '160px' },
  { top: '310px', left: '170px' },
  { top: '430px', left: '170px' },
  { top: '550px', left: '170px' },
];

interface MainAssetProps {
  type: string;
  index: number;
  title: string;
  link: string;
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

export const MainAsset = forwardRef((props: MainAssetProps, ref: ForwardedRef<any>) => {
  MainAsset.displayName = 'MainAsset';
  const { type, index, title, link, openFolder } = props;
  const router = useRouter();
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  const onDoubleClickHandler = () => {
    type === 'file' ? router.push(link) : openFolder(true);
  };

  return (
    <div
      ref={ref}
      className={containerClass()}
      style={{ top: ABSOLUTE_POSITION[index].top, left: ABSOLUTE_POSITION[index].left }}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
    >
      <Image
        src={`/images/${type}.png`}
        alt={`${type}-${index}`}
        width={type === 'file' ? 100 : 80}
        height={type === 'file' ? 100 : 80}
        className={imageClass({ selected: title === clickedPortfolio, type })}
      />
      <p className={labelClass({ selected: title === clickedPortfolio })}>{title}</p>
    </div>
  );
});
