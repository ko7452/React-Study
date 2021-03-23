module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin: prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
// 구글에 검색 시 다 나온다. 설정 가져와서 사용하면 된다.
