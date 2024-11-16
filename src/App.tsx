import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";

function App() {

    const PATH = {
        page1: '/page1',
        page2: '/page2',
        page3: '/page3',
        error: '/error404'
    } as const // чтоб значение свойства в дальнейшем не могло быть переопределено

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink to={'/page1'}
                                 className={({isActive}: {
                                     isActive: boolean
                                 }) => isActive ? styles.activeNavLink : styles.navLink
                                 }>{'Page1'}</NavLink></div>

                    <div>
                        <NavLink to={'/page2'}
                                 className={({isActive}: {
                                     isActive: boolean
                                 }) => isActive ? styles.activeNavLink : styles.navLink
                                 }>{'Page2'}</NavLink></div>
                    <div>
                        <NavLink to={'/page3'}
                                 className={({isActive}: {
                                     isActive: boolean
                                 }) => isActive ? styles.activeNavLink : styles.navLink
                                 }>{'Page3'}</NavLink></div>

                    {/*<NavWrapper><NavLink to={'/page1'}>Page 1</NavLink></NavWrapper>*/}
                    {/*<NavWrapper><NavLink to={'/page2'}>Page 2</NavLink></NavWrapper>*/}
                    {/*<NavWrapper><NavLink to={'/page3'}>Page 3</NavLink></NavWrapper>*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path={PATH.page1} element={<PageOne/>}/>
                        <Route path={PATH.page2} element={<PageTwo/>}/>
                        <Route path={PATH.page3} element={<PageThree/>}/>

                        <Route path={PATH.error} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={"/error404"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


// const NavWrapper = styled.div`
//     margin-left: 10px;
//     font-size: 20px;
//
//     & > a {
//         text-decoration: none;
//         color: #1e3786;
//     }
//
//     & > a:active {
//         text-decoration: none;
//         color: #ff0346;
//     }
//
//     & > a:hover {
//         color: steelblue;
//     }
//
// `

export default App;


