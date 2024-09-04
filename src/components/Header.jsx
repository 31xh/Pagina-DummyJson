import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent glass-nav" data-bs-theme='dark'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/categorias'} className="nav-link active" aria-current="page" href="#">Categorias</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/productos'} className="nav-link" href="#">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/card'} className="nav-link" href="#">Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/usuario'} className="nav-link" aria-current="page" href="#">Usuarios</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tecnologias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/html'} className="dropdown-item" href="#">Html</Link></li>
                                    <li><Link to={'/css'} className="dropdown-item" href="#">Css</Link></li>
                                    <li><Link to={'/bootstrap'} className="dropdown-item" href="#">Bootstrap</Link></li>
                                    <li><Link to={'/react'} className="dropdown-item" href="#">React</Link></li>
                                    <li><Link to={'/api'} className="dropdown-item" href="#">Api</Link></li>
                                    <li><a className="dropdown-item" href="">Api</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/laptops'} className="dropdown-item" href="#">Laptops</Link></li>
                                    <li><Link to={'/movil'} className="dropdown-item" href="#">Movil</Link></li>
                                    <li><Link to={'/motorcycles'} className="dropdown-item" href="#">Motocicletas</Link></li>
                                    <li><Link to={'/vehiculos'} className="dropdown-item" href="#">Vehiculos</Link></li>
                                    <li><Link to={'/groceries'} className="dropdown-item" href="#">Groceries</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
