import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/__docusaurus/debug',
    component: ComponentCreator('/vi/__docusaurus/debug', '179'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/config',
    component: ComponentCreator('/vi/__docusaurus/debug/config', 'e0d'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/content',
    component: ComponentCreator('/vi/__docusaurus/debug/content', '6a1'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/globalData',
    component: ComponentCreator('/vi/__docusaurus/debug/globalData', 'a4d'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/metadata',
    component: ComponentCreator('/vi/__docusaurus/debug/metadata', 'c2f'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/registry',
    component: ComponentCreator('/vi/__docusaurus/debug/registry', '329'),
    exact: true
  },
  {
    path: '/vi/__docusaurus/debug/routes',
    component: ComponentCreator('/vi/__docusaurus/debug/routes', '549'),
    exact: true
  },
  {
    path: '/vi/blog',
    component: ComponentCreator('/vi/blog', '306'),
    exact: true
  },
  {
    path: '/vi/blog/archive',
    component: ComponentCreator('/vi/blog/archive', '4d3'),
    exact: true
  },
  {
    path: '/vi/blog/first-blog-post',
    component: ComponentCreator('/vi/blog/first-blog-post', '1a5'),
    exact: true
  },
  {
    path: '/vi/blog/long-blog-post',
    component: ComponentCreator('/vi/blog/long-blog-post', 'a28'),
    exact: true
  },
  {
    path: '/vi/blog/mdx-blog-post',
    component: ComponentCreator('/vi/blog/mdx-blog-post', '2b0'),
    exact: true
  },
  {
    path: '/vi/blog/tags',
    component: ComponentCreator('/vi/blog/tags', '37c'),
    exact: true
  },
  {
    path: '/vi/blog/tags/docusaurus',
    component: ComponentCreator('/vi/blog/tags/docusaurus', 'b8d'),
    exact: true
  },
  {
    path: '/vi/blog/tags/facebook',
    component: ComponentCreator('/vi/blog/tags/facebook', '135'),
    exact: true
  },
  {
    path: '/vi/blog/tags/hello',
    component: ComponentCreator('/vi/blog/tags/hello', '155'),
    exact: true
  },
  {
    path: '/vi/blog/tags/hola',
    component: ComponentCreator('/vi/blog/tags/hola', 'a4f'),
    exact: true
  },
  {
    path: '/vi/blog/welcome',
    component: ComponentCreator('/vi/blog/welcome', '44a'),
    exact: true
  },
  {
    path: '/vi/markdown-page',
    component: ComponentCreator('/vi/markdown-page', '896'),
    exact: true
  },
  {
    path: '/vi/docs',
    component: ComponentCreator('/vi/docs', '1de'),
    routes: [
      {
        path: '/vi/docs/category/tutorial---basics',
        component: ComponentCreator('/vi/docs/category/tutorial---basics', '7c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vi/docs/category/tutorial---extras',
        component: ComponentCreator('/vi/docs/category/tutorial---extras', '0f0'),
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
        component: ComponentCreator('/vi/docs/VueJS/installation', 'dd0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', 'dfa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
