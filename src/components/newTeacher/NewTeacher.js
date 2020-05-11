import React, { useState } from 'react';
import Header from '../header/Header';
import axios from 'axios';
import { SaveOutlined } from '@ant-design/icons';

const NewTeacher = () => {

    const [names, setNames] = useState('')
    const [last_names, setLastNames] = useState('')
    const [status, setStatus] = useState('')
    
    const handleOk = async e => {
        e.preventDefault();

            await axios.post('http://localhost:3001/teachers', {
                names,
                last_names,
                status
            })
      }
    return(
        <>
            <Header title='Nuevo profesor'/>
            <div className="row">
                <form
                    onSubmit={handleOk}
                    >
                        <div class="input-field col s12">
                            <input id="names" type="text" name="names" onChange={e => setNames(e.target.value)} class="validate" />
                            <label htmlFor="names">Nombre</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="last_names" type="text" name="last_names" onChange={e => setLastNames(e.target.value)} class="validate" />
                            <label htmlFor="last_names">Apellidos</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="status" type="text" name="status" onChange={e => setStatus(e.target.value)} class="validate" />
                            <label htmlFor="status">Status</label>
                        </div>

                        <button type="submit" className="btn-add-teacher light-green accent-4">
                            <SaveOutlined className="icon-teacher"/>AGREGAR PROFESOR
                        </button>
                </form>

            </div>
        </>
    )
}

export default NewTeacher;