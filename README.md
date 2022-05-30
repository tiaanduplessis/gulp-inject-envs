
# gulp-inject-envs
[![package version](https://img.shields.io/npm/v/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![package downloads](https://img.shields.io/npm/dm/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Gulp plugin to inject environment variables

## Table of Contents

- [gulp-inject-envs](#gulp-inject-envs)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install gulp-inject-envs
```

With `yarn`:
```sh
yarn add gulp-inject-envs
```

With `pnpm`:
```sh
pnpm add gulp-inject-envs
```

## Usage

```js
const injectEnvs = require('gulp-inject-envs')
const env = { foo: 'bar', ping: 'pong' }

gulp.src('**/*.js')
  .pipe(injectEnvs(env)) // set custom prefix with second argument e.g. {prefix: 'CUSTOM___' }
  .pipe(gulp.dest('/'))

```

And in code: 

```js
const foo = '<ENV::foo>'
console.log(foo) // bar
```

## Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/gulp-inject-envs/issues) or [make a pull request](https://makeapullrequest.com/).

## License

[MIT © Tiaan du Plessis](./LICENSE)
