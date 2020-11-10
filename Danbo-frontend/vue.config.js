module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '/user': {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      '/blog': {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
    },
}