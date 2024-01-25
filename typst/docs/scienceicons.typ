#import "../index.typ": *

#show link: it => [#text(fill: blue.darken(20%))[#it]]

= Science Icons

Icons for open-source science publishing, made with love by #link("https://curvenote.com")[#CurvenoteIcon(color: blue.darken(20%)) Curvenote].

== Usage

Using `scienceicons` can be completed by

#box(width: 100%, radius: 3pt, inset: 10pt, fill: luma(95%))[
```typst
#import "@preview/scienceicons": OpenAccessIcon

This article is Open Access #OpenAccessIcon(color: orange, height: 1.1em, baseline: 20%)
```
]
#box(width: 100%, inset: 10pt, stroke: (left: luma(30%)))[
This article is Open Access #OpenAccessIcon(color: orange, height: 1.1em, baseline: 20%)
]



== Arguments

The arguments for each icon are:

- `color`: A typst color, `red`, `red.darken(20%)`, `color(#FF0000)`, etc. Default is `black`.
- `height`: The height of the icon, by default this is slightly larger than the text height at `1.1em`
- `baseline`: Change the baseline of the box surrounding the icon, moving the icon up and down. Default is `13.5%`.

Additionally the raw SVG text for each icon can be found by replacing `Icon` with `Svg`.

== List of Icons

#table(
  columns: (1fr, 70pt, 1fr, 70pt),
  stroke: none,
  column-gutter: 3em,
// Start Icons
[`ArxivIcon`()], ArxivIcon(),
[`CcByIcon`()], CcByIcon(),
[`CcNcIcon`()], CcNcIcon(),
[`CcNdIcon`()], CcNdIcon(),
[`CcSaIcon`()], CcSaIcon(),
[`CcZeroIcon`()], CcZeroIcon(),
[`CcIcon`()], CcIcon(),
[`CurvenoteIcon`()], CurvenoteIcon(),
[`DiscordIcon`()], DiscordIcon(),
[`EmailIcon`()], EmailIcon(),
[`GithubIcon`()], GithubIcon(),
[`JupyterBookIcon`()], JupyterBookIcon(),
[`JupyterTextIcon`()], JupyterTextIcon(),
[`JupyterIcon`()], JupyterIcon(),
[`LinkedinIcon`()], LinkedinIcon(),
[`MastodonIcon`()], MastodonIcon(),
[`MystIcon`()], MystIcon(),
[`OpenAccessIcon`()], OpenAccessIcon(),
[`OrcidIcon`()], OrcidIcon(),
[`OsiIcon`()], OsiIcon(),
[`RorIcon`()], RorIcon(),
[`SlackIcon`()], SlackIcon(),
[`TwitterIcon`()], TwitterIcon(),
[`WebsiteIcon`()], WebsiteIcon(),
[`YoutubeIcon`()], YoutubeIcon(),
// End Icons
)

All icons can also be accessed by their SVG text directly. For example, `YoutubeSvg`, which is a string.

== Contributing

To request or add an icon, please visit:\
https://github.com/curvenote/scienceicons
