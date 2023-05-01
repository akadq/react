import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";

function App() {
    return (
        <div>
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                </ul>
                <ul>
                    <li><Link to={'/layout'}>layout</Link></li>
                </ul>
                <ul>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>
            <h2>view</h2>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/layout'} element={<Layout/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
