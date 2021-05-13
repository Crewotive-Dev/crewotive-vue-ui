module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/sass/vendors/customize-bootstrap.sass";`
      }
    }
  }
};