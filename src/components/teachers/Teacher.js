import React, { useState, useEffect } from 'react';
import './teacher.css';
import { Table, Tag, Space} from 'antd';
import axios from 'axios';
import Header from '../header/Header';

const Teacher = () => {

    const TEACHER_COLUMNS = [
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
          title: 'Codigo',
          dataIndex: 'code',
          key: 'code'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render : status => {
            let color = status ? 'green' : 'volcano';
            let text = status ? 'Activo' : 'Inactivo';
            return (
              <Tag color={color}>
                  {text}
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
        </>
    )   
}

export default Teacher;