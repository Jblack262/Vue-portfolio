module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/VuePortfolio/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/styles/_variables.scss";
                `
            }
        }
    }
}