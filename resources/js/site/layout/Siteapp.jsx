import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';

const Siteapp = () => {
    return (
        <div>Siteapp</div>
    )
}

export default Siteapp

if (document.getElementById('Siteapp')) {
    createRoot(document.getElementById('Siteapp')).render(
        <BrowserRouter>
            <Siteapp />
        </BrowserRouter>
    );
}