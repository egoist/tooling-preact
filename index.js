const path = require('path')

module.exports = options => {
  const babel = options.babel
  babel.plugins.push(
    [require.resolve('babel-plugin-transform-react-jsx'), {pragma: 'h'}]
  )

  return {
    babel,
    webpack(cfg) {
      cfg.resolve.alias = cfg.resolve.alias || {}
      Object.assign(cfg.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      })
      cfg.resolve.modules.push(
        path.join(__dirname, 'node_modules')
      )
      return cfg
    }
  }
}
