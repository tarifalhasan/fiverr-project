import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="row  homepage">
        <div className="col heading">
          <h5>Recepcion de Material -Generacion de Etiquetas</h5>
        </div>
      </div>
      <div className="row">
        <div className="card w-35 mx-auto">
          <div className="card-body text-center">
            <h5 className="card-title">Generacion de Etiquetas</h5>
            <input
              type="text"
              className="form-control my-10"
              placeholder="Ingresar Codiogo Producto"
              aria-label="Ingresar Codiogo Producto"
              aria-describedby="basic-addon1"
            />
            <a href="#" className="btn btn-primary">
              Adelante
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
