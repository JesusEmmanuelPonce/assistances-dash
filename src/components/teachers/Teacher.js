import React, { useState, useEffect } from 'react';
import './teacher.css';
import { Table, Tag, Space} from 'antd';
import axios from 'axios';
import Header from '../header/Header';
import ButtonAdd from '../button/ButtonAdd';

const Teacher = () => {

    const TEACHER_COLUMNS = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: '_id'
        },
        {
          title: 'Nombre',
          dataIndex: 'names',
          key: 'names'
        },
        {
          title: 'Apellidos',
          dataIndex: 'last_names',
          key: 'last_names'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render : status => {
            let color = status === 'Matutino' ? 'green' : 'blue';
            return (
              <Tag color={color}>
                  {status}
              </Tag>
            );
          }
        },
        {
          title: 'Acciones',
          dataIndex: 'status',
          key: 'action',
          render: status => (
            <Space size="middle">
               <button onClick={()=>{
                 alert('Work')
               }}>{ status ? 'Desactivar' : 'Activar'}</button>
            </Space>
          ),
        }
      ];

    const[teacher, setTeacher] = useState([]);

    useEffect(()=>{
        getTeacher();
    },[])

    const getTeacher = async() => {
        const resultado = await axios.get('http://localhost:3001/teachers');
        setTeacher(resultado.data);
    }

    return(
        <>
          <Header title="Profesores"/>
            <div className="table-pb">
                <Table columns={TEACHER_COLUMNS} dataSource={teacher} />
            </div>
            <ButtonAdd/>
        </>
    )   
}

export default Teacher;