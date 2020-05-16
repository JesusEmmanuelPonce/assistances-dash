import React, { useState } from 'react';
import './newTeacher.css';
import Header from '../header/Header';
import axios from 'axios';
import { SaveOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const NewTeacher = ({history}) => {

    const [names, setNames] = useState('')
    const [last_names, setLastNames] = useState('')
    const [status, setStatus] = useState('')
    const [error, setError] = useState(false)
    
    const handleOk = e => {
        e.preventDefault();

        if(names === '' || last_names === '' || status === ''){
            setError(true)
            Swal.fire('Todos los campos deben de ser llenados')
            return;
        }

        setError(false)

             axios.post('http://localhost:3001/teachers', {
                names,
                last_names,
                status
            })
            .then(res=> {
                if(res.data.code === 11000){
                    console.log('error')
                }
                else{
                    Swal.fire(
                        'Profesor agregado!',
                        '',
                        'success'
                      )
                }
                history.push('/profesores')
            })
      }
    return(
        <>
            <Header title='Nuevo profesor'/>
            <div className="row">
                <form
                    onSubmit={handleOk}
                    >
                        <div className="input-field col s12">
                            <input id="names" type="text" name="names" onChange={e => setNames(e.target.value)} className="validate" />
                            <label htmlFor="names">Nombre</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="last_names" type="text" name="last_names" onChange={e => setLastNames(e.target.value)} className="validate" />
                            <label htmlFor="last_names">Apellidos</label>
                        </div>

                        <div className="input-field col s12">
                            <select defaultValue={'DEFAULT'} onChange={e => setStatus(e.target.value)} className="browser-default input-select-status">
                                <option value="DEFAULT" disabled>Status</option>
                                <option value="Matutino">Matutino</option>
                                <option value="Vespertino">Vespertino</option>
                            </select>
                        </div>

                        <button type="submit" className="btn-add-teacher light-green accent-4">
                            <SaveOutlined className="icon-teacher"/>AGREGAR
                        </button>
                </form>

            </div>
        </>
    )}

export default withRouter(NewTeacher);