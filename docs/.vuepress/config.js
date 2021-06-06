const { description } = require('../../package')

module.exports = {

  title: 'discord-buttons',
  description: description,

  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://i.imgur.com/m57ng0P.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "https://i.imgur.com/0Dfw71u.png" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:title', content: 'discord-buttons documentation' }],
		['meta', { property: 'og:description', content: 'Official documentation for discord-buttons' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://discord-buttons.js.org' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
  ],

  themeConfig: {
    smoothScroll: true,
    searchPlaceholder: 'Search',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/documentation/#welcome',
      },
      {
        text: 'Github',
        link: 'https://github.com/AngeloCore/discord-buttons'
      },
    ],
    sidebar: {
      '/documentation/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            './getting-started/installation',
            './getting-started/setup',
          ]
        },
        {
          title: 'Sending Buttons',
          collapsable: false,
          children: [
            './sending-buttons/channel-send',
            './sending-buttons/message-edit',
            './sending-buttons/message-reply'
          ]
        },
        {
          title: 'Contructors',
          collapsable: false,
          children: [
            './constructors/message-button',
            './constructors/message-action-row',
          ]
        },
        {
          title: 'Events/Collectors',
          collapsable: false,
          children: [
            './events/clickButton',
            './events/createButtonCollector',
            './events/awaitButtons',
          ]
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            './miscellaneous/examples',
            './miscellaneous/faq',
          ]
        },
      ],
    }
  },

  theme: 'jac',

  markdown: {
    lineNumbers: true,
  },

  plugins: [
    '@xiaopanda/vuepress-plugin-code-copy',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
