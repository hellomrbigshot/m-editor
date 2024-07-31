import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import './example.css'
import { MEditor } from '../index'
import defaultText from './example.md?raw'

function App() {
  const [value, setValue] = useState('')
  const [theme, setTheme] = useState('light')
  const [autoScroll, setAutoScroll] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setValue(defaultText)
    }, 200)
  }, [])
  const handleChange = ({ content }: { content: string; htmlContent: string }) => {
    // console.log(htmlContent)
    setValue(content)
  }
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <div
        className="app"
        style={{
          background: theme === 'light' ? '#fff' : '#2a2c33',
        }}
      >
        <header className="app-header">
          <img
            src={reactLogo}
            className="app-logo app-logo-spin"
            alt="logo"
          />
        </header>
        <button
          className="btn"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          切换主题
        </button>
        <button
          className="btn"
          onClick={() => setAutoScroll(!autoScroll)}
        >
          跟随滚动：{autoScroll ? '开' : '关'}
        </button>
        <div style={{ margin: '20px auto', width: '90%' }}>
          <MEditor
            value={value}
            theme={theme}
            autoScroll={autoScroll}
            debounceRender={true}
            debounceRenderWait={500}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default App
