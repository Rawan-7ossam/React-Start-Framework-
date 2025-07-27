import React from 'react'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartFramework from './Components/StartFramework/StartFramework'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'



export default function App() {
  let routes = createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
      {index:true, element:<StartFramework/>},
      {path:"about" , element:<About/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"contact" , element:<Contact/>},

      {path:"*" , element:<NotFound/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      
    </>
  )
}
