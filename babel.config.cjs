module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.0.0',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};