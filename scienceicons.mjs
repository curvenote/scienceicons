// node_modules/nanoid/index.js
import { randomFillSync } from "crypto";
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
var fillPool = (bytes) => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    randomFillSync(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
};
var random = (bytes) => {
  fillPool(bytes -= 0);
  return pool.subarray(poolOffset - bytes, poolOffset);
};
var customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
  let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let i = step;
      while (i--) {
        id += alphabet[bytes[i] & mask] || "";
        if (id.length === size) return id;
      }
    }
  };
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);

// node_modules/myst-common/dist/utils.js
function addMessageInfo(message, info) {
  if (info === null || info === void 0 ? void 0 : info.note)
    message.note = info.note;
  if (info === null || info === void 0 ? void 0 : info.url)
    message.url = info.url;
  if (info === null || info === void 0 ? void 0 : info.ruleId)
    message.ruleId = info.ruleId;
  if (info === null || info === void 0 ? void 0 : info.fatal)
    message.fatal = true;
  return message;
}
function fileWarn(file, message, opts) {
  return addMessageInfo(file.message(message, opts === null || opts === void 0 ? void 0 : opts.node, opts === null || opts === void 0 ? void 0 : opts.source), opts);
}
var az = "abcdefghijklmnopqrstuvwxyz";
var alpha = az + az.toUpperCase();
var numbers = "0123456789";
var nanoidAZ = customAlphabet(alpha, 1);
var nanoidAZ9 = customAlphabet(alpha + numbers, 9);

// src/names.json
var names_default = [
  { name: "arxiv", componentName: "ArxivIcon" },
  { name: "cc-by", componentName: "CcByIcon" },
  { name: "cc-nc", componentName: "CcNcIcon" },
  { name: "cc-nd", componentName: "CcNdIcon" },
  { name: "cc-sa", componentName: "CcSaIcon" },
  { name: "cc-zero", componentName: "CcZeroIcon" },
  { name: "cc", componentName: "CcIcon" },
  { name: "curvenote", componentName: "CurvenoteIcon" },
  { name: "discord", componentName: "DiscordIcon" },
  { name: "discourse", componentName: "DiscourseIcon" },
  { name: "email", componentName: "EmailIcon" },
  { name: "github", componentName: "GithubIcon" },
  { name: "jupyter-book", componentName: "JupyterBookIcon" },
  { name: "jupyter-text", componentName: "JupyterTextIcon" },
  { name: "jupyter", componentName: "JupyterIcon" },
  { name: "linkedin", componentName: "LinkedinIcon" },
  { name: "mastodon", componentName: "MastodonIcon" },
  { name: "myst", componentName: "MystIcon" },
  { name: "open-access", componentName: "OpenAccessIcon" },
  { name: "orcid", componentName: "OrcidIcon" },
  { name: "osi", componentName: "OsiIcon" },
  { name: "ror", componentName: "RorIcon" },
  { name: "slack", componentName: "SlackIcon" },
  { name: "twitter", componentName: "TwitterIcon" },
  { name: "website", componentName: "WebsiteIcon" },
  { name: "youtube", componentName: "YoutubeIcon" }
];

// src/scienceicons.ts
var SUPPORTED_ICONS = names_default.map((icon) => icon.name);
var iconRole = {
  name: "scienceicon",
  alias: ["scicon"],
  body: {
    type: String,
    required: true,
    doc: "The kind of icon to display"
  },
  run(data, vfile, ctx) {
    if (!SUPPORTED_ICONS.includes(data.body)) {
      return fileWarn(vfile, `Unknown kind of scienceicon: ${data.body}`);
    }
    return [{ type: "scienceicon", value: data.body, kind: data.body }];
  }
};
var plugin = { name: "Science Icons by Curvenote", roles: [iconRole] };
var scienceicons_default = plugin;
export {
  scienceicons_default as default
};
//# sourceMappingURL=scienceicons.mjs.map