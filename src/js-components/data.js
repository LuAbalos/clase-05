const data = [
    {
      id: 1,
      nombre: "Pads",
      descripcion: "Limpieza facial, hechos con hilo de algodón",
      precio: "$100",
      img: "..../public/img/pads.jpg",
    },
    {
      id: 2,
      nombre: "Esponja",
      descripcion: "Limpieza corporal, hecho con hilo de algodón",
      precio: "$550",
      img : "..../public/img/esponja.jpg",
    },
    {
      id: 3,
      nombre: "Bolsa jabonera",
      descripcion: "Limpieza corporal, hecho con yute",
      precio: "$340", 
      img: "..../public/img/bolsajabonera.jpeg" 
    },
  ];

export const getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
          return resolve(data);

        }, 2000)
    })
}
  