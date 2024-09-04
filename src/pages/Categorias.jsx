import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/products/categories'

const Categorias = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);


  return (
    <div className="container">
        <h3 className="text-center display-5 py-4 text-white">Lista de categorias</h3>
      <table className="table table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Slug</th>
            <th>Name</th>
            <th>URL</th>
            
        </tr>
    </thead>
    <tbody>
    {datos && datos.map((item, index)=>(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{item.slug}</td>
            <td>{item.name}</td>
            <td><a href={item.url} className="btn btn-info">Ver detalle</a></td>
        </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Categorias
