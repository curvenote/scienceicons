# Open-science icons for Typst

SVG icons for open-science articles

## Usage

Using `scienceicons` can be completed by

```typst
#import "@preview/scienceicons": OpenAccessIcon

This article is Open Access #OpenAccessIcon(color: orange, height: 1.1em, baseline: 20%)
```

## Arguments

The arguments for each icon are:

- `color`: A typst color, `red`, `red.darken(20%)`, `color(#FF0000)`, etc. Default is `black`.
- `height`: The height of the icon, by default this is slightly larger than the text height at `1.1em`
- `baseline`: Change the baseline of the box surrounding the icon, moving the icon up and down. Default is `13.5%`.

Additionally the raw SVG text for each icon can be found by replacing `Icon` with `Svg`.

## List of Icons

- ArxivIcon
- CcByIcon
- CcNcIcon
- CcNdIcon
- CcSaIcon
- CcZeroIcon
- CcIcon
- CurvenoteIcon
- DiscordIcon
- EmailIcon
- GithubIcon
- JupyterBookIcon
- JupyterTextIcon
- JupyterIcon
- LinkedinIcon
- MastodonIcon
- MystIcon
- OpenAccessIcon
- OrcidIcon
- OsiIcon
- RorIcon
- SlackIcon
- TwitterIcon
- WebsiteIcon
- YoutubeIcon

## See All Icons

You can browse and see all icons here:

https://github.com/curvenote/scienceicons/tree/main/typst/docs/scienceicons.pdf

![](https://github.com/curvenote/scienceicons/blob/main/typst/docs/icons.png?raw=true)

## Contributing

To add or request an icon to be added to this package see: \
https://github.com/curvenote/scienceicons
