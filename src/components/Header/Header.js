import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
    return (
        <div className="page-header bg-dark text-white p-2 d-flex align-items-center">
            <div className="flex-shrink-0">
                <img src="/kapittx.png" alt="Logo" width="200px" height="50px" />
            </div>
            <div className="flex-grow-1 text-center">
                <h2 className="mb-0"> TV shows Schedule in U.S </h2>
                    <h4>Powered by  <img src="tvmaze.png" alt="Logo" width="200px" height="50px" /> </h4>
            </div>
        </div>
    )
};

export default Header;
