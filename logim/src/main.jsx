
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './components/LoginPage.jsx'
import RegistrarPacientePagina from './components/RegistrarPacientePagina.jsx';

const router = createBrowserRouter([
  {
    path:"/iniciarSesion",
    element:<LoginPage></LoginPage>
  },
  {
    path:"/registrarPaciente",
    element:<RegistrarPacientePagina/>
  },
  {
    path:"/registrarDoctor",
    element:<LoginPage></LoginPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
