import { fileWarn } from 'myst-common'
import names from './names.json'

const SUPPORTED_ICONS = names.map((icon) => icon.name)

const iconRole = {
  name: 'scienceicon',
  alias: ['scicon'],
  body: {
    type: String,
    required: true,
    doc: 'The kind of icon to display',
  },
  run(data, vfile, ctx) {
    if (!SUPPORTED_ICONS.includes(data.body)) {
      return fileWarn(vfile, `Unknown kind of scienceicon: ${data.body}`)
    }

    return [{ type: 'scienceicon', value: data.body, kind: data.body }]
  },
}

const plugin = { name: 'Science Icons by Curvenote', roles: [iconRole] }

export default plugin
