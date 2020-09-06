import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: imagenes, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* si el primero no es true, entonces evalúa lo siguiente*/}
            {loading&&<p>Loading...</p>}

            <div className="card-grid">

                {
                    imagenes.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
