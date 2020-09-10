module.exports = {
  title: 'Magenta',
  tagline: 'Learn About Microservices, API, and Database',
  url: 'https://frendydw.github.io',
  baseUrl: '/docusaurus-tryout-v2/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'frendydw', // Usually your GitHub org/user name.
  projectName: 'docusaurus-tryout-v2', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    navbar: {
      title: 'Magenta',
      logo: {
        alt: 'My Site Logo',
        src: 'img/magenta.jpg',
      },
      items: [
        {
          to: 'docs/microservices-introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/1.1.0/microservices-introduction/', label: 'Oldest Version', position: 'left'},

        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Microservices',
              to: 'docs/microservices-introduction',
            },
            {
              label: 'API',
              to: 'docs/api-introduction/',
            },
            {
              label: 'Database',
              to: 'docs/database-introduction/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} frendydw`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
