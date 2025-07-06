// generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/#about', changefreq: 'monthly', priority: 0.8 },
  { url: '/#projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/#skills', changefreq: 'monthly', priority: 0.7 },
  { url: '/#resume', changefreq: 'monthly', priority: 0.7 },
  { url: '/#contact', changefreq: 'yearly', priority: 0.6 }
];

const stream = new SitemapStream({ hostname: 'https://hariomkhonde.vercel.app' });

const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

createWriteStream('./dist/sitemap.xml').write(sitemap);
console.log('✅ Sitemap generated successfully!');
