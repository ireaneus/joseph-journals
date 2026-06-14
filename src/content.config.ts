import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string().optional(),
        docType: z
          .enum(['article', 'devotion', 'bible-study', 'resource'])
          .optional(),
        passage: z.string().optional(),
        // `series` is the machine-readable slug used to group and filter entries (e.g. "james").
        // `seriesName` is the human-readable display label shown in SeriesIndex (e.g. "The Book of James").
        series: z.string().optional(),
        seriesName: z.string().optional(),
        seriesOrder: z.number().optional(),
        status: z.enum(['draft', 'published']).optional(),
        tags: z.array(z.string()).optional(),
        date: z.coerce.date().optional(),
        speaker: z.string().optional(),
        audience: z.string().optional(),
        // Accepts a single path string or an array; DocLayout uses only the first element when an array is given.
        image: z.union([z.string(), z.array(z.string())]).optional(),
        volume: z.string().optional(),
      }),
    }),
  }),
};