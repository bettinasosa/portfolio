import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_d3200be8.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== 'undefined') {
  let proc = process;
  if ('argv' in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes('--verbose')) ; else if (proc.argv.includes('--silent')) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return '/' + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, '%3F').replace(/#/g, '%23').replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
    }).join('');
  }).join('');
  let trailing = '';
  if (addTrailingSlash === 'always' && segments.length) {
    trailing = '/';
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({
  'adapterName': '@astrojs/netlify/functions',
  'routes': [{
    'file': '',
    'links': [],
    'scripts': [],
    'styles': [],
    'routeData': {
      'type': 'endpoint',
      'route': '/_image',
      'pattern': '^\\/_image$',
      'segments': [[{ 'content': '_image', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'node_modules/astro/dist/assets/endpoint/generic.js',
      'pathname': '/_image',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.3704cd80.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n'
    }],
    'routeData': {
      'route': '/',
      'type': 'page',
      'pattern': '^\\/$',
      'segments': [],
      'params': [],
      'component': 'src/pages/index.astro',
      'pathname': '/',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/styleguide',
      'type': 'page',
      'pattern': '^\\/styleguide\\/?$',
      'segments': [[{ 'content': 'styleguide', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/styleguide.astro',
      'pathname': '/styleguide',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.25fe1377.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n'
    }, { 'type': 'external', 'src': '/_astro/home.d6fc63cb.css' }, {
      'type': 'inline',
      'content': '[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/projects/stackers',
      'type': 'page',
      'pattern': '^\\/projects\\/stackers\\/?$',
      'segments': [[{ 'content': 'projects', 'dynamic': false, 'spread': false }], [{
        'content': 'stackers',
        'dynamic': false,
        'spread': false
      }]],
      'params': [],
      'component': 'src/pages/projects/stackers.md',
      'pathname': '/projects/stackers',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.25fe1377.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n'
    }, { 'type': 'external', 'src': '/_astro/home.d6fc63cb.css' }, {
      'type': 'inline',
      'content': '[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/projects/m31',
      'type': 'page',
      'pattern': '^\\/projects\\/m31\\/?$',
      'segments': [[{ 'content': 'projects', 'dynamic': false, 'spread': false }], [{
        'content': 'm31',
        'dynamic': false,
        'spread': false
      }]],
      'params': [],
      'component': 'src/pages/projects/m31.mdx',
      'pathname': '/projects/m31',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/projects',
      'type': 'page',
      'pattern': '^\\/projects\\/?$',
      'segments': [[{ 'content': 'projects', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/projects.astro',
      'pathname': '/projects',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/contact',
      'type': 'page',
      'pattern': '^\\/contact\\/?$',
      'segments': [[{ 'content': 'contact', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/contact.astro',
      'pathname': '/contact',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/gallery',
      'type': 'page',
      'pattern': '^\\/gallery\\/?$',
      'segments': [[{ 'content': 'gallery', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/gallery.astro',
      'pathname': '/gallery',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/privacy',
      'type': 'page',
      'pattern': '^\\/privacy\\/?$',
      'segments': [[{ 'content': 'privacy', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/privacy.astro',
      'pathname': '/privacy',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/blog',
      'type': 'page',
      'pattern': '^\\/blog\\/?$',
      'segments': [[{ 'content': 'about', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/blog.astro',
      'pathname': '/blog',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.5297e4b1.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n'
    }, { 'type': 'external', 'src': '/_astro/home.d6fc63cb.css' }, {
      'type': 'inline',
      'content': '[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/home',
      'type': 'page',
      'pattern': '^\\/home\\/?$',
      'segments': [[{ 'content': 'home', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/home.astro',
      'pathname': '/home',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }, {
    'file': '',
    'links': [],
    'scripts': [{ 'type': 'external', 'value': '/_astro/hoisted.98ced75c.js' }],
    'styles': [{ 'type': 'external', 'src': '/_astro/404.e158a8ae.css' }, {
      'type': 'inline',
      'content': '@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/inter-latin-400-normal.0364d368.woff2) format("woff2"),url(/_astro/inter-latin-400-normal.e3982e96.woff) format("woff")}@font-face{font-family:Inter;font-style:normal;font-display:swap;font-weight:500;src:url(/_astro/inter-latin-500-normal.d5333670.woff2) format("woff2"),url(/_astro/inter-latin-500-normal.bf069d84.woff) format("woff")}\n[x-cloak]{display:none!important}\n'
    }],
    'routeData': {
      'route': '/404',
      'type': 'page',
      'pattern': '^\\/404\\/?$',
      'segments': [[{ 'content': '404', 'dynamic': false, 'spread': false }]],
      'params': [],
      'component': 'src/pages/404.astro',
      'pathname': '/404',
      'prerender': false,
      '_meta': { 'trailingSlash': 'ignore' }
    }
  }],
  'base': '/',
  'compressHTML': true,
  'componentMetadata': [['/Users/bettinasosa/portfolio/src/pages/projects/m31.mdx', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/projects/stackers.md', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/404.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/blog.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/contact.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/gallery.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/home.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/privacy.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/projects.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/styleguide.astro', {
    'propagation': 'none',
    'containsHead': true
  }], ['/Users/bettinasosa/portfolio/src/pages/index.astro', { 'propagation': 'none', 'containsHead': true }]],
  'renderers': [],
  'clientDirectives': [['idle', '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'], ['load', '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ['media', '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'], ['only', '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ['visible', '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();']],
  'entryModules': {
    '\u0000@astrojs-ssr-virtual-entry': 'entry.mjs',
    '\u0000@astro-renderers': 'renderers.mjs',
    '\u0000empty-middleware': '_empty-middleware.mjs',
    '/src/pages/about.astro': 'chunks/pages/about_555edc2c.mjs',
    '/src/pages/contact.astro': 'chunks/pages/contact_a3f367a0.mjs',
    '/node_modules/astro/dist/assets/endpoint/generic.js': 'chunks/pages/generic_a968c4d5.mjs',
    '/src/pages/home.astro': 'chunks/pages/home_054e3956.mjs',
    '/src/pages/index.astro': 'chunks/pages/index_19afbfe7.mjs',
    '/src/pages/privacy.astro': 'chunks/pages/privacy_9d694644.mjs',
    '/src/pages/projects.astro': 'chunks/pages/projects_95d0ffa1.mjs',
    '/src/pages/projects/stackers.md': 'chunks/pages/stackers_4136090a.mjs',
    '/src/pages/styleguide.astro': 'chunks/pages/styleguide_8d57da33.mjs',
    '\u0000@astrojs-manifest': 'manifest_9d5435a7.mjs',
    '/Users/bettinasosa/portfolio/node_modules/@astrojs/react/vnode-children.js': 'chunks/vnode-children_3769332a.mjs',
    '\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js': 'chunks/generic_e42d08eb.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'chunks/index_9b3f8ed6.mjs',
    '\u0000@astro-page:src/pages/styleguide@_@astro': 'chunks/styleguide_f2629368.mjs',
    '\u0000@astro-page:src/pages/projects/stackers@_@md': 'chunks/stackers_fd9fd9e1.mjs',
    '\u0000@astro-page:src/pages/projects/m31@_@md': 'chunks/m31_5cc0d8c0.mjs',
    '\u0000@astro-page:src/pages/projects@_@astro': 'chunks/projects_d5a90493.mjs',
    '\u0000@astro-page:src/pages/contact@_@astro': 'chunks/contact_3295459e.mjs',
    '\u0000@astro-page:src/pages/gallery@_@astro': 'chunks/gallery_b8b7b1cc.mjs',
    '\u0000@astro-page:src/pages/privacy@_@astro': 'chunks/privacy_20011551.mjs',
    '\u0000@astro-page:src/pages/about@_@astro': 'chunks/about_fb3acd66.mjs',
    '\u0000@astro-page:src/pages/home@_@astro': 'chunks/home_bd5e5a5b.mjs',
    '\u0000@astro-page:src/pages/404@_@astro': 'chunks/404_5fa24c15.mjs',
    '/astro/hoisted.js?q=0': '_astro/hoisted.25fe1377.js',
    '/astro/hoisted.js?q=2': '_astro/hoisted.5297e4b1.js',
    '/Users/bettinasosa/portfolio/src/util/Tilt.jsx': '_astro/tilt.bcce0b75.js',
    '/astro/hoisted.js?q=1': '_astro/hoisted.98ced75c.js',
    '/Users/bettinasosa/portfolio/src/components/artworks/ArtworkCarousel': '_astro/ArtworkCarousel.aa95113f.js',
    '@astrojs/react/client.js': '_astro/client.4ae814ea.js',
    '/astro/hoisted.js?q=3': '_astro/hoisted.3704cd80.js',
    'astro:scripts/before-hydration.js': ''
  },
  'assets': ['/_astro/inter-latin-500-normal.d5333670.woff2', '/_astro/inter-latin-400-normal.0364d368.woff2', '/_astro/inter-latin-400-normal.e3982e96.woff', '/_astro/inter-latin-500-normal.bf069d84.woff', '/_astro/404.e158a8ae.css', '/_astro/gallery.cf825247.css', '/_astro/home.d6fc63cb.css', '/_astro/index.0087f5df.css', '/_astro/m31.bbc74dd0.css', '/android-chrome-192x192.png', '/android-chrome-512x512.png', '/apple-touch-icon.png', '/favicon-16x16.png', '/favicon-32x32.png', '/favicon.ico', '/site.webmanifest', '/_astro/ArtworkCarousel.aa95113f.js', '/_astro/tilt.0251b498.js', '/_astro/tilt.bcce0b75.js', '/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.bd7fdfe4.js', '/_astro/client.4ae814ea.js', '/_astro/hoisted.25fe1377.js', '/_astro/hoisted.3704cd80.js', '/_astro/hoisted.5297e4b1.js', '/_astro/hoisted.98ced75c.js', '/_astro/index.03be2d59.js', '/assets/bike.png', '/assets/linkedin.png', '/assets/logo.jpg', '/assets/profile.jpg', '/assets/theme.png', '/assets/art/draw1.png', '/assets/art/draw2.png', '/assets/dresses/dress.jpg', '/assets/dresses/dress1.jpg', '/assets/dresses/dress2.jpg', '/assets/dresses/dress3.jpg', '/assets/dresses/dress4.jpg', '/assets/m31/app.png', '/assets/m31/controller.jpg', '/assets/m31/controller.png', '/assets/m31/gold.webp', '/assets/m31/package.jpg', '/assets/m31/packaging.png', '/assets/m31/research.png', '/assets/m31/specs.png', '/assets/m31/system.png', '/assets/posters/cheese-w.jpg', '/assets/posters/cheesew.jpg', '/assets/posters/coffee.jpg', '/assets/posters/poster.jpg', '/assets/posters/talksposter.jpg', '/assets/posters/teacoffee.jpg', '/assets/vcp/VCP.png', '/assets/astra/astra.png', '/assets/astra/giz1.png', '/assets/astra/gizmo.png', '/assets/bottles/block.jpg', '/assets/bottles/block.png', '/assets/bottles/blue.png', '/assets/bottles/stack1.png', '/assets/bottles/stack2.png', '/assets/bottles/stack3.png', '/assets/bottles/stack4.png', '/assets/bottles/stack5.png']
});

export { manifest };
