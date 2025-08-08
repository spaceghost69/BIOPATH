import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BioPath',
  tagline: 'Choose Your Evolution - The Complete Guide to Peptide Optimization',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://biopath.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'biopath', // Usually your GitHub org/user name.
  projectName: 'biopath-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to set it to `zh-Hans`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/biopath/biopath-docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/biopath/biopath-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/biopath-social-card.jpg',
    navbar: {
      title: 'BioPath',
      logo: {
        alt: 'BioPath Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/ebook/introduction',
          label: 'eBook',
          position: 'left',
        },
        {
          to: '/docs/reference/cheat-sheet',
          label: 'Quick Reference',
          position: 'left',
        },
        {
          to: '/docs/business/strategy',
          label: 'Business Strategy',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/biopath/biopath-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Complete Guide',
              to: '/docs/ebook/introduction',
            },
            {
              label: 'Quick Reference',
              to: '/docs/reference/cheat-sheet',
            },
            {
              label: 'Protocols',
              to: '/docs/reference/protocols',
            },
          ],
        },
        {
          title: 'Business',
          items: [
            {
              label: 'Brand Strategy',
              to: '/docs/brand/positioning',
            },
            {
              label: 'Go-to-Market',
              to: '/docs/business/strategy',
            },
            {
              label: 'Content Marketing',
              to: '/docs/marketing/content-strategy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/biopath/biopath-docs',
            },
            {
              label: 'Valkyr Labs',
              href: 'https://biopath-labs.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BioPath. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'biopath',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.github.io/myProject/
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'support_us',
      content:
        '⭐️ If you find this peptide guide valuable, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/biopath/biopath-docs">GitHub</a>! ⭐️',
      backgroundColor: '#1B2951',
      textColor: '#E8F4F8',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [],
};

export default config;
