import path from 'path';
import { UserConfig, mergeJson } from 'package-manage/packageMerger'

const workSpace = process.cwd();

const config : UserConfig= {
  inputPath: path.resolve(workSpace, 'setups/packages'),
  outputPath: path.resolve(workSpace, 'setups/packages'),
  outputFileName: 'package.merged.json',
  combination: [
    'os.json',
    'typescript.json',
    'yarn.lock',
    'storybook.json',
    'manage.json',
    'json-view.json',
    'lint.json',
    'merged.json',
    'scripts.json',
    'markdown.json',
    'mui.json',
    'html-viewer.json',
    'parkdown.json',
    'gh-pages.json',
    'base.json',
    'vite.json'
  ],
  excludeFields: ['creation_log', 'summary'],
  noDuplicateFields: ['name', 'version', 'description', 'author', 'license  '],
  preferredOrder: [
    'name',
    'version',
    'description',
    'keywords',
    'homepage',
    'bugs',
    'license',
    'author',
    'contributors',
    'funding',
    'files',
    'main',
    'types',
    'browser',
    'bin',
    'man',
    'directories',
    'repository',
    'scripts',
    'config',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'peerDependenciesMeta',
    'optionalDependencies',
    'bundledDependencies',
    'engines',
    'os',
    'cpu',
    'private',
    'publishConfig',
    'workspaces',
  ],
};

mergeJson(config)

