import {  Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MainTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newTab) => {
        setValue(newTab);
      };
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label="Inicio" component={Link} to="/" />
                <Tab label="Curriculum" component={Link} to="/curriculum" />
                <Tab label="Proximamente" component={Link} to="/proximamente" />
                <Tab label="Contacto" component={Link} to="/contacto" />
            </Tabs>
        </div>
    )
}

export default MainTabs
