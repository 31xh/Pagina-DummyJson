import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/users'


const Usuarios = () => {
    const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setDatos(data.users);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);


  return (
    <div>
      <h3 className="text-center text-white display-5 py-4">Usuarios</h3>
      <div className="container mt-5">
        <table className="table table-hover">
            <thead className="thead-light">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Maiden Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Birth Date</th>
                <th>Blood Group</th>
                <th>Height (cm)</th>
                <th>Weight (kg)</th>
                <th>Eye Color</th>
                <th>Imagen</th>

            </tr>
            </thead>
            <tbody>

            {datos && datos.map((item, index)=>(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.maidenName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>{item.username}</td>
                <td>{item.birthDate}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.height}</td>
                <td>{item.weight}</td>
                <td>{item.eyeColor}</td>
                <td><img src={item.image} alt="" width={100}/></td>
            </tr>
                ))}

            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Usuarios
