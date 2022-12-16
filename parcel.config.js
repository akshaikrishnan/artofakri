const PurgecssPlugin = require("purgecss-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  // other configuration options...
  plugins: [
    new PurgecssPlugin({
      paths: ["./src/*.html"],
    }),
    new ImageminPlugin({
      test: /\.(jpeg|jpg|png|gif|svg)$/i,
      imageminOptions: {
        plugins: [["imagemin-jpegtran", { quality: 80 }]],
      },
    }),
  ],
};
