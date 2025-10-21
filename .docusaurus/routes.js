import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/typr.github.io/build/__docusaurus/debug',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug', '4e0'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/config',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/config', '528'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/content',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/content', 'aa8'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/globalData',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/globalData', '832'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/metadata',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/metadata', '0d6'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/registry',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/registry', '9a5'),
    exact: true
  },
  {
    path: '/typr.github.io/build/__docusaurus/debug/routes',
    component: ComponentCreator('/typr.github.io/build/__docusaurus/debug/routes', '34d'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog',
    component: ComponentCreator('/typr.github.io/build/blog', '29e'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/archive',
    component: ComponentCreator('/typr.github.io/build/blog/archive', '2a3'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/authors',
    component: ComponentCreator('/typr.github.io/build/blog/authors', 'c63'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/authors/fabrice',
    component: ComponentCreator('/typr.github.io/build/blog/authors/fabrice', '9fa'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/tags',
    component: ComponentCreator('/typr.github.io/build/blog/tags', 'a1b'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/tags/hello',
    component: ComponentCreator('/typr.github.io/build/blog/tags/hello', '7de'),
    exact: true
  },
  {
    path: '/typr.github.io/build/blog/welcome',
    component: ComponentCreator('/typr.github.io/build/blog/welcome', '425'),
    exact: true
  },
  {
    path: '/typr.github.io/build/HomepageFeatures',
    component: ComponentCreator('/typr.github.io/build/HomepageFeatures', '29d'),
    exact: true
  },
  {
    path: '/typr.github.io/build/markdown-page',
    component: ComponentCreator('/typr.github.io/build/markdown-page', '46b'),
    exact: true
  },
  {
    path: '/typr.github.io/build/docs',
    component: ComponentCreator('/typr.github.io/build/docs', '06a'),
    routes: [
      {
        path: '/typr.github.io/build/docs',
        component: ComponentCreator('/typr.github.io/build/docs', '4e8'),
        routes: [
          {
            path: '/typr.github.io/build/docs',
            component: ComponentCreator('/typr.github.io/build/docs', 'e45'),
            routes: [
              {
                path: '/typr.github.io/build/docs/FAQ',
                component: ComponentCreator('/typr.github.io/build/docs/FAQ', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-doc/',
                component: ComponentCreator('/typr.github.io/build/docs/typr-doc/', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-doc/advanced-typr',
                component: ComponentCreator('/typr.github.io/build/docs/typr-doc/advanced-typr', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-doc/typr-for-r-users',
                component: ComponentCreator('/typr.github.io/build/docs/typr-doc/typr-for-r-users', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-doc/typr-type-system',
                component: ComponentCreator('/typr.github.io/build/docs/typr-doc/typr-type-system', 'ade'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-start/',
                component: ComponentCreator('/typr.github.io/build/docs/typr-start/', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/build/docs/typr-start/getting-started',
                component: ComponentCreator('/typr.github.io/build/docs/typr-start/getting-started', 'c75'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/typr.github.io/build/',
    component: ComponentCreator('/typr.github.io/build/', '5a7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
