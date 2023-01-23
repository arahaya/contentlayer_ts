const { withContentlayer } = require("next-contentlayer");

const path = require('path');
const globImporter = require('node-sass-glob-importer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: { importer: globImporter(), includePaths: [path.join(__dirname, './src/styles/globals.scss')], },
}

module.exports = withContentlayer(nextConfig)
