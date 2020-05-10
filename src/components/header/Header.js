import React from 'react';
import './Header.css';

const Header = ({title}) => (
    <div className="container-header">
            <p className="title-header">{title}</p>
    </div>
)

export default Header;