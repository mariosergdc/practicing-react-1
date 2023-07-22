import { useEffect, useState } from "react";

const Prueba1 = () => {
  const [users, setUsers] = useState([]);
  const [color, setColor] = useState(false);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setUsers(res.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <nav>
        <button onClick={() => setColor(!color)}>Color</button>
      </nav>
      <div>
        <div>Tabla de Usuarios</div>
        <table>
          <thead>
            <tr>
              <td>Foto</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>País</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              let bgColor;
              if (color) {
                bgColor = index % 2 === 0 ? "#333" : "#777";
              }

              return (
                <tr
                  key={user.login.uuid}
                  style={{ backgroundColor: color ? bgColor : "transparent" }}
                >
                  <td>
                    <img src={user.picture.thumbnail} alt="" />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.location.country}</td>
                  <td>
                    <button>Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Prueba1;
