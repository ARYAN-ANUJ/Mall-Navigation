import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Store_a from './components/Store_a'
import Store_b from './components/Store_b'
import Store_c from './components/Store_c'

function App() {

  return (
    <div>
      <Routes>
        <Route path="store_c" element={<Store_c/>} />
        <Route path="store_b" element={<Store_b/>} />
        <Route path="store_a" element={<Store_a/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
