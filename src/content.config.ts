import { defineCollection, z } from 'astro:content';

import { file } from 'astro/loaders';

const productsCollection = defineCollection({
    loader: file("src/data/data.json"),
    schema: z.object({
        id: z.number(),
        image: z.object({
            thumbnail: z.string(),
            mobile: z.string(),
            tablet: z.string(),
            desktop: z.string()
        }),
        name: z.string(),
        category: z.string(),
        price: z.number()
    })
});

export const collections = { productsCollection };