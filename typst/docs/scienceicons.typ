#import "../index.typ": *

#show link: it => [#text(fill: blue.darken(20%))[#it]]

= Science Icons

Icons for open-source science publishing, made with love by #link("https://curvenote.com")[#curvenote-icon(color: blue.darken(20%)) Curvenote].

== Usage

Using `scienceicons` can be completed by

#box(width: 100%, radius: 3pt, inset: 10pt, fill: luma(95%))[
```typst
#import "@preview/scienceicons": open-access-icon

This article is Open Access #open-access-icon(color: orange, height: 1.1em, baseline: 20%)
```
]
#box(width: 100%, inset: 10pt, stroke: (left: luma(30%)))[
This article is Open Access #open-access-icon(color: orange, height: 1.1em, baseline: 20%)
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
[`arxiv-icon`()], arxiv-icon(),
[`cc-by-icon`()], cc-by-icon(),
[`cc-nc-icon`()], cc-nc-icon(),
[`cc-nd-icon`()], cc-nd-icon(),
[`cc-sa-icon`()], cc-sa-icon(),
[`cc-zero-icon`()], cc-zero-icon(),
[`cc-icon`()], cc-icon(),
[`curvenote-icon`()], curvenote-icon(),
[`discord-icon`()], discord-icon(),
[`discourse-icon`()], discourse-icon(),
[`email-icon`()], email-icon(),
[`github-icon`()], github-icon(),
[`jupyter-book-icon`()], jupyter-book-icon(),
[`jupyter-text-icon`()], jupyter-text-icon(),
[`jupyter-icon`()], jupyter-icon(),
[`linkedin-icon`()], linkedin-icon(),
[`mastodon-icon`()], mastodon-icon(),
[`myst-icon`()], myst-icon(),
[`open-access-icon`()], open-access-icon(),
[`orcid-icon`()], orcid-icon(),
[`osi-icon`()], osi-icon(),
[`ror-icon`()], ror-icon(),
[`slack-icon`()], slack-icon(),
[`twitter-icon`()], twitter-icon(),
[`website-icon`()], website-icon(),
[`youtube-icon`()], youtube-icon(),
// End Icons
)

All icons can also be accessed by their SVG text directly. For example, `YoutubeSvg`, which is a string.

== Contributing

To request or add an icon, please visit:\
https://github.com/curvenote/scienceicons
