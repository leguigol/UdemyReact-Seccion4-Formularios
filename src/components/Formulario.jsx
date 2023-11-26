import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Formulario = ({addTodo}) => {

    // const [title,setTitle]=useState('')
    // const [description,setDescription]=useState('')
    // const [state,setStatee]=useState('pendiente')

    const [todo,setTodo]=useState({
        title: 'Todo#01',
        description: 'Descrip#01',
        state: 'pendiente',
        priority: false
    })

    const { title, description, state, priority } = todo;

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!title.trim() || !description.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'ooppsss...',
                text: 'Titulo y descripcion obligatorios'
            })
        } 
        addTodo({
            id: Date.now(),
            ...todo,
            state: state==='completado'          
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo agregado correctamente",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    const handleChange=(e)=>{
        // console.log(e.target.value)
        // console.log(e.target.name)
        setTodo({
            ...todo,
            [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value,
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title" value={title} onChange={e=>setTitle(e.target.value)}/> */}
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title" value={todo.title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" value={todo.description} onChange={handleChange}></textarea>
            <div className="form-check">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={todo.priority} onChange={handleChange}/>
                <label htmlFor='inputCheck'>Dar prioridad</label>
            </div>
            <select className="form-select mb-2" name="state" value={todo.state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            </form>
        </div>
    )
}

export default Formulario
