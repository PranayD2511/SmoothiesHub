import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <div className='bg-pink-100 p-3'>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default App