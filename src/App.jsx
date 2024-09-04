import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Categorias from "./pages/Categorias"
import Productos from "./pages/Productos"
import Html from "./pages/(tecnologias)/Html"
import Css from "./pages/(tecnologias)/Css"
import Bootstrap from "./pages/(tecnologias)/Bootstrap"
import React from "./pages/(tecnologias)/React"
import Api from "./pages/(tecnologias)/Api"
import Usuarios from "./pages/Usuarios"
import Card from "./pages/Card"
import Movil from "./pages/(categorias)/Movil"

import Laptops from "./pages/(categorias)/Laptops"
import Vehiculos from "./pages/(categorias)/Vehiculos"
import Motorcycles from "./pages/(categorias)/Motorcycles"
import Groceries from "./pages/(categorias)/Groceries"



const App = () => {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Header/>
      <main>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/categorias" element={<Categorias/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/html" element={<Html/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/bootstrap" element={<Bootstrap/>}/>
            <Route path="/react" element={<React/>}/>
            <Route path="/api" element={<Api/>}/>
            <Route path="/usuario" element={<Usuarios/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/laptops" element={<Laptops/>}/>
            <Route path="/movil" element={<Movil/>}/>
            <Route path="/vehiculos" element={<Vehiculos/>}/>
            <Route path="/motorcycles" element={<Motorcycles/>}/>
            <Route path="/groceries" element={<Groceries/>}/>
            <Route path="*" element={<Inicio/>}/>
          </Routes>
      </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
