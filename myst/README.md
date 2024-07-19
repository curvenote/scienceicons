# @scienceicons/myst

A MyST Markdown role for science icons and an accompanying react based renderer

## Using the Role

To use the role simply add it to your MyST markdown like so:

```markdown
Praesent mattis viverra lacus, {scienceicon}`twitter` at cursus eros hendrerit nec {scienceicon}`curvenote`.
```

And the relevant icons will appear inline in your text. Use the icons in links by:

```markdown
... metus ut consequat [{scienceicon}`twitter`](https://x.com/@curvenote) dignissim ante sem ...
```

> [!TIP]
> MyST Markdown's plugin loading system is still developing, [look out for updates](https://mystmd.org/guide/plugins) on easier ways to access and load plugins.

## Using the renderer

Methods for installing a bundled renderer are still in development by the MyST Markdown project and Curvenote. In the meantime you can install this package from git (`git+https://github.com/<org>/<repo>.git#<branch>`) and include in your build.
