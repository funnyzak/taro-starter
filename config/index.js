// eslint-disable-next-line import/no-commonjs
const path = require('path');
const { existsSync } = require('fs');

const config = {
  projectName: 'app',
  date: '2021-9-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist/' + process.env.TARO_ENV,
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: 'src/sitemap.json',
        to: `dist/${process.env.TARO_ENV}/sitemap.json`
      }
    ],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    devServer: {
      hot: false
    },
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash].[ext]'
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css'
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  copy: {
    patterns: [
      {
        from: 'public/',
        to: `dist/${process.env.TARO_ENV}/public/`,
        ignore: ['*.i3d']
      } // 指定需要 copy 的目录
    ]
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

module.exports = function (merge) {
  // APP_ENV 必须前置在 NODE_ENV 逻辑前
  if (
    process.env.APP_ENV &&
    process.env.APP_ENV !== '' &&
    process.env.APP_ENV !== null &&
    existsSync(path.resolve(__dirname, `./${process.env.APP_ENV}.js`))
  ) {
    return merge({}, config, require(`./${process.env.APP_ENV}.js`));
  }
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }

  return merge({}, config, require('./prod'));
};
