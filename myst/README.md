# @scienceicons/myst

A MyST Markdown role for science icons and an accompanying react based renderer

## Installation

Copy the file `scienceicons.mjs` from `dist/` intoyour local `mystmd` project and add it to the list of plugins in `myst.yml`:

```yaml
project:
  plugins:
    - scienceicons.mjs
```

## Using the Role

To use the role simply add it to your MyST markdown like so:

```markdown
Praesent mattis viverra lacus, {scienceicon}`twitter` at cursus eros hendrerit nec {scienceicon}`curvenote`.
```

And the relevant icons will appear inline in your text. Use the icons in links by:

```markdown
... metus ut consequat [{scienceicon}`twitter`](https://x.com/@curvenote) dignissim ante sem ...
```

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@scienceicons/myst@latest/src/names.json)

> [!TIP]
> MyST Markdown's plugin loading system is still developing, [look out for updates](https://mystmd.org/guide/plugins) on easier ways to access and load plugins.

## Using the renderer

Methods for installing a bundled renderer are still in development by the MyST Markdown project and Curvenote. In the meantime you can install this package from git (`git+https://github.com/<org>/<repo>.git#<branch>`) and include in your build.
