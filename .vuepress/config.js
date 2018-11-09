module.exports = {
  base: '/',
  title: 'How-to',
  description: "A personal collection of how-to's",
  port: 2511,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Js',
        items: [
          { text: 'Vue', link: '/js/vue/' },
          { text: 'Vuepress', link: '/js/vuepress/' },
          { text: 'Yarn / Npm', link: '/js/npm_yarn/' }
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'Streams', link: '/java/streams/' },
          { text: 'Unit Test', link: '/java/unittest/' }

        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Git', link: '/tools/git/' },
          { text: 'Gradle', link: '/tools/gradle/' },
          { text: 'JHipster', link: '/tools/jhipster/' },
          { text: 'Docker', link: '/tools/docker/' },
          { text: 'Gitbook', link: '/tools/gitbook/' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
