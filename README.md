<p align="center">
  Open science SVG icons, by Curvenote. <br>Available as basic SVG icons and via first-party <a href="#react">React</a> and <a href="#vue">Vue</a> libraries.
<p>

<p align="center">
  <a href="https://github.com/curvenote/scienceicons"><strong>Browse scienceicons &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/curvenote/scienceicons/releases"><img src="https://img.shields.io/npm/v/scienceicons" alt="Latest Release"></a>
    <a href="https://github.com/curvenote/scienceicons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/scienceicons.svg" alt="License"></a>
</p>

## React

First, install `@scienceicons/react` from npm:

```sh
npm install @scienceicons/react
```

Now each icon can be imported individually as a React component:

```js
import { OpenAccessIcon } from '@scienceicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <OpenAccessIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@scienceicons/react/24/outline`, the 24x24 solid icons can be imported from `@scienceicons/react/24/solid`, and the 20x20 solid icons can be imported from `@scienceicons/react/20/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@scienceicons/react/24/solid/)

## Vue

_Note that this library currently only supports Vue 3._

First, install `@scienceicons/vue` from npm:

```sh
npm install @scienceicons/vue
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <OpenAccessIcon class="w-6 h-6 text-blue-500" />
    <p>...</p>
  </div>
</template>

<script>
import { OpenAccessIcon } from '@scienceicons/vue/24/solid'

export default {
  components: { OpenAccessIcon },
}
</script>
```

The 24x24 outline icons can be imported from `@scienceicons/vue/24/outline`, the 24x24 solid icons can be imported from `@scienceicons/vue/24/solid`, and the 20x20 solid icons can be imported from `@scienceicons/vue/20/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@scienceicons/vue/24/solid/)

# MyST Markdown

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

## License

This library is primarily based on [heroicons](https://www.npmjs.com/package/heroicons), see [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE). For other cases, license and attribution information can be found in comments within individual `.svg` files.

## License

This library is MIT licensed.
