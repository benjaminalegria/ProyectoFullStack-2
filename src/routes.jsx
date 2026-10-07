import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Blog from "./pages/blog/blog";
import Productos from "./pages/productos/productos";
import Contacto from "./pages/contacto/contacto";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Inicio />
    },
    {
        path: '/nosotros/',
        element: <Nosotros />
    },
    {
        path: '/blog/',
        element: <Blog />
    },
    {
        path: '/productos/:idFruta',
        element: <Productos />
    },
    {
        path: '/contacto/',
        element: <Contacto />
    }

]);