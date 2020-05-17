import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header/Header';

const Entries = () => {

    const[entries, setEntries] = useState([]);

    useEffect(()=>{
        const getEntries = async() =>{
            const resultado = await axios.get('https://assistances.herokuapp.com/entries')
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
                    <th>Mes</th>
                    <th>Entrada</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                </tr>
                </thead>
                <tbody>
                   {
                    entries.map(item=>(
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.day}</td>
                            <td>{item.month}</td>
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