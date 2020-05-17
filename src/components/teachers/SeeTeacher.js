import React, {useEffect, useState} from 'react';
import './teacher.css';
import axios from 'axios';
import Header from '../header/Header';

const SeeTeacher = (props) => {

    const { id } = props.match.params;

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getEntries();
    }, [])

    const getEntries = async() => {
        const resultado = await axios.get('https://assistances.herokuapp.com/entries');
        setEntries(resultado.data);
    }

    return ( 
        <>
            <Header title='Asistencias'/>          
            {
            entries.map(item=>(
                    <div>
                        {
                            item.teacher._id === id 
                            ? <div className="see-assistances" key={item._id}>
                                <span className="date">Dia:  </span>{item.day}
                                <span className="date"> Mes:  </span>{item.month}
                                <span className="date"> Hora: </span>{item.hour} 
                              </div> : null
                        }
                    </div>
                ))
            }
        </>
     );
}
 
export default SeeTeacher;