<!-- ⚠️ This README has been generated from the file(s) ".config/docs/blueprint-readme-cli.md" ⚠️--><div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/Probundle">
      <img width="148" height="148" alt="Probundle logo" src="https://gitlab.com/megabyte-labs/npm/cli/probundle/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center"><i></i>Bundle Your Production Dependencies with Probundle<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">An NPM CLI maintained by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/Probundle/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://gitter.im/megabyte-labs/community" title="Chat with the community on Gitter" target="_blank">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/megabyte-labs/community?logo=gitter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/Probundle" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/npm/cli/probundle" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a href="https://www.npmjs.com/package/probundle" title="Version 3.10.3" target="_blank">
    <img alt="Version: 3.10.3" src="https://img.shields.io/badge/version-3.10.3-blue.svg?cacheSeconds=2592000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/npm/cli/probundle/-/commits/master" title="GitLab CI build status" target="_blank">
    <img alt="Build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/npm/cli/probundle?branch=master&label=build&logo=gitlab&logoColor=white&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/probundle" title="Dependency status reported by Depfu" target="_blank">
    <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/probundle?logo=codeforces&logoColor=white&style=flat-square&logo=npm" />
  </a>
  <a href="https://www.npmjs.com/package/probundle" title="Zip file size" target="_blank">
    <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/probundle?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/package/probundle" title="Total downloads of probundle on npmjs.org" target="_blank">
    <img alt="Total downloads of probundle on npmjs.org" src="https://img.shields.io/npm/dt/probundle?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://snyk.io/advisor/npm-package/probundle" title="Number of vulnerabilities from Snyk scan on probundle" target="_blank">
    <img alt="Number of vulnerabilities from Snyk scan on probundle" src="https://img.shields.io/snyk/vulnerabilities/npm/probundle?style=flat-square&logo=snyk&logoColor=white" />
  </a>
  <a href="website.documentation/npm" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&logoColor=white&style=flat-square" />
  </a>
  <a href="https://github.com/megabyte-labs/Probundle/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> </br><h4 align="center">**A tool that handles compressing, bundling, and unpacking production node_modules dependencies that you want to store in source control**</h4></br>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
  - [Developer Requirements](#developer-requirements)
- [Usage](#usage)
- [Optimization](#optimization)
- [Advanced Usage](#advanced-usage)
- [Performance](#performance)
- [Contributing](#contributing)
  - [Affiliates](#affiliates)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

**Probundle** is a project that brings [pac](https://www.npmjs.com/package/pac) back to life (and support modern versions of Node.js. To achieve the fastest deployments possible, the production `node_modules/` (not devDependencies or any of that optional stuff) can be compressed by running `probundle pack` and stored in source control. Then, when deployment time comes all you have to do is uncompress or run `probundle unpack`. This works well when you also run [node-prune](https://github.com/tj/node-prune) on your `node_modules/` folder, before compressing your production dependencies. We even take it a step further in some cases and create global shared configurations for libraries like [ESLint](https://github.com/ProfessorManhattan/eslint-config-strict-mode) and [Prettier](https://github.com/ProfessorManhattan/prettier-config-sexy-mode) that dynamically load their plugins into `node_modules/` by downloading compressed plugins from source control without having to run `npm install`. We fuss about the performance of our `node_modules/` installation time because it is often a bottleneck.

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

If you are simply including this library in your project, all you need is a recent version of Node.js. **[Node.js >14.18.0](repository.project.node)** is sometimes required and is the only version range we actively support. Albeit, it is highly probable that lower versions will work as well depending on the requirements that this project imports.

### Developer Requirements

The following versions of Node.js and Python are required for development:

- **[Node.js >14.18.0](repository.project.node)**
- **[Python >3.10.0](repository.project.python)**

Other versions may work, but only the above versions are supported. Most development dependencies are installed automatically by our `Taskfile.yml` set-up (even Node.js and Python). Run `bash start.sh` to install **[Bodega](https://github.com/ProfessorManhattan/Bodega)** (an improved fork of [go-task](https://github.com/go-task/task)) and run the initialization sequence. The taskfiles will automatically install dependencies as they are needed, based on what development tasks you are running. For more information, check out the [CONTRIBUTING.md](https://github.com/megabyte-labs/Probundle/blob/main/docs/CONTRIBUTING.md) or simply run:

```shell
npm run help
```

`npm run help` will ensure Bodega is installed and then open an interactive dialog where you can explore and learn about various developer commands.

<a href="#usage" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Usage

After ensuring your `node_modules/` folder only contains the files you want in your compressed, production packages, simply run:

```shell
probundle pack
```

This will create compressed `.tgz` files for each of the packages in the `node_modules/` folder. You can then save these in source control or wherever you like. The compressed files will be stored in the `.modules/` folder.

When you are ready to deploy your compressed packages, perhaps after freshly cloning your repository, just run:

```shell
probundle unpack
```

<a href="#optimization" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Optimization

Before compressing your production `node_modules/`, you might want to take a couple steps to ensure that only what is needed is present in the `node_modules/` folder.

Start off by clearing your `node_modules/` folder:

```shell
rm -rf node_modules
```

Then, install only the _dependencies_ by running:

```shell
npm install --only=prod
```

Next, ensure [node-prune](https://github.com/tj/node-prune) is installed and use it to remove unnecessary files from the `node_modules/` folder by running:

```shell
node-prune
```

At this point, you should check the size of the `node_modules/` folder and ensure that it is a modest size. If it is not and you still want to keep your production `node_modules/` in your source control repository, then you might want to consider wiping the history of the `.modules/` folder periodically. You can follow the [instructions here](https://stackoverflow.com/a/17824718/2476265), replacing `rm -rf node_modules` with `rm -rf .modules`.

<a href="#advanced-usage" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Advanced Usage

The `node_modules/` folder can get pretty big, pretty quickly, so you might want to consider saving your `.modules` to an S3 bucket. You can get really fancy with it and actually bind the `.modules` folder in your project to an S3 Fuse mount using software like [goofys](https://github.com/kahing/goofys). If you are interested, check out our free [Ansible role for goofys](https://github.com/ProfessorManhattan/ansible-goofys).

You can get even fancier with it by doing things like dynamically loading your `node_modules/`. Sometimes you might have a library that only needs a dependency sometimes. In that case, you can download the compressed `.tgz` wherever it is stored and load it on-demand. You can load a single module by running a command similar to this one:

```shell
probundle unpack eslint
```

For the above snippet to work, you would have to have the compressed `eslint.tgz` file stored in `.modules/eslint.tgz`.

<a href="#performance" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Performance

For even more performance, consider using [`pnpm`](https://pnpm.io/). Although we use `pnpm` normally, we actually use `npm` for building the `node_modules/` folder that **Probundle** compresses. You can get a better idea of how we implement Probundle by checking out this [Taskfile.yml](https://github.com/ProfessorManhattan/Probundle/tree/master/.config/taskfiles/npm/Taskfile-bundle.yml) which is powered by our custom task-runner called [Bodega](https://github.com/ProfessorManhattan/Bodega).

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/Probundle/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/Probundle/blob/master/docs/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

**_Brian Zalewski_**<br/><br/>

</blockquote>

<a title="Support us on Open Collective" href="https://opencollective.com/megabytelabs" target="_blank">
  <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=opencollective&label=OpenCollective&logoColor=white&style=for-the-badge" />
</a>
<a title="Support us on GitHub" href="https://github.com/ProfessorManhattan" target="_blank">
  <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=for-the-badge" />
</a>
<a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
  <img alt="Patreon" src="https://img.shields.io/badge/Patreon-Support-052d49?logo=patreon&logoColor=white&style=for-the-badge" />
</a>

### Affiliates

Below you will find a list of services we leverage that offer special incentives for signing up for their services through our special links:

<a href="http://eepurl.com/h3aEdX" title="Sign up for $30 in MailChimp credits" target="_blank">
  <img alt="MailChimp" src="https://cdn-images.mailchimp.com/monkey_rewards/grow-business-banner-2.png" />
</a>
<a href="https://www.digitalocean.com/?refcode=751743d45e36&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
  <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" />
</a>

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/npm/cli/probundle/-/blob/master/LICENSE) licensed.
