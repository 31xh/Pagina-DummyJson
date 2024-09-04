import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/products/category/motorcycle'


const Motorcycles = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDatos();
  }, []);


  return (
    <div>
      <h4 className="text-center py-4 text-white display-5">Motocicletas</h4>
      <div className="container mt-5 mb-5">
        <div className="row">
          {datos && datos.map((item, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <div className="card" data-bs-theme="dark">
                <div className="card-header text-center">
                  <img src={item.thumbnail} className="img-fluid" alt="" />
                </div>
                <div className="card-body text-center">
                  <p>{item.title}</p>
                  <p><strong>{item.brand}</strong></p>
                  <p className="">En stock: <b className="text-warning">{item.stock}</b></p>
                  <h4 className="text-danger">{item.price} $</h4>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Ver detalle</a>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">{item.title}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <div className="row text-white">
                        <div className="col-md-4">
                          <img src={item.thumbnail} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8">
                          <h4>Marca: {item.brand}</h4>
                          <h5>Stock: <strong className="text-warning">{item.stock}</strong></h5>
                          <h6><strong>Descripcion: </strong>{item.description}</h6>
                          <h5>Rating: <strong className="text-info">{item.rating}</strong></h5>
                          <h5>Sku: <b>{item.sku}</b></h5>
                          <h5>Estimated shipping: <b>{item.shippingInformation}</b></h5>
                          <h5>Return: {item.returnPolicy}</h5>
                          <h4 className="text-danger mt-5">Precio: {item.price}$</h4>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Motorcycles
