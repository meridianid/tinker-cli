'use strict';

const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const execa = require('execa');

module.exports = function processExit(projectPath, projectName, appType) {
  if (appType === 'native') {
    return;
  }

  const readme = `# ${projectName}\n\nThis project was bootstrapped with [\`mid-tinker-cli\`](https://github.com/meridianid/tinker-cli)`

  try { fs.unlinkSync(path.join(projectPath, 'src', 'README.md')) } catch (e) { /* Noop */ }
  try { fs.unlinkSync(path.join(projectPath, 'src', '.git')) } catch (e) { /* Noop */ }
  try { fs.unlinkSync(path.join(projectPath, '.gitmodules')); } catch (e) { /* Noop */ }
  try { fs.writeFileSync(path.join(projectPath, 'README.md'), readme) } catch (e) { /* Noop */ }

  try {
    fse.removeSync(path.join(projectPath, 'src', '.gitignore'))
  } catch (error) {
    /* Noop */
  }

  try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'Link.js'), path.join(projectPath, 'src/components/Link/Link.js')) } catch (e) { /* Noop */ }

  try {
    fse.copySync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'NavbarBrand'),
      path.join(projectPath, 'src/components/NavbarBrand')
    )
  } catch (e) {
    /* Noop */
  }

  if (appType === 'cra') {
    try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'index.tsx'), path.join(projectPath, 'src/index.tsx')) } catch (e) { /* Noop */ }
    try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'serviceWorker.ts'), path.join(projectPath, 'src/serviceWorker.ts')) } catch (e) { /* Noop */ }
  }

  if (appType === 'next') {
    // try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'config.ts'), path.join(projectPath, 'src/utils/config.ts')) } catch (e) { /* Noop */ }
  }

  if (appType === 'gatsby') {
    // try {
    //   fs.ensureDirSync(path.join(projectPath, 'src/layouts/Default'))
    // } catch (e) {
    //   /* Noop */
    // }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'Default'),
        path.join(projectPath, 'src/layouts/Default')
      )
    } catch (e) {
      /* Noop */
    }

    try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'NavLink.js'), path.join(projectPath, 'src/components/NavLink/NavLink.js')) } catch (e) { /* Noop */ }

    try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'index.js'), path.join(projectPath, 'src/pages/index.js')) } catch (e) { /* Noop */ }

  }

  try { execa.sync('git', ['add', '.'], { stdio: 'ignore' }) } catch (e) { /* Noop */ }
  try { execa.sync('git', ['commit', '--amend', '--no-edit'], { stdio: 'ignore' }) } catch (e) { /* Noop */ }

}
