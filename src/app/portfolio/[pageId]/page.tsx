import { NotionAPI } from 'notion-client';
import { NotionPageClient } from '@widgets/notion/NotionPageClient';
import { notFound } from 'next/navigation';

const notion = new NotionAPI();

export const revalidate = 10;
export const dynamicParams = true;

export default async function PortfolioPage({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;

  if (!pageId) {
    notFound();
  }

  const recordMap = await notion.getPage(pageId);

  return <NotionPageClient recordMap={recordMap} rootPageId='' />;
}
