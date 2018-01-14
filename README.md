# postcss-icon.stiffi

Icon set data for [postcss-icon plugin](https://github.com/retyui/postcss-icon), based on [css icons, a pen by sti#i](https://codepen.io/stiffi/pen/ysbCd)

[![postcss-icon.stiffi](https://raw.githubusercontent.com/retyui/postcss-icon.stiffi/master/preview.png)](https://retyui.github.io/postcss-icon/stiffi/)

## Install

```bash
npm install -D postcss-icon.stiffi postcss-icon
# or
yarn add -D postcss-icon.stiffi postcss-icon
```

## Input

```css
.custom-selector {
  @icon: stiffi-comment; /* 'stiffi-' is Prefix , 'comment' is name Icon*/
  color: gold;
  /* ... your css code */
}
```

## Output

```css
.custom-selector::after{
  content: '';
  /* ... */
}
/* after before i span if needed */
.custom-selector{
  color: #000;
  width: 20px;
  heigth: 20px;
  /* ... */
  color: gold;
  /* ... your css code */
}
```

## Use ([more examples](https://github.com/retyui/postcss-icon/tree/master/example/))

```js
const     postcss = require('postcss');
const postcssIcon = require('postcss-icon');

const CSS = `
.custom-selector {
  @icon: stiffi-comment;
}`;

postcss(
  postcssIcon({
    "postcss-icon.stiffi": {
      prefix: 'stiffi-' /* required when using multiple Icon data sets */
    },
    "postcss-icon.OtherSetName": { /* Options */ }
  })
).process(CSS).then(({css, messages}) => {
  console.log(css);
  messages
    .filter(i => i.type === "warning")
    .map(e => console.log(e.toString()));
});
```

## Other icon sets:

### Font icons:

- [postcss-icon.material-design](https://github.com/retyui/postcss-icon.material-design) (count icons : 932)
- [postcss-icon.font-awesome-v4](https://github.com/retyui/postcss-icon.font-awesome-v4) (count icons : 786)

### Css only icons:

- [postcss-icon.cssicon](https://github.com/retyui/postcss-icon.cssicon) (count icons : 192) [result demo](https://retyui.github.io/postcss-icon/cssicon/)
- [postcss-icon.icono](https://github.com/retyui/postcss-icon.icono) (count icons : 131) [result demo](https://retyui.github.io/postcss-icon/icono/)
- [postcss-icon.rosa](https://github.com/retyui/postcss-icon.rosa) (count icons : 78) [result demo](https://retyui.github.io/postcss-icon/rosa/)
- [postcss-icon.airpwn](https://github.com/retyui/postcss-icon.airpwn) (count icons : 39) [result demo](https://retyui.github.io/postcss-icon/airpwn/)
- [postcss-icon.joshnh](https://github.com/retyui/postcss-icon.joshnh) (count icons : 24) [result demo](https://retyui.github.io/postcss-icon/joshnh/)

## All name icons (count: 34) [result demo](https://retyui.github.io/postcss-icon/stiffi/)

`backward`, `bookmark`, `comment`, `down`, `eject`, `file`, `filter`, `flag`, `folder`, `forbidden`, `forward`, `gear`, `heart`, `left`, `link`, `list`, `location`, `lock`, `pause`, `photo`, `play`, `profile`, `right`, `search`, `share`, `sound`, `step-backward`, `step-forward`, `stop`, `tag`, `unlock`, `up`, `video`, `wrench`
