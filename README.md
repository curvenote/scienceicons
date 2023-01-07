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
    <OpenAccessIcon class="h-6 w-6 text-blue-500" />
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

## License

This library is based on [heroicons](https://www.npmjs.com/package/heroicons), see [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

## License

This library is MIT licensed.
