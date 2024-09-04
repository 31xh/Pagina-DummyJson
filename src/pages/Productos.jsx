import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/products'

const Productos = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);

  return (
    <div>
      <h3 className="text-center text-white py-4 display-5">Lista de productos</h3>
      <div className="container mt-5">
        <table className="table table-hover table-dark">
            <thead className="thead-light">
            <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount Percentage</th>
                <th>Ratings</th>
                <th>Stock</th>
                <th>Total</th>
                <th>Tags</th>
                <th>Detalle</th>
            </tr>
            </thead>
            <tbody>
            {datos && datos.map((item, index)=>(
            <tr key={index}>
                <td>{item.id}</td>
                <td><img src={item.thumbnail} alt="" width={75}/></td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.rating}</td>
                <td>{item.stock}</td>
                <td>{item.price*item.stock}</td>
                <td>{item.tags}</td>
                <td><a href="#" className="btn btn-success">Ver mas</a></td>
            </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Productos
