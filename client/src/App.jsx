import { useState } from 'react'

import Input from './components/Input'
import Output from './components/Output'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding:"40px 100px"}}>
      <Input />
      <Output />
    </div>
  )
}

export default App
