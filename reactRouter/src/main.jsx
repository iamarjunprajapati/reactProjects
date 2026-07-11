import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home';
import Layout from './Layout';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Github, { githubInfoLoader } from './components/Github';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/userid/:id",
      element: <User />
    },
    {
      loader: githubInfoLoader,
      path: "/github",
      element: <Github />
    }
    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
