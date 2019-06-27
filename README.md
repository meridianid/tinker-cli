# Tinker

The easiest and fastest way to start new web projects with [invoker-next](https://github.com/meridianid/invoker-next), [invoker-gatsby](https://github.com/meridianid/invoker-gatsby), and soon invoker-crapp.

### Table of Content

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Issues and Feedback](#issues-and-feedback)

## Requirements

To use this CLI tools properly, you need to have these installed on your machine

1. **[Node.js](https://nodejs.org/en/)**
2. **npm**, you get this automatically when installing node.js. Or if you like me, you can use **[Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)**
3. **Gatsby CLI** if you are building [gatsby](https://gatsbyjs.org) project. Run this command on your terminal to install it

    ```shell
    # npm
    npm install -g gatsby-cli

    # or, using yarn
    yarn global add gatsby-cli
    ```

And for the deployment purpose, we recommend you to install these tools. You can deploy your project with just single command through the terminal and make it available for the client to access right away really speed up the feedback process.

1. [Netlify CLI](https://www.netlify.com/), or
2. [Now.sh](https://now.sh)

```shell
# npm
npm install -g netlify-cli now

# yarn
yarn global add netlify-cli now
```

## Installation

To install it on your machine, just run this command on your terminal

```shell
npm install -g mid-tinker-cli
```

or if you are using yarn

```shell
yarn global add mid-tinker-cli
```

## Usage

Tinker will help you scaffold 2 kind of starter which are Next.js and Gatsby.js

### Gatsby

```shell
tinker gatsby your-project-name
```

### Next.js

```shell
tinker next your-project-name
```

## Issues and Feedback

This project is still on the early stage. The more we use it, the more we can improve it.

If you are having trouble using Tinker and have questions regarding the project starter, don't hestitate to let us know by [submitting a new issue](https://github.com/meridianid/tinker-cli/issues/new).
