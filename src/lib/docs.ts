import { getCollection, type CollectionEntry } from 'astro:content';

export type DocsEntry = CollectionEntry<'docs'>;

/** Formats a date value into "DD Mon YYYY" display string (e.g. "04 Jun 2025"). */
export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return String(date);
  }

  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = parsedDate.toLocaleDateString('en-US', { month: 'short' });
  const year = parsedDate.getFullYear();
  return `${day} ${month} ${year}`;
};

/** Ensures a base URL always ends with a trailing slash. */
export const normalizeBaseUrl = (baseUrl: string): string =>
  baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

/** Builds the page URL for a content entry, stripping the .md/.mdx extension. */
export const entryLink = (id: string, baseUrl: string): string =>
  `${normalizeBaseUrl(baseUrl)}${id.replace(/\.mdx?$/, '')}`;

/**
 * Sorts entries by `seriesOrder` ascending, then by date, then alphabetically.
 * Entries without `seriesOrder` sort to the front (treated as 0).
 */
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

/**
 * Returns all published entries belonging to the given series slug,
 * sorted by series order. Excludes drafts.
 */
export const getPublishedSeriesEntries = async (seriesName: string): Promise<DocsEntry[]> => {
  const entries = await getCollection(
    'docs',
    (entry) => entry.data.series === seriesName && entry.data.status !== 'draft'
  );

  return sortDocsBySeriesOrder(entries);
};

/**
 * Returns all entries in the same series as `currentEntry` (including itself),
 * sorted by series order. Matches on both `series` slug and `status` so drafts
 * don't appear alongside published entries.
 */
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
