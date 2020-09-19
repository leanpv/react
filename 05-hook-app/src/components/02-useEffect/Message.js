import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})
    const {x,y} = coords;

    console.log(x,y);

    useEffect(() => {
        const mouseMove = ({x,y}) => {
            const coords = {x,y};
            // console.log(coors);
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            // ej. cancelar subscripciones
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}


export default Message;