import React from 'react';

import { Link } from 'react-router-dom';

const ButtonAdd = () => (
        <div className="container-btn-add-teacher">
            <Link to="/nuevo-profesor">
                <button className="btn waves-effect light-green accent-4">
                    <i className="material-icons left">person_add</i>NUEVO PROFESOR
                </button>
            </Link>
        </div>
    )

export default ButtonAdd