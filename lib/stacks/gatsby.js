'use strict';

const chalk = require('chalk');

const messages = require('../utils/messages');
const initGit = require('../utils/init-git');
const output = require('../utils/output');

/**
 * Might be good idea to provide starter from branches other than #master
 */

module.exports = async function gatsby(projectName, projectPath) {
  output.info(`🚀 Creating ${chalk.bold(chalk.green(projectName))} using ${chalk.bold('gatsby-cli/lib/init-starter')} and ${chalk.bold('invoker-gatsby')}...`);

  await require('gatsby-cli/lib/init-starter')('https://github.com/meridianid/invoker-gatsby#master --recursive', { rootPath: projectName });

  process.chdir(projectPath);

  await initGit('Gatsby');

  messages.start(projectName, 'gatsby');
};
