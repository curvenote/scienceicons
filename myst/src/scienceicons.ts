import type { CurvenotePlugin } from '@curvenote/common';
import { fileWarn } from 'myst-common';
import type { GenericNode, RoleSpec } from 'myst-common';
import names from './names.json';

const SUPPORTED_ICONS = names.map((icon) => icon.name);

const iconRole: RoleSpec = {
  name: 'scienceicon',
  alias: ['scicon'],
  body: {
    type: String,
    required: true,
    doc: 'The kind of icon to display',
  },
  run(data, vfile) {
    if (!SUPPORTED_ICONS.includes(data.body as string)) {
      fileWarn(vfile, `Unknown name of scienceicon: ${data.body}`);
      return [];
    }

    return [{ type: 'scienceicon', value: data.body, kind: data.body }] as GenericNode[];
  },
};

const plugin = { name: 'Science Icons by Curvenote', roles: [iconRole] } as CurvenotePlugin;

export default plugin;
