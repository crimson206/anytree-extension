import { UserConfig, createJson } from 'package-manage/packageCreator'

const packagesDir = 'setups/packages'
const packages = '@mui/material @mui/icons-material @emotion/react @emotion/styled'.split(' ')

const config : UserConfig= {
  packagesDir: packagesDir,
  packageJsonPath: 'setups/packages/package.json',
  nodeModulesPath: 'setups/packages/node_modules',
  outputMiddleName: 'mui',
  add: packages, //["vite"],
  overwrite: true,
  dev: true,
};

createJson(config)

export default config;
