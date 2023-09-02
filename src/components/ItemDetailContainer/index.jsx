/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import {data} from "../../mocks/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [producto, setProducto] = useState({})

    async function fetchData(id){
        const seleccionado = await getProducto(id)
        setProducto(seleccionado)
    }
    
    useEffect(() => {
        fetchData(id)
    }, [])

    return(
        <div className="divItemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    )
}

const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getProductoById(id))
        }, 2000);
    })
}

const getProductoById = (id) => {
    return data.find((element) => element.id == id)
}

export default ItemDetailContainer