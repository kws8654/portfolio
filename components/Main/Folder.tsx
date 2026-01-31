import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import folder from '@public/images/folder.png';
import { usePortfolioStore } from '@/store/usePortfolioStore';

interface FolderProps {
  setOnClickFolder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Folder = forwardRef((props: FolderProps, ref: ForwardedRef<any>) => {
  Folder.displayName = 'Folder';
  const { setOnClickFolder } = props;
  const clickedPortfolio = usePortfolioStore((s) => s.clickedPortfolio);
  const setClickedPortfolio = usePortfolioStore((s) => s.setClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio('folder');
  };

  return (
    <div
      ref={ref}
      className='absolute top-[305px] left-[175px] flex flex-col items-center'
      onClick={onClickHandler}
      onDoubleClick={() => setOnClickFolder(true)}
    >
      <Image
        src={folder}
        alt={'folder'}
        width={80}
        className={`${clickedPortfolio === 'folder' && 'border bg-gray-500/50 rounded-md'}`}
      />
      <p
        className={`mt-2 styles-text-sm text-white ${
          clickedPortfolio === 'folder' && 'bg-blue-600 rounded-md'
        }`}
      >
        Click Here!
      </p>
    </div>
  );
});
