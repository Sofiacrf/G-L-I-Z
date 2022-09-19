import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";

// Import all pages
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Services from "../pages/Services"

const RouteList = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="quienes-somos">
                <AboutUs />
            </Route>
            <Route exact path="nuestros-servicios">
                <Services />
            </Route>

        </Switch>
    )
}

export default RouteList;
