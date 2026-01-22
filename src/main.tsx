import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./routes/contact/Contact.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import Projects from "./routes/projects/Projects.tsx";

const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/contact", element: <Contact/>},
    {path: "/projects", element: <Projects/>},
    {path: "*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
