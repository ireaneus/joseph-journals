import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string(),
        docType: z
          .enum(['sermon', 'devotion', 'bible-study', 'guide', 'reference', 'resource'])
          .optional(),
        passage: z.string().optional(),
        series: z.string().optional(),
        status: z.enum(['draft', 'published']).optional(),
        tags: z.array(z.string()).optional(),
        date: z.coerce.date().optional(),
        speaker: z.string().optional(),
        audience: z.string().optional(),
      }),
    }),
  }),
};