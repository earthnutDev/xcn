// 因为先执行的 `npm run b` 进行 rollup 打包，所以 `dist` 一定存在
import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFile,
} from 'a-node-tools';

let packageJson = readFileToJsonSync('./package.json');

['scripts', 'devDependencies', 'lint-staged', 'private'].forEach(
  key => delete packageJson[key],
);

packageJson = {
  main: 'cjs/index.cjs',
  module: 'mjs/index.mjs',
  types: 'types/index.d.ts',
  ...packageJson,
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  files: ['mjs/', 'cjs/', 'types/'],
  exports: {
    '.': {
      import: {
        default: './mjs/index.mjs',
        types: './types/index.d.ts',
      },
      require: {
        default: './cjs/index.cjs',
        types: './types/index.d.ts',
      },
    },
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/earthnutDev/xcn.git',
  },
  author: {
    name: 'earthnut',
    email: 'earthnut.dev@outlook.com',
    url: 'https://earthnut.dev',
  },
  browserslist: ['node>=18.0.0'],
  engines: {
    node: '>=18.0.0',
  },
  keywords: ['xcn', 'mix-cn'],
  homepage: 'https://earthnut.dev/xcn',
  bugs: {
    url: 'https://github.com/earthnutDev/xcn/issues',
    email: 'earthnut.dev@outlook.com',
  },
};

{
  const distPath = getDirectoryBy('dist', 'directory');

  const distPackagePath = pathJoin(distPath, './dist/package.json');

  writeJsonFile(distPackagePath, packageJson);
}
