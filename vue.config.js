// module.exports = {
//     devServer: {
//         port: 9001
//     }
// }
const { resolve } = require('path')

// function resolve(dir) {
//     return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
// }
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('_api',resolve('./src/api'))
            .set('_assets',resolve('./src/assets'))
    }

}