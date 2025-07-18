import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'GooseLang Documentation',
  tagline: 'The Ultimate Guide to GooseLang Programming Language',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gooselang.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GooseLang-Dev', // Usually your GitHub org/user name.
  projectName: 'gooselang.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
      zh: {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/GooseLang-Dev/gooselang.github.io/tree/main/',
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom'
  ],

  themeConfig:
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GooseLang',
        logo: {
          alt: 'GooseLang',
          src: 'img/logo.svg',
          href: '#',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            position: 'left',
            label: 'Home',
            href: 'https://gooselang.dev/',
            target: '_blank',
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'go'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'var(--ifm-background-surface-color)',
          dark: 'var(--ifm-background-surface-color)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    } satisfies Preset.ThemeConfig,
};

export default config;