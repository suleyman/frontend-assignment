module.exports = {
  lintOnSave: false,
	css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
}
