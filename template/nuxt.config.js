module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global Styles
  */
  css: [
    '~/assets/css/style.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    node: {
      'child_process': 'empty'
    },
    /*
    ** Shortcuts
    */
    extend (config, { isDev, isClient }) {
      config.node = {
        'child_process': 'empty',
        'net': 'empty'
      }
      let src = config.resolve.alias['~']
      config.resolve.alias['~utils'] = path.join(src, 'utils')
      config.resolve.alias['~config'] = path.join(src, 'config')
      config.resolve.alias['~store'] = path.join(src, 'store')
      // create api alias base context
      config.resolve.alias['create_api'] = process.client ? path.join(src, 'store/api_client.js') : path.join(src, 'store/api_client.js')
    },
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
