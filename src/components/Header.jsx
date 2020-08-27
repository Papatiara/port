import React, {useState} from 'react';

import { css } from 'emotion'


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(styles.mobile_options)

    const mobileMenuFunc = () => {
        setMobileMenu(mobileMenu === styles.mobile_options ?styles.mobile_options_clicked :  styles.mobile_options)
        
    }


    return (
        <div id="header" className={styles.header_container}>
            <div className={styles.name}><a className={styles.name} href="#/">PATRICIA SHIRAZI</a></div>
            <div onClick={mobileMenuFunc}className={styles.mobile_menu_container}>
                <div className={styles.mobile_menu} ></div>
                <div className={styles.mobile_menu} ></div>
                <div className={styles.mobile_menu} ></div>
            </div>
            <div className={mobileMenu}>
                <a onClick={() => setMobileMenu(styles.mobile_options)} href="#/">HOME</a>
                <a onClick={mobileMenuFunc} href="#projects">PROJECTS</a>
                <a onClick={mobileMenuFunc} href="#journey">JOURNEY</a>
                <a onClick={mobileMenuFunc} href="#contact">CONTACT</a>
                <a href="https://docs.google.com/document/d/14Vql67uuB3bDuDTiXHQQmFu1EwKp-fVUa5XfCbPQhX4/edit?usp=sharing">RESUME</a>
            </div>
            <div className={styles.web_options}>
                <a href="#/">HOME</a>
                <a href="#projects" tabIndex="1">PROJECTS</a>
                <a href="#journey">JOURNEY</a>
                <a href="#contact">CONTACT</a>
                <a href="https://docs.google.com/document/d/14Vql67uuB3bDuDTiXHQQmFu1EwKp-fVUa5XfCbPQhX4/edit?usp=sharing">RESUME</a>
            </div>
        </div>
    )
}

const styles = {
    header_container: css`
        position: sticky;
        top: 0;
        z-index: 9;
        bottom: 20px;
        background-color: #FFF;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch !important;
        @media (max-width: 1000px) {
            margin:0;
        },
    `,
    name: css`
        float: right;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: black;
        font-size: 22px;
        cursor: pointer;   
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch !important;
    `,
    web_options: css`
        display:none;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch !important;
        @media(min-width: 900px){
            // border: 3px solid blue;
            display: flex;
            justify-content: space-around;
            width: 40%;
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 15px;
            a {
                scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch !important;
                color: #333333;
                cursor: pointer;
                &:focus {
                    color: red;  
                };
                &:hover {
                    color: red;
                };
                &:active {
                    color: red;
                };
            }
        }
    `,
    mobile_menu_container: css`
        cursor: pointer;
    `,
    mobile_menu: css`
        display: none;
        scroll-behavior: smooth;
        @media(max-width: 900px){
            display: flex;
            width: 35px;
            height: 5px;
            background-color: black;
            margin: 6px 0;
        }
    `,
    mobile_options: css`
        display: none;
    `,
    mobile_options_clicked: css`
        display: none;
        @media(max-width: 900px){
            display: flex;
            justify-content: right;
            flex-direction: column;
            position: absolute;
            background-color: white;
            top: 45px;
            height: 170px;
            width: 50%;
            left: 0;
            z-index: 99;
            scroll-behavior: smooth;
            a {
                scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch !important;
                margin-top: 10px;
                margin-left: 30%;
                scroll-behavior: smooth;
                color: #333333;
                cursor: pointer;
                &:hover {
                    color: #254769;
                };
                &:active {
                    color: red;
                };
                &:focus {
                    color: red;
                }
             
            }
        }`,

}

export default Header;