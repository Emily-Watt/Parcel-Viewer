require('dotenv').config()
var GOOGLE_MAPS = process.env.GOOGLE_MAPS_API;
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Summer Project Map',
    meta: [
      { name: 'viewport', content: 'text/html, charset=utf-8' },
      { hid: 'description', name: 'description', content: 'initial-scale=1, maximum-scale=1,user-scalable=no'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://js.arcgis.com/3.29/dijit/themes/claro/claro.css' },
      { rel: 'stylesheet', href: 'https://js.arcgis.com/3.29/esri/css/esri.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    ['nuxt-google-maps-module', {
      /* module options */
      key: GOOGLE_MAPS , // Default
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
