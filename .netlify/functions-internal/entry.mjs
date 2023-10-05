import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9d5435a7.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_d3200be8.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_e42d08eb.mjs');
const _page1  = () => import('./chunks/index_9b3f8ed6.mjs');
const _page2  = () => import('./chunks/styleguide_f2629368.mjs');
const _page3  = () => import('./chunks/stackers_fd9fd9e1.mjs');
const _page4  = () => import('./chunks/m31_5cc0d8c0.mjs');
const _page5  = () => import('./chunks/projects_d5a90493.mjs');
const _page6  = () => import('./chunks/contact_3295459e.mjs');
const _page7  = () => import('./chunks/gallery_b8b7b1cc.mjs');
const _page8  = () => import('./chunks/privacy_20011551.mjs');
const _page9  = () => import('./chunks/about_fb3acd66.mjs');
const _page10  = () => import('./chunks/home_bd5e5a5b.mjs');
const _page11  = () => import('./chunks/404_5fa24c15.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/styleguide.astro", _page2],["src/pages/projects/stackers.md", _page3],["src/pages/projects/m31.md", _page4],["src/pages/projects.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/gallery.astro", _page7],["src/pages/privacy.astro", _page8],["src/pages/about.astro", _page9],["src/pages/home.astro", _page10],["src/pages/404.astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
