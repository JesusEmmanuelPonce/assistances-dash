import React, { useState, useEffect } from 'react';
import './teacher.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Tag } from 'antd';
import Header from '../header/Header';
import ButtonAdd from '../button/ButtonAdd';

const Teacher = () => {

    const[teacher, setTeacher] = useState([]);

    useEffect(()=>{
        getTeacher();
    },[teacher])

    const getTeacher = async() => {
        const resultado = await axios.get('http://localhost:3001/teachers');
        setTeacher(resultado.data);
    }

    const deleteTeacher = id =>{
        Swal.fire({
          title: '¿Estas seguro?',
          text: "Profesor eliminado no se recuperara",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            axios.delete(`http://localhost:3001/teachers/${id}`)
              .then(res=>{
                Swal.fire(
                  'Eliminado',
                  res.data.msg,
                  'success'
                )
              })
          }
        })
    }

    return(
        <>
          <Header title="Profesores"/>
            <div className="table-pb">
              <table>
                <thead>
                  <tr>
                      <th>Id</th>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Status</th>
                      <th></th>
                  </tr>
                </thead>
                <tbody>
                  { teacher.map(item=>(
                      <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.names}</td>
                        <td>{item.last_names}</td>
                        <td>{
                              item.status === 'Matutino' 
                              ? <Tag color='green'> {item.status} </Tag> 
                              : <Tag color='blue'>  {item.status} </Tag>
                        }</td>
                        <td>
                          <button className="btn waves-effect yellow btn-action">
                            <i className="material-icons left">edit</i>Editar
                          </button>
                          <button 
                          className="btn waves-effect red"
                          onClick={()=>deleteTeacher(item._id)}
                                >
                            <i className="material-icons left">delete</i>Eliminar
                          </button>
                          <button className="btn waves-effect blue btn-action">
                            <i className="material-icons left">visibility </i>Ver
                          </button>
                        </td>
                      </tr>
                    ))     
                  }
                </tbody>
              </table>
            </div>
            <ButtonAdd/>
        </>
    )   
}

export default Teacher;