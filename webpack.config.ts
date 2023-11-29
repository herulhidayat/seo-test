import path from 'path'
import { ProvidePlugin } from 'webpack'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

import ESLintPlugin from 'eslint-webpack-plugin'

const config: Configuration = {
  output: {
    publicPath: '/',
  },
  entry: ['./src/index.tsx', './src/assets/js/fas.js'],
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, './node_modules')],
        use: {
          loader: 'svg-inline-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static',
          },
        },
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [process.env.NODE_ENV == 'development' && require.resolve('react-refresh/babel')].filter(Boolean),
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@config': path.resolve(__dirname, 'src/app/config/'),
      '@helper': path.resolve(__dirname, 'src/app/helper/'),
      '@interface': path.resolve(__dirname, 'src/app/interface/'),
      '@store': path.resolve(__dirname, 'src/app/store/'),
      '@services': path.resolve(__dirname, 'src/app/services/'),
      '@components': path.resolve(__dirname, 'src/app/components/'),
      '@modules': path.resolve(__dirname, 'src/app/modules/'),
      '@pages': path.resolve(__dirname, 'src/app/pages/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
    fallback: {
      os: false,
    },
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new ModuleFederationPlugin({
      name: 'app',
      remotes: {
        // Charts: 'Charts@http://192.168.24.39:8600/remoteEntry.js',
        // Forms: 'Forms@http://192.168.24.39:8620/remoteEntry.js',
      },
      shared: {
        react: { eager: true, singleton: true, requiredVersion: dependencies['react'] },
        'react-dom': { eager: true, singleton: true, requiredVersion: dependencies['react-dom'] },
      },
    }),
  ],
}

export default config
