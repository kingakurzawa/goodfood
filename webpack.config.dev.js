export default {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            opcje: {
              sourceMap: true,
              moduły: true,
              localIdentName: "[local] _ [hash: base64: 5]"
            }
          },
          {
            loader: "postcss-loader",
            opcje: {
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            opcje: { sourceMap: true }
          }
        ]
      }
    ]
  }
};
