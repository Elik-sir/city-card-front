const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withBabelMinify = require('next-babel-minify');
const withProgressBar = require('next-progressbar');

const nextConfig = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    config.plugins = [...config.plugins];
    return config;
  },
  //target: 'serverless',
};

module.exports = withPlugins(
  [withCSS({}), withBabelMinify(), withProgressBar({}), withPWA({})],
  nextConfig
);
