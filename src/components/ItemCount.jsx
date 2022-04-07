import React, {useState} from "react" //6.8K (gzipped:2.7K);

const ItemCount = () => {
    const [contador, setContador] = useState( 1 );

    const increment = () => {
        if (contador < 5 ) {
            setContador(contador+1)
        }
    }

    const decrement = () => {
        if (contador > 1 ){
            setContador(contador -1)
        }
    }
        return (
            <div>
                <div className='button-container'>
                    <button onClick={decrement} className='buttons-counters'> - </button>
                    {contador}
                    <button onClick={increment} className='buttons-counters'> + </button>
                    <button className='buttons-counters' > Agregar al carrito </button>
                </div>
            </div>
        )
}

export default ItemCount