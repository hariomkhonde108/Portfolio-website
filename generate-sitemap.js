// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/projects', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 }
  // Add more routes as needed
];

const stream = new SitemapStream({ hostname: 'https://hariomkhonde.vercel.app' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  createWriteStream('./dist/sitemap.xml').write(data.toString());
});
