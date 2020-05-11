import React from 'react';
import './buttonAdd.css';
import { UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ButtonAdd = () => (
        <div className="container-btn-add-teacher">
            <Link to="/nuevo-profesor">
                <button className="btn-add-teacher light-green accent-4">
                    <UserAddOutlined className="icon-teacher" />AGREGAR PROFESOR
                </button>
            </Link>
        </div>
    )

export default ButtonAdd