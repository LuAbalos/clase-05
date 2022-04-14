import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getData } from "../js-components/data";
import ItemList from './ItemList'
import Item from "./Item";

const ItemListContainer= () => {

  const [productosDeHigiene, setproductosDeHigiene] = useState ([]);
    
  useEffect(() =>{
    async function pedirDatos() {
      let datosLlegando = await getData()
      setproductosDeHigiene(datosLlegando)
  }
  pedirDatos()
  }, [])
  function onAdd (c) {
    alert(`se agregó ${c} productos`)
  }
  return (
    <>
      <ItemList productos={productosDeHigiene} />
      <ItemCount stock ={5} initial={1} onAdd= {onAdd} />
    </>
  );
}
  
export default ItemListContainer;
