module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/ui/vendors/customize-bootstrap.sass";`
      }
    }
  }
};