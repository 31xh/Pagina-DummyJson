import bootstrap from '../../assets/Bootstrap.png'


const Bootstrap = () => {
  return (
    <div>
      <h3 className="text-center display-1 text-white py-4">BOOTSTRAP</h3>
      <div className="container">
        <div className="row">
            <div className="col-md-6 text-white px-5">
                <h5 className="display-5 text-center py-4 text-white ">Que es BOOTSTRAP?</h5>
                <p>Bootstrap es un framework multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales. A diferencia de muchos frameworks web, solo se ocupa del desarrollo front-end.</p>
            </div>
            <div className="col-md-6 opacity-50 px-5">
                <img src={bootstrap} className='py-5 img-fluid' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bootstrap
