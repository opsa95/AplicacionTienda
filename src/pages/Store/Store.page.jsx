import "./Store.page.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Observable } from "rxjs";

import Button from 'react-bootstrap/Button';

export default function Store() {
  const history = useHistory();
  const URL = "https://fakestoreapi.com/products/";
  const [todolist, setTodolist] = useState([]);
 
  useEffect(() => {
    Observable.create((subscriber) => {
      axios
        .get(URL)
        .then((res) => {
          subscriber.next(res.data);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    }).subscribe(
      (data) => setTodolist(data),
      (error) => console.error("¡Hay un problema con la petición!", error),
      () => console.log("¡Suscripción completada!")
    );
  }, []);

  let abrirProducto = (id) => {
    history.push({
      pathname: "/product/" + id,
      state: {
        id: todolist[id].id,
        nombre: todolist[id].title,
        imagen: todolist[id].image,
        categoria: todolist[id].category,
        precio: todolist[id].price,
        descripcion: todolist[id].description,
      },
    });
  };  
  return (

    <div className="container p-4">      
      <h1>Bienvenido a mi tienda</h1>
      <div className="row">
      {todolist.map((product) => (
      <div className="card mb-3" key={product.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} alt={product.category}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
              {product.description}
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer">
        <Button type="button" className="btn btn-success" onClick={() => abrirProducto(product.id -1)}>Ir al producto</Button>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}
