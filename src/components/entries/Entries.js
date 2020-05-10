import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header/Header';

const Entries = () => {

    const[entries, setEntries] = useState([]);

    useEffect(()=>{
        const getEntries = async() =>{
            const resultado = await axios.get('http://localhost:3001/entries')
            setEntries(resultado.data);
        }
        getEntries()
    },[])

    return(
        <>
            <Header title="Asistencias"/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Dia</th>
                    <th>Entrada</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                </tr>
                </thead>
                <tbody>
                   {
                       entries.map(item=>(
                        <tr>
                            <td>{item._id}</td>
                       <td>{item.day}</td>
                       <td>{item.hour}</td>
                       <td>{item.teacher.names}</td>
                       <td>{item.teacher.last_names}</td>
                        </tr>
                       ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Entries;