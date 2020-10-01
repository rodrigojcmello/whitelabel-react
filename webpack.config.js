const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = { NODE_ENV: '' }) => {
  const prod = env.NODE_ENV !== 'development';

  return {
    entry: './src/routes/index.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'public'),
    },
    mode: prod ? 'production' : 'development',
    ...(prod ? { devtool: 'source-map' } : {}),
    devServer: !prod ? { historyApiFallback: true } : {},
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin(),
      prod ? new CleanWebpackPlugin() : new webpack.ProgressPlugin(),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'last 1 chrome version' }],
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
                plugins: ['@babel/plugin-proposal-optional-chaining'],
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|woff2?|eot|otf|webp)$/i,
          use: 'file-loader',
        },
        // {
        //   test: /\.ttf$/,
        //   use: [
        //     {
        //       loader: 'ttf-loader',
        //       options: {
        //         name: './public/[hash].[ext]',
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.module.s?css$/,
          use: [
            // MiniCssExtractPlugin.loader,
            'style-loader',
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: prod ? '[hash:base64:5]' : '[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /^((?!\.module).)*s?css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
};
