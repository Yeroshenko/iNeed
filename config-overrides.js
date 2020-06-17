const { override, fixBabelImports, addLessLoader } = require('customize-cra')

// tutorial: https://frontendernotes.netlify.app/ant-design-customize

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@border-radius-base': '8px',
        '@btn-font-weight': '600',
        '@input-color': '#000000'
      },
    },
  })
)