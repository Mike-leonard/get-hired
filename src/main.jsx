import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Statistics from './routes/Statistics';
import AppliedJobs from './routes/AppliedJobs';
import Blog from './routes/Blog';
import Index from './routes/Index';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: "/statistics",
            element: <Statistics />,
          },
          {
            path: "/applied-jobs",
            element: <AppliedJobs />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
