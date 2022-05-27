import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';

function App () {
    return(
        <div>
            <Header />
            <Aside />
        </div>
    )
}

export default App