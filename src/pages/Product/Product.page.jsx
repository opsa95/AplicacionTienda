//import { useParams } from 'react-router-dom';
import "./Product.page.scss";

export default function Product(props) {
  // let { MODIFICABLE } = useParams();
  
  let { id, imagen, nombre, categoria, precio, descripcion} = props.history.location.state;

  return (
    <div class="card text-center">
  <div class="card-header">
  {categoria}
  </div>
  <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <img src={imagen} alt="" />
    <p class="card-text"> {descripcion}</p>
    <h5 class="card-text"> {precio} €</h5>      
  </div>
  <div class="card-footer text-muted">
  Referencia Producto: #{id}  
  </div>
</div>    
  );
}
