import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import porfoliFile from '@public/assets/images/pf1.png';
import { useRouter } from 'next/router';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { cva } from 'class-variance-authority';

const ABSOLUTE_POSITION = [
  { top: '40px', left: '20px' },
  { top: '160px', left: '8px' },
  { top: '280px', left: '26px' },
  { top: '400px', left: '26px' },
  { top: '40px', left: '140px' },
  { top: '160px', left: '160px' },
];

interface PortfolioProps {
  index: number;
  title: string;
  link: string;
}

const containerClass = cva('absolute flex flex-col items-center cursor-pointer');

const imageClass = cva('', {
  variants: {
    selected: {
      true: 'border bg-gray-500/50 rounded-md',
      false: '',
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

export const Portfolio = forwardRef((props: PortfolioProps, ref: ForwardedRef<any>) => {
  Portfolio.displayName = 'Portfolio';
  const { index, title, link } = props;
  const router = useRouter();
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  return (
    <div
      ref={ref}
      className={containerClass()}
      style={{ top: ABSOLUTE_POSITION[index].top, left: ABSOLUTE_POSITION[index].left }}
      onClick={onClickHandler}
      onDoubleClick={() => router.push(link)}
    >
      <Image
        src={porfoliFile}
        alt={'porfoliFile'}
        width={100}
        className={imageClass({ selected: title === clickedPortfolio })}
      />
      <p className={labelClass({ selected: title === clickedPortfolio })}>{title}</p>
    </div>
  );
});
