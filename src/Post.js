import React, { useState } from 'react';

function Post(props) {
    const [activo, setActivo] = useState(false);
  
    const handleClick = () => {
        setActivo(!activo);
    }

    return (
        <div className="post">
            <h1>Bienvenidos</h1>
            <h2>Post ID {props.post.id}</h2>
            <p>Nombre: {props.post.nombre}, Edad: {props.post.edad}</p>
            
            {activo && <h2>Renderizado condicional en React</h2>}
            
            <button onClick={handleClick}>
                {activo ? "Inactivar" : "Activar"}
            </button>
            <button onClick={() => props.onDelete(props.post.id)}>
                Borrar
            </button>
        </div>
    );
}

export default Post;