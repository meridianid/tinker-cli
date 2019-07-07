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

  // Remove unnecessary files
  try { fse.removeSync(path.join(projectPath, 'src', '.gitignore')) } catch (e) { /* Noop */ }
  try { fse.removeSync(path.join(projectPath, 'docs')) } catch (e) { /* Noop */ }

  // Copy <Link/> and <NavLink/>
  try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'Link.js'), path.join(projectPath, 'src/components/Link/Link.js')) } catch (e) { /* Noop */ }
  try { fs.copyFileSync(
    path.join(path.resolve(__dirname), '../../overwrites', appType, 'NavLink.js'),
    path.join(projectPath, 'src/components/NavLink/NavLink.js'))
  } catch (e) { /* Noop */ }

  // Copy <Brand/> and <Intro />
  try {
    fse.copySync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'Brand'),
      path.join(projectPath, 'src/components/Brand')
    )
  } catch (e) { /* Noop */ }
  try {
    fse.copySync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'Intro'),
      path.join(projectPath, 'src/components/Intro')
    )
  } catch (e) { /* Noop */ }

  // CRAPP
  if (appType === 'cra') {

    try {
      fs.copyFileSync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'index.tsx'),
        path.join(projectPath, 'src/index.tsx')
      )
    } catch (e) { console.log(e, null, 2) }

    try {
      fs.copyFileSync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'serviceWorker.ts'),
        path.join(projectPath, 'src/serviceWorker.ts')
      )
    } catch (e) { console.log(e, null, 2) }

  }

  // NEXT
  if (appType === 'next') {
    // try { fs.copyFileSync(path.join(path.resolve(__dirname), '../../overwrites', appType, 'config.ts'), path.join(projectPath, 'src/utils/config.ts')) } catch (e) { /* Noop */ }

    try { fs.copyFileSync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'index.js'),
      path.join(projectPath, 'src/pages/index.js'))
    } catch (e) { console.log(e, null, 2) }

    try { fs.copyFileSync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'about.js'),
      path.join(projectPath, 'src/pages/about.js'))
    } catch (e) { console.log(e, null, 2) }

    try { fs.copyFileSync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'blogs.js'),
      path.join(projectPath, 'src/pages/blogs.js'))
    } catch (e) { console.log(e, null, 2) }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'Default'),
        path.join(projectPath, 'src/layouts/Default')
      )
    } catch (e) { console.log(e, null, 2) }

  }

  // GATSBY
  if (appType === 'gatsby') {

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'Default'),
        path.join(projectPath, 'src/layouts/Default')
      )
    } catch (e) { console.log(e, null, 2) }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'index.js'),
        path.join(projectPath, 'src/pages/index.js')
      )
    } catch (e) { console.log(e, null, 2) }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'about.js'),
        path.join(projectPath, 'src/pages/about.js')
      )
    } catch (e) { console.log(e, null, 2) }

    try { fs.copyFileSync(
      path.join(path.resolve(__dirname), '../../overwrites', appType, 'blogs.js'),
      path.join(projectPath, 'src/pages/blogs.js'))
    } catch (e) { console.log(e, null, 2) }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'templates'),
        path.join(projectPath, 'src/templates')
      )
    } catch (e) { console.log(e, null, 2) }

    try {
      fse.copySync(
        path.join(path.resolve(__dirname), '../../overwrites', appType, 'utils'),
        path.join(projectPath, 'src/utils')
      )
    } catch (e) { console.log(e, null, 2) }

  }

  try { execa.sync('git', ['add', '.'], { stdio: 'ignore' }) } catch (e) { /* Noop */ }
  try { execa.sync('git', ['commit', '--amend', '--no-edit'], { stdio: 'ignore' }) } catch (e) { /* Noop */ }

}
