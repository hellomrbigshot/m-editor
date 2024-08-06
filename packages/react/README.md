# @simple-m-editor/react

> A markdown editor with React.js

![GitHub package.json version](https://img.shields.io/github/package-json/v/hellomrbigshot/@simple-m-editor/react)
![GitHub](https://img.shields.io/github/license/hellomrbigshot/@simple-m-editor/react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```
// npm
npm install -S @simple-m-editor/react highlight.js marked prop-types

// yarn
yarn add @simple-m-editor/react highlight.js marked prop-types

// pnpm
pnpm install @simple-m-editor/react highlight.js marked prop-types
```

## Usage with React

Use the component

```jsx
import React, { useState } from 'react'

import { MEditor } from '@simple-m-editor/react'
import '@simple-m-editor/react/dist/index.min.css'

function Example () {
  const [value, setValue] = useState('')
  const handleChange = ({ content, htmlContent }) => {
    setValue(content)
    console.log(htmlContent)
  }
  return (
    <MEditor
      theme='dark'
      showLineNum={false}
      onChange={() => handleChange(contentObj)}
    />
  )
}
```

The component also exports ```marked``` function:

```javascript
// The marked funciton will replace
// <code> or <code class="language-*"> tag
// to <code class="hljs">

import { marked } from '@simple-m-editor/react'

let a = '```console.log('hello world')```'
console.log(marked(a)) // <p><code class="hljs">console.log(&#39;hello world&#39;)</code></p>

```

## Preview

[address](https://hellomrbigshot.github.io/@simple-m-editor/react)

## Api

### props

| name       | type   | default     | description     |
| ---------- | -------| ----------- | --------------- |
| value      | string |   -         | value           |
| placeholder| string |   -         | placehoder      |
| mode       | live \| edit \| preview | live      | edit mode |
| fullScreen | boolean| false       | full screen     |
| showLineNum| boolean| true        | show side line number |
| theme      | string | light       | light or dark   |
| autoScroll | boolean| true        | auto sroll or not |
| debounceRender   | boolean | false | debounce render html when edit |
| debounceRenderWait | number | 200 | debounce wait time |
| onChange   | function ({ content, htmlContent }) | - | callback when editor changes |
| onModeChange | function (mode, oldMode) | - | callback when editor's mode changes |
| onFullScreenChange | function (isFullScreen) | - | callback when editor's fullscreen changes |

## License

MIT © [hellomrbigshot](https://github.com/hellomrbigshot)
