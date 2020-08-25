import React, { useRef } from 'react';
import { css } from 'emotion'

import Header from './Header';
import ScrollBody from './ScrollBody';
import Footer from './Footer';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';


const Body = (props) => {

    const journeyRef = useRef(null)
    const projectsRef = useRef(null)
    const contactsRef = useRef(null)

    return (
        <div className={styles.body}>
            <Header iRef={props.iRef} contactsRef={contactsRef} projectsRef={projectsRef} journeyRef={journeyRef} />
            <ScrollBody />
            <div className={styles.refs} ref={projectsRef}></div>
            <Projects projectsRef={projectsRef}/>
            <div className={styles.refs} ref={journeyRef}></div>
            <Journey Jref={journeyRef}  />
            <div className={styles.refs} ref={contactsRef}></div>
            <Contact Cref={contactsRef}/>
            <Footer />
        </div>

    )
}
const styles = {
    body: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    `,
    refs: css`
    scroll-behavior: smooth;
    `,
        projects: css`
            // margin-top: 17%;
            width: 100%;
        height: 100vh;       `,
        contact: css`
            // margin-top: 17%;
            // width: 100%;
            // height: 300px;
    `
}

export default Body;