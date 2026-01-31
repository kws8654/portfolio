import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import folder from '@public/images/folder.png';
import { usePortfolioStore } from '@/store/usePortfolioStore';

interface DetailResumeProps {
  setOnClickDocFolder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DocFolder = forwardRef((props: DetailResumeProps, ref: ForwardedRef<any>) => {
  DocFolder.displayName = 'DocFolder';
  const { setOnClickDocFolder } = props;
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio('docs');
  };

  return (
    <div
      ref={ref}
      className='absolute top-[435px] left-[175px] flex flex-col items-center'
      onClick={onClickHandler}
      onDoubleClick={() => setOnClickDocFolder(true)}
    >
      <Image
        src={folder}
        alt={'docs'}
        width={80}
        className={`${
          clickedPortfolio === 'docs' && 'border bg-gray-500/50 rounded-md'
        }`}
      />
      <p
        className={`mt-2 styles-text-sm text-white ${
          clickedPortfolio === 'docs' && 'bg-blue-600 rounded-md'
        }`}
      >
        Docs
      </p>
    </div>
  );
});
