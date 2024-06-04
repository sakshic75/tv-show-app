import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            {/* Copyright */}
            <div className="text-center p-3 bg-dark" style={{ color: 'white' }}>
                © 2024 Copyright:
                <a href="https://mdbootstrap.com/" style={{ color: 'white' }}>MDBootstrap.com</a>
            </div>
            {/* Copyright */}
        </footer>

    );
};

export default Footer;
