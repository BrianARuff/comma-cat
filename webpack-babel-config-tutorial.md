# Basic Babel and Webpack Configuration Tutorial Without a Framework

1. Create your application
2. Run `npm init` and answer the questions it will ask as you see fit.
3. run `npm i --save-dev webpack webpack-dev-server babel-core 
babel-loader babel-preset-env` to install all the needed dependencies. Note that these are dev-dependencies as indicated by the `--save-dev` flag used in the command.
4. In your `package.json` file under the scripts object, add in the following `"build": "webpack"`. This will allows us to run webpack in the terminal by typing out `npm run build`
5. Create a file called `webpack.config.js`. This is the place where we will store our webpack configuration information. Place it at the top of your app's folder directory.
6. At the top of the `webpack.config.js` file type in the following `const path = require("path");` this will allow us to manipulate files paths with node very easily.
7. Create a folder at the top level of your file structure called `build`
8. Use npm to install the following `npm install --save-dev @babel/preset-env`
9. Paste the following into your webpack config file.
  ```
  const path = require("path");

  module.exports = {
    entry: {
      app: path.resolve(__dirname, "comma-cat-max.js")
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "comma-cat.js"
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"]
          }
        }
      ]
    },
    mode: "production"
  }
  ```
Note that `__dir` is the current directory of the `webpack.config.js` file so it should also be placed at the same level as your build directory unles you want to configure differently yourself. I recommend starting simple and then expanding in difficulty though. Also, setting the mode to production does things like minify your output.