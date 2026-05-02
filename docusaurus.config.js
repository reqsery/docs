// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Revro Documentation',
  tagline: 'AI-powered tools for Roblox and Discord creators',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://reqsery.github.io',
  baseUrl: '/docs/',

  organizationName: 'reqsery',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          routeBasePath: '/',
          editUrl: 'https://github.com/reqsery/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/revro-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Revro Docs',
        logo: {
          alt: 'Revro Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'revroSidebar',
            position: 'left',
            label: 'Revro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mcModPorterSidebar',
            position: 'left',
            label: 'MC Mod Porter',
          },
          {
            type: 'docSidebar',
            sidebarId: 'discordBotsSidebar',
            position: 'left',
            label: 'Discord Bots',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://discord.gg/vV2USr9phF',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/reqsery',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/RevroDev',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Revro',
            items: [
              { label: 'Getting Started', to: '/revro/getting-started' },
              { label: 'Features', to: '/revro/features' },
              { label: 'Pricing', to: '/revro/pricing' },
              { label: 'API Reference', to: '/revro/api-reference' },
            ],
          },
          {
            title: 'Projects',
            items: [
              { label: 'MC Mod Porter', to: '/mc-mod-porter/installation' },
              { label: 'Discord Bots', to: '/discord-bots/overview' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/vV2USr9phF' },
              { label: 'Twitter', href: 'https://twitter.com/RevroDev' },
              { label: 'GitHub', href: 'https://github.com/reqsery' },
              { label: 'Support', to: '/community/support' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Contact', to: '/community/contact' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Revro. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'lua', 'bash', 'json', 'typescript', 'python'],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
