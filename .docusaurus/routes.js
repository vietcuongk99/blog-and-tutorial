import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/__docusaurus/debug',
    component: ComponentCreator('/vi/__docusaurus/debug', '0f5'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/config',
    component: ComponentCreator('/vi/__docusaurus/debug/config', '8f6'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/content',
    component: ComponentCreator('/vi/__docusaurus/debug/content', '05f'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/globalData',
    component: ComponentCreator('/vi/__docusaurus/debug/globalData', '574'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/metadata',
    component: ComponentCreator('/vi/__docusaurus/debug/metadata', '1d3'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/registry',
    component: ComponentCreator('/vi/__docusaurus/debug/registry', 'ce6'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/routes',
    component: ComponentCreator('/vi/__docusaurus/debug/routes', '953'),
    exact: true
  },
  {
    path: '/vi/blog',
    component: ComponentCreator('/vi/blog', 'd93'),
    exact: true
  },
  {
    path: '/vi/blog/archive',
    component: ComponentCreator('/vi/blog/archive', 'c69'),
    exact: true
  },
  {
    path: '/vi/blog/create vue project from scratch',
    component: ComponentCreator('/vi/blog/create vue project from scratch', 'a93'),
    exact: true
  },
  {
    path: '/vi/blog/tags',
    component: ComponentCreator('/vi/blog/tags', 'c4f'),
    exact: true
  },
  {
    path: '/vi/blog/tags/vue',
    component: ComponentCreator('/vi/blog/tags/vue', 'a13'),
    exact: true
  },
  {
    path: '/vi/blog/tags/webpack',
    component: ComponentCreator('/vi/blog/tags/webpack', '857'),
    exact: true
  },
  {
    path: '/vi/markdown-page',
    component: ComponentCreator('/vi/markdown-page', 'f34'),
    exact: true
  },
  {
    path: '/vi/docs',
    component: ComponentCreator('/vi/docs', '72c'),
    routes: [
      {
        path: '/vi/docs/category/tutorial---extras',
        component: ComponentCreator('/vi/docs/category/tutorial---extras', '0f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/category/tutorial-basics',
        component: ComponentCreator('/vi/docs/category/tutorial-basics', 'f96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/intro',
        component: ComponentCreator('/vi/docs/intro', '551'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/vi/docs/tutorial-basics/congratulations', 'd74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/vi/docs/tutorial-basics/create-a-blog-post', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/vi/docs/tutorial-basics/create-a-document', 'bae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/vi/docs/tutorial-basics/create-a-page', '8b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/vi/docs/tutorial-basics/deploy-your-site', '0bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/vi/docs/tutorial-basics/markdown-features', '433'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/vi/docs/tutorial-extras/manage-docs-versions', 'bd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/vi/docs/tutorial-extras/translate-your-site', 'd8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/VueJS/installation',
        component: ComponentCreator('/vi/docs/VueJS/installation', 'a46'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', '707'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
