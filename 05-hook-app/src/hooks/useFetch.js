import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {isMounted.current = false;}
    }, [])

    useEffect(() => {

         setState({
            loading: true,
            error: null,
            data: null
         })

        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }else{
                        console.log("no se llamó al setState")
                    }
                }, 3000);
            })
    }, [url]);

    return state;
}
