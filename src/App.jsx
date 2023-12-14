import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Country from './pages/Country'
import { useState } from "react"

function App() {
  const th = localStorage.getItem('CntrsTh')
  const [theme,setTheme] = useState(th || 'light')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar setTheme={setTheme} theme={theme}/>}>
        <Route index element={<Home/>}/>
        <Route path="/country/:name" element={<Country/>}/>
      </Route>
    ),{
      basename: import.meta.env.DEV ? '/' : '/countries/'
    }
  )

  return (
    <div className="app" data-theme={theme}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
