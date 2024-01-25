const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const svgr = require('@svgr/core').default
const { dirname } = require('path')

async function getSvgText(style) {
  let files = await fs.readdir(`./optimized/${style}`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${style}/${file}`, 'utf8'),
      name: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}`,
    }))
  )
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

async function writeReadMe(icons) {
  const file = 'typst/README.md'
  const readme = (await fs.readFile(file, 'utf8')).toString()
  const lines = readme.split('\n')

  const out = []
  let skip = false
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index]
    if (line === '## List of Icons') {
      skip = true
      out.push('## List of Icons\n')
      out.push(icons.map(({ name }) => `- ${name}Icon`))
      out.push('')
      continue
    }
    if (skip && !line.startsWith('#')) {
      continue
    }
    skip = false
    out.push(line)
  }
  await ensureWrite(file, out.flat().join('\n'))
}

async function writeDocs(icons) {
  const file = 'typst/docs/scienceicons.typ'
  const readme = (await fs.readFile(file, 'utf8')).toString()
  const lines = readme.split('\n')

  const out = []
  let skip = false
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index]
    if (line === '// Start Icons') {
      skip = true
      out.push(line)
      out.push(icons.map(({ name }) => `[\`${name}Icon\`()], ${name}Icon(),`))
    } else if (skip && line === '// End Icons') {
      skip = false
      out.push(line)
    } else if (skip) {
    } else {
      out.push(line)
    }
  }
  await ensureWrite(file, out.flat().join('\n'))
}

async function buildIcons(package, style) {
  let outDir = `./${package}`
  let icons = await getSvgText(style)

  const logos = icons
    .map((icon) => {
      const svg = icon.svg.replaceAll('\n', '')
      return [
        `// ${icon.name}`,
        `#let ${icon.name}Svg = \`\`\`${svg}\`\`\`.text`,
        `#let ${icon.name}Icon(color: black, height: 1.1em, baseline: 13.5%) = {\n  box(height: height, baseline: baseline, image.decode(${icon.name}Svg.replace("currentColor", color.to-hex())))\n}`,
      ].join('\n')
    })
    .join('\n\n')

  await ensureWrite(`${outDir}/index.typ`, logos)
  await writeReadMe(icons)
  await writeDocs(icons)
}

async function main(package) {
  console.log(`Building ${package} package...`)
  await buildIcons(package, '24/solid')
  return console.log(`Finished building ${package} package.`)
}

main('typst')
