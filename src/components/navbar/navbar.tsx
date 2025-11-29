'use client';

import React, { useState, useEffect } from "react";
import { INavbar } from "./interfaces/navbar.interfaces";
import style from "./navbar.module.css";

const Navbar: React.FC = () => {

    const [ menu, setMenu ] = useState<INavbar | []>([]);

    useEffect(() => {
        fetch('/config.navbar.json')
            //.then(resp =>)
    }, []);

    // Quede en el componente NavBar

    return  (
        <div>
            <h2>Navbar</h2>
        </div>
    )

};

export default Navbar;
