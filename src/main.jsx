import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import ErrorPage from './components/ErrorPage';
import Statistics from './routes/Statistics';
import AppliedJobs from './routes/AppliedJobs';
import Blog from './routes/Blog';
import Index from './routes/Index';
import JobDescription from './routes/JobDescription';
import { featureJobLoader } from './loaders/featureJobLoader';



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
            element: <Index />,
            loader: featureJobLoader,
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
          {
            path: "/job/:id",
            element: <JobDescription />,
            loader: featureJobLoader,
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
