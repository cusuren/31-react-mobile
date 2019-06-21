const { override,addBadelPlugins,fixBabelImports} = require('customize-cra');
module.exports = override(
    ...addBabelPlugins(
        [
            "styled-jsx/babel",
            {"plugins": ["styled-jsx-plugin-less"]}
        ]
    ),
    fixBabelImports('import',{
        libraryName:'antd-mobile',style:'css'
    })
)