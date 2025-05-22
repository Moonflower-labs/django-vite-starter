import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from "./routes/about.tsx";
import NOTFound from "./routes/404.tsx";

// Define the routes for the application
// The main route is the root path ("/") which renders the App component
// You can add more routes here as needed
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/about",
    Component: About,
    loader: async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        if (!response.ok) {
          throw new Response("Failed to fetch data", {
            status: 500,
            statusText: "Internal Server Error",
          });
        }
        const data = await response.json();
        console.log("Data fetched from Django API:", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return {}
      }
    },
  },
  {
    path: "*",
    // This route will match any path that is not defined above
    // and will render the NOTFound component
    Component: NOTFound,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
