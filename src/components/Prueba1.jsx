import { useEffect, useRef, useState } from "react";

const Prueba1 = () => {
  const [users, setUsers] = useState([]);
  const [color, setColor] = useState(false);
  const [country, setCountry] = useState(false);
  const originalUsers = useRef([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setUsers(res.results);
        originalUsers.current = res.results;
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.login.uuid !== id));
  };

  const handleReset = () => {
    setUsers(originalUsers.current);
  };

  let sortedByCountries = [];
  if (country) {
    sortedByCountries = [...users].sort((a, b) =>
      a.location.country
        .toLowerCase()
        .localeCompare(b.location.country.toLowerCase())
    );
  } else {
    sortedByCountries = users;
  }

  return (
    <>
      <nav>
        <button onClick={() => setColor(!color)}>Color</button>
        <button onClick={() => setCountry(!country)}>Ordenar por País</button>
        <button onClick={handleReset}>Reset Usuarios</button>
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
            {sortedByCountries.map((user, index) => {
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
                    <button onClick={() => handleDelete(user.login.uuid)}>
                      Eliminar
                    </button>
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
