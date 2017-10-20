module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['import', 'flowtype'],
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 0,
  }
};
