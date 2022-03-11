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

## Advanced Usage

The `node_modules/` folder can get pretty big, pretty quickly, so you might want to consider saving your `.modules` to an S3 bucket. You can get really fancy with it and actually bind the `.modules` folder in your project to an S3 Fuse mount using software like [goofys](https://github.com/kahing/goofys). If you are interested, check out our free [Ansible role for goofys](https://github.com/ProfessorManhattan/ansible-goofys).

You can get even fancier with it by doing things like dynamically loading your `node_modules/`. Sometimes you might have a library that only needs a dependency sometimes. In that case, you can download the compressed `.tgz` wherever it is stored and load it on-demand. You can load a single module by running a command similar to this one:

```shell
probundle unpack eslint
```

For the above snippet to work, you would have to have the compressed `eslint.tgz` file stored in `.modules/eslint.tgz`.

## Performance

For even more performance, consider using [`pnpm`](https://pnpm.io/). Although we use `pnpm` normally, we actually use `npm` for building the `node_modules/` folder that **Probundle** compresses. You can get a better idea of how we implement Probundle by checking out this [Taskfile.yml](https://github.com/ProfessorManhattan/Probundle/tree/master/.config/taskfiles/npm/Taskfile-bundle.yml) which is powered by our custom task-runner called [Bodega](https://github.com/ProfessorManhattan/Bodega).
