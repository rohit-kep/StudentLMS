import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import routeObj from './routes/routes'


const router = createBrowserRouter(routeObj)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
