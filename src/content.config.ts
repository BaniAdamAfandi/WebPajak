import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const materi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materi' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    kategori: z.enum(['dasar', 'pph', 'ppn', 'umkm', 'digital']),
    tingkat: z.enum(['Pemula', 'Menengah', 'Lanjutan']),
    durasi: z.string(),
    urutan: z.number().default(0),
  }),
});

const tutorial = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorial' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    langkah: z.number(),
    durasi: z.string(),
    urutan: z.number().default(0),
  }),
});

export const collections = { materi, tutorial };
