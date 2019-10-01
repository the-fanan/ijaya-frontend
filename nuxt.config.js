module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ijaya Management',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Music talent management house' }
    ],
    link: [
     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     { rel: 'icon', type: 'image/png', href: '/ijaya-black.png' },
    ]
  },
  css: [
    '@/assets/sass/main.scss',
  ],
  plugins: [
    {src: '~/plugins/localStorage.js', ssr: false},
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070',},
  /*
  ** Modules configuration
  * all bootstrap assets for pages are exported here
  */
  modules: ['bootstrap-vue/nuxt'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

