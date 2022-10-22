const path = require('path')

const filename = path.basename(__filename, '.js')

module.exports = {
  env: {
    NODE_ENV: '"development"',
    APP_NAME: '"appname"',
    BASE_URL: '"https://domain.com"',
  },
  defineConstants: {},
  mini: {},
  h5: {},
  outputRoot: `dist/${filename.split('_').join('/')}`,
}
