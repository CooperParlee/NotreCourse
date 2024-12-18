import './App.scss'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'
import { Layout } from './Layout'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="*" element={<Page2/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
