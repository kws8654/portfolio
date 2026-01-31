'use client';

import { MacLayout } from '@shared/ui/MacLayout';
import { NotionPage } from '@shared/ui/NotionPage';
import { ExtendedRecordMap } from 'notion-types';

export function NotionPageClient({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}) {
  return (
    <MacLayout>
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </MacLayout>
  );
}
