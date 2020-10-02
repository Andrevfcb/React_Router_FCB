import React from 'react';
import { Route, Switch } from 'react-router-dom';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';
import img6 from '../images/header6.jpg';


const Header = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="home" />
                )} />
                <Route path="/history" render={() => (
                    <img src={img2} alt="history" />
                )} />
                <Route path="/teams" render={() => (
                    <img src={img3} alt="teams" />
                )} />
                <Route path="/team" render={() => (
                    <img src={img3} alt="teams" />
                )} />
                <Route path="/successes" render={() => (
                    <img src={img4} alt="successes" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img5} alt="contact" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img6} alt="admin" />
                )} />
                <Route path="/login" render={() => (
                    <img src={img6} alt="login" />
                )} />
                <Route render={() => (
                    <img src={img1} alt="home" />
                )} />
            </Switch>
            
        </>
    );
}

export default Header;