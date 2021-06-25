import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Contacto from '../Screens/Contacto'
import Inicio from '../Screens/Inicio'
import Curriculum from '../Screens/Curriculum'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/cv" component={Inicio} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/curriculum" component={Curriculum} />
            </Switch>
        </div>
    )
}

export default Routes
