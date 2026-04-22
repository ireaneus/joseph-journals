import { getCollection, type CollectionEntry } from 'astro:content';

export type DocsEntry = CollectionEntry<'docs'>;

export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';

  const parsedDate = typeof date === 'string' ? new Date(date) : new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return String(date);
  }

  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = parsedDate.toLocaleDateString('en-US', { month: 'short' });
  const year = parsedDate.getFullYear();
  return `${day} ${month} ${year}`;
};

export const normalizeBaseUrl = (baseUrl: string): string =>
  baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const entryLink = (id: string, baseUrl: string): string =>
  `${normalizeBaseUrl(baseUrl)}${id.replace(/\.mdx?$/, '')}`;

export const sortDocsBySeriesOrder = (entries: DocsEntry[]): DocsEntry[] =>
  [...entries].sort((a, b) => {
    const aOrder = a.data.seriesOrder ?? 0;
    const bOrder = b.data.seriesOrder ?? 0;
    if (aOrder !== bOrder) return aOrder - bOrder;

    const aDate = a.data.date ? new Date(a.data.date).getTime() : 0;
    const bDate = b.data.date ? new Date(b.data.date).getTime() : 0;
    if (aDate !== bDate) return aDate - bDate;

    return (a.data.title ?? a.id).localeCompare(b.data.title ?? b.id);
  });

export const getPublishedSeriesEntries = async (seriesName: string): Promise<DocsEntry[]> => {
  const entries = await getCollection(
    'docs',
    (entry) => entry.data.series === seriesName && entry.data.status !== 'draft'
  );

  return sortDocsBySeriesOrder(entries);
};

export const getSiblingSeriesEntries = async (currentEntry: DocsEntry): Promise<DocsEntry[]> => {
  if (!currentEntry.data.series) return [];

  const docs = await getCollection('docs');
  const siblings = docs.filter(
    (entry) =>
      entry.id !== currentEntry.id &&
      entry.data.series === currentEntry.data.series &&
      entry.data.status === currentEntry.data.status
  );

  return sortDocsBySeriesOrder([...siblings, currentEntry]);
};
