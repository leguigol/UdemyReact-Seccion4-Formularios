import React from 'react'
import { useRef } from 'react'

const NoControlado = () => {

    const form=useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new FormData(form.current);
        console.log(...data.entries())
        // const dataObject=Object.fromEntries([...data.entries()])
        const {title, description, state}=Object.fromEntries([...data.entries(),])

        if(title.trim()==='') return console.log('llena este campo')

        console.log(title, description, state)

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title" defaultValue="todo #01"/>
            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" defaultValue="description #01"></textarea>
            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            </form>
        </div>
    )
}

export default NoControlado
