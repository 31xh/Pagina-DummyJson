import react from '../../assets/React.png'


const React = () => {
  return (
    <div>
      <h3 className="text-center text-white display-1 py-4">REACT</h3>
      <div className="container">
        <div className="row">
            <div className="col-md-6 py-5 px-5 opacity-75">
                <img src={react} alt="" />
            </div>
            <div className="col-md-6 text-white px-5">
                <h5 className="display-5 text-center py-4">Que es React?</h5>
                <p>ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default React
