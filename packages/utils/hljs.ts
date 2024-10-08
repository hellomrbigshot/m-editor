import oldHljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'
import css from 'highlight.js/lib/languages/css'
import less from 'highlight.js/lib/languages/less'
import json from 'highlight.js/lib/languages/json'
import go from 'highlight.js/lib/languages/go'
import markdown from 'highlight.js/lib/languages/markdown'
import php from 'highlight.js/lib/languages/php'
import python from 'highlight.js/lib/languages/python'
import ruby from 'highlight.js/lib/languages/ruby'
import rust from 'highlight.js/lib/languages/rust'
import stylus from 'highlight.js/lib/languages/stylus'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import plaintext from 'highlight.js/lib/languages/plaintext'
import diff from 'highlight.js/lib/languages/diff'
import type { LanguageFn } from 'highlight.js'

export const languagesMapping: Record<string, LanguageFn> = {
  javascript,
  java,
  css,
  less,
  json,
  markdown,
  go,
  php,
  python,
  ruby,
  rust,
  stylus,
  typescript,
  xml,
  plaintext,
  diff,
}

Object.keys(languagesMapping).forEach((language) => {
  oldHljs.registerLanguage(language, languagesMapping[language])
})

export const hljs = oldHljs
