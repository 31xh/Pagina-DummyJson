import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <footer className="py-3 mt-4 glass-nav">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to={'/inicio'} href="#" className="nav-link px-2 text-white">Inicio</Link></li>
            <li className="nav-item"><Link to={'/categorias'} href="#" className="nav-link px-2 text-white">Categorias</Link></li>
            <li className="nav-item"><Link to={'/productos'} href="#" className="nav-link px-2 text-white">Productos</Link></li>
            <li className="nav-item"><Link to={'/usuario'} href="#" className="nav-link px-2 text-white">Usuarios</Link></li>
        </ul>
        <p className="text-center text-white">© 2024 Company, Inc</p>
        </footer>
    </div>
  )
}

export default Footer
