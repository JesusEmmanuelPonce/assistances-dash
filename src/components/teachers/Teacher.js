import React, { useState, useEffect } from 'react';
import './teacher.css';
import { Table, Tag, Space, Switch } from 'antd';
import axios from 'axios';

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
                {
                  status ? <Switch defaultChecked onChange={(checked)=>{
                    console.log(`Switch to ${checked}`)
                  }}/> : <Switch unCheckedChildren/> 
                }
            </Space>
          ),
        }
      ];

    const[teacher, setTeacher] = useState([]);

    useEffect(()=>{
        getTeacher();
    },[])

    const getTeacher = async() => {
        const resultado = await axios.get('https://assistances-back.herokuapp.com/teachers');
        setTeacher(resultado.data);
    }

    return(
        <div className="table-pb">
            <Table columns={TEACHER_COLUMNS} dataSource={teacher} pagination={false} />
        </div>
    )   
}

export default Teacher;