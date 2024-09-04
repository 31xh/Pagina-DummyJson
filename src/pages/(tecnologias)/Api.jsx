import api from '../../assets/API.png'


const Api = () => {
  return (
    <div>
      <h3 className="text-center display-1 py-4 text-white">API</h3>
      <div className="container">
        <div className="row">
            <div className="col-md-6 py-5 px-5 opacity-50">
                <img src={api} className='img-fluid' width={300} alt="" />
            </div>
            <div className="col-md-6 py-4 px-5 text-white">
                <h5 className="display-5 py-4">Que es un api?</h5>
                <p>Las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. Por ejemplo, el sistema de software del instituto de meteorología contiene datos meteorológicos diarios. La aplicación meteorológica de su teléfono “habla” con este sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Api
