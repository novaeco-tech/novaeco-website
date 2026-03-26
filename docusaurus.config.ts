import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NovaEco',
  tagline: 'Digital Public Infrastructure for the Circular Economy',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://novaeco.tech',
  baseUrl: '/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // GitHub / Deployment Config
  organizationName: 'novaeco-tech', // Usually your GitHub org/user name.
  projectName: 'novaeco-website',
  onBrokenLinks: 'warn', // the Sphinx docs are injected after the build (at deployment time)
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
      {
        docs: {
          // [CRITICAL] Serve Docusaurus docs at /user-guides so /docs is free for Sphinx
          routeBasePath: 'user-guides',
          sidebarPath: './sidebars.ts',
          // Remove this if you don't want "Edit this page" links
          editUrl: 'https://github.com/novaeco-tech/novaeco-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/novaeco-tech/novaeco-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/novaeco-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NovaEco',
      logo: {
        alt: 'NovaEco Logo',
        src: 'img/logo.svg', // Ensure you have this logo in static/img/
      },
      items: [
        // 1. User Guides (Docusaurus)
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Guides',
        },
        // 2. Technical Docs (Sphinx Injection)
        {
          to: '/docs/index.html', // Direct link to the injected Sphinx site
          label: 'Developer API',
          position: 'left',
          target: '_self', // Keep navigation seamless
        },
        // 3. Blog / Announcements
        {to: '/blog', label: 'Ecosystem Blog', position: 'left'},
        
        // 4. Mission Control / Identity (Call to Action)
        {
          to: 'https://admin.novaeco.tech',
          label: 'Launch Mission Control',
          position: 'right',
          className: 'button button--primary button--lg', 
        },
        {
          href: 'https://github.com/novaeco-tech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ecosystem',
          items: [
            { label: 'NovaAdmin (Dashboard)', to: 'https://admin.novaeco.tech' },
            { label: 'NovaTrade (Marketplace)', to: 'https://trade.novaeco.tech' },
            { label: 'Identity & SSO', to: 'https://id.novaeco.tech' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'NovaEco CLI', to: 'https://github.com/novaeco-tech/novaeco-devtools' },
            { label: 'API Reference', to: '/docs/api/gateway.html' },
            { label: 'Architecture & ADRs', to: '/user-guides/architecture/overview' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Circular Engineering Nova', to: 'https://circular.engineering' },
            { label: 'Discussions', to: 'https://github.com/orgs/novaeco-tech/discussions' },
            { label: 'Legal & Imprint', to: '/legal' },
            { label: 'Status', to: 'https://status.novaeco.tech' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Circular Engineering Nova GmbH.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;