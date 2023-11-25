// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Firestore Eloquent',
  tagline: 'Eloquent for firestore.',
  favicon: 'img/logo-s.png',
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      { hashed: true }
    ],
  ],

  // Set the production url of your site here
  url: 'https://firestore-eloquent.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FreddyWhest', // Usually your GitHub org/user name.
  projectName: 'firestore-eloquent', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/FreddyWhest/firestore-eloquent-docs/tree/main/',
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
      // Replace with your project's social card
      image: 'img/logo_card.png',
      /* announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#e8d7ff',
        textColor: '#091E42',
        isCloseable: false,
      }, */
      navbar: {
        title: 'Firestore Eloquent',
        logo: {
          alt: 'Firestore Eloquent Logo',
          src: 'img/logo-s.png',
        },
        items: [
          {
            href: '/docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/FreddyWhest/firestore-eloquent',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Firestore Eloquent. Built by <a href="https://github.com/FreddyWhest">Alfred Nti.</a>`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash'],
      }
    }),
};

export default config;
