module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    // 链判断运算符支持 ?.
    '@babel/plugin-proposal-optional-chaining'
  ],
  env: {
    utils: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['fei-editor'],
            alias: { 'fei-editor/src': 'fei-editor/lib' },
          },
        ],
      ],
    },
  },
}
