# @simple-m-editor/vue

> A markdown editor with Vue


[![npm](https://img.shields.io/npm/v/@simple-m-editor/vue)](https://www.npmjs.com/package/@simple-m-editor/vue)
![GitHub](https://img.shields.io/github/license/hellomrbigshot/m-editor)
[![](https://github.com/hellomrbigshot/m-editor/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/hellomrbigshot/m-editor/actions)

## Install

```
// npm
npm install --save @simple-m-editor/vue highlight.js marked marked-highlight

// yarn
yarn add @simple-m-editor/vue highlight.js marked marked-highlight

// pnpm
pnpm add @simple-m-editor/vue highlight.js marked marked-highlight
```

## Usage with Vue.js

```
// you can add class "m-editor-preview" to your element to
// use the same style as the editor shows
<script setup>
import { MEditor, marked } from '@simple-m-editor/vue'
import '@simple-m-editor/vue/dist/style.css'
const text = ref('')
const markdownContent = ref('')
const handleChange = (data) => {
  markdownContent.value = data.htmlContent
}
</script>
<template>
  <div>
    <m-editor
      v-model="text"
      :debounce-render="true"
      :debounce-render-wait="500"
      @on-change="handleChange"
    />
    <div class="m-editor-preview" v-html="markdownContent"></div>
  </div>
</template>
```
<!--
## Preview

[address](https://hellomrbigshot.github.io/simple-m-editor/index.html) -->

## Api

### props

| name       | type   | default     | description     |
| ---------- | -------| ----------- | --------------- |
| value      | String |             | value           |
| placeholder| String | ''     | placehoder      |
| mode       | String | live        | one of ['live', 'edit', 'preview']|
| full-screen | Boolean| false       | full screen or not |
| show-line-num| Boolean| true        | show side line number or not |
| theme      | String | light       | light or dark   |
| auto-scroll| Boolean| true        | auto sroll or not |
| debounce-render | Boolean | false | debounce render html when edit |
| debounce-render-wait | Number | 200 | debounce wait time |



### event

| event name | description | return value |
| -------  | ------ | -----------    |
| on-change | callback when editor is changed | Object: { content, htmlContent } |
| on-mode-change | callback when editor's mode is change | mode, one of ['live', 'edit', 'preview']; oldMode, one of ['live', 'edit', 'preview'] |
| on-full-screen-change | callback when editor's fullscreen change | fullscreen status, true or false |


## Licence

MIT © [hellomrbigshot](https://github.com/hellomrbigshot)
