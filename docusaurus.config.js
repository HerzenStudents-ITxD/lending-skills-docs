// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация лендинга ИТвД',
  tagline: 'Documentation make the world go round',
  favicon: 'img/favico.svg',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/ITxD-docs/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ITxD Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Architecture/intro',
            position: 'left',
            label: 'Документация',
          },
          { 
            to: '/blog',
            label: 'Блог',
            position: 'left' },
          {
            to: '/team', 
            label: 'Команда', 
            position: 'left' 
          },  
          {
            to: '/faq',
            label: 'FAQ',
            position: 'left'
          },
          {
            href: 'https://github.com/enakaeeeena/landing_14-05',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              { label: 'Архитектура: Инструкции', to: '/docs/Architecture/intro' },
              { label: 'BRD&SRS: Главная цель', to: '/docs/BRD&SRS/1' },
            ],
          },
          {
            title: 'Связаться',
            items: [
              { label: 'Команда', to: '/team' },
              { label: 'Сайт РГПУ', href: 'https://www.herzen.spb.ru/' },
              { label: 'Telegram РГПУ', href: 'https://t.me/herzenexpert' },
            ],
          },
          {
            title: 'Полезные ресурсы',
            items: [
              { label: 'GitHub Frontend', href: 'https://github.com/enakaeeeena/landing_14-05' },
              { label: 'GitHub Backend', href: 'https://github.com/enakaeeeena/landing_skills_backend' },
              { label: 'GitHub Документация', href: 'https://github.com/enakaeeeena/landing_14-05' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentation, Inc. Chto-to tam ITxD.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
