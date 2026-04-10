import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				passage: z.string().optional(),
				series: z.string().optional(),
				status: z.enum(['draft', 'published']).optional(),
				tags: z.array(z.string()).optional(),
				date: z.coerce.date().optional(),
			}),
		}),
	}),
};