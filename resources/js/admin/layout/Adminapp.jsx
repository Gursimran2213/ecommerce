import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';


const Adminapp = () => {

    return (
        <div>Adminapp</div>
    )
}

export default Adminapp

if (document.getElementById('Adminapp')) {
    createRoot(document.getElementById('Adminapp')).render(
        <BrowserRouter>
            <Adminapp />
        </BrowserRouter>
    );
}