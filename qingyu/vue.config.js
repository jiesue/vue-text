const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {

    // 基本路径

    publicPath: './',

    // 输出文件目录

    outputDir: 'dist',

    // eslint-loader 是否在保存的时候检查

    lintOnSave: true,


    chainWebpack: (config) => {
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))

    },

    configureWebpack: () => {},

    // vue-loader 配置项

    // https://vue-loader.vuejs.org/en/options.html



    // 生产环境是否生成 sourceMap 文件

    productionSourceMap: true,

    // css相关配置
    runtimeCompiler: true,
    css: {

        // 是否使用css分离插件 ExtractTextPlugin

        extract: ['production', 'test'].includes(process.env.NODE_ENV),

        // 开启 CSS source maps?

        sourceMap: false,

        // css预设器配置项

        loaderOptions: {},

        // 启用 CSS modules for all css / pre-processor files.

        modules: false

    },

    // use thread-loader for babel & TS in production build

    // enabled by default if the machine has more than 1 cores

    parallel: require('os').cpus().length > 1,

    // 是否启用dll

    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode


    // PWA 插件相关配置

    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {},

    // webpack-dev-server 相关配置

    devServer: {

        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        before: app => {},
        proxy: {
            'https://cdn.mom1.cn': { // search为转发路径
                target: 'https://cdn.mom1.cn', // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: false // 设置同源  默认false，是否需要改变原始主机头为目标URL,               
            }
        }

    },

    // 第三方插件配置
    pluginOptions: {

        // ...

    }

}