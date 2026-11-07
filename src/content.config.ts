import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Tool or surface that produces the element. */
				source: z.string().optional(),
				/** live: shown for real in chat · sim: simulated here only · app: owned by the app, not Claude. */
				tag: z.enum(['live', 'sim', 'app']).optional(),
				/** What the user can do with it. Inline `code` allowed. */
				can: z.array(z.string()).optional(),
				/** [label, value] pairs. Inline `code` allowed in values. */
				specs: z.array(z.tuple([z.string(), z.string()])).optional(),
			}),
		}),
	}),
};
