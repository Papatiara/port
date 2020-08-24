import React, { useRef } from 'react';
import { css } from 'emotion'


const Contact = (props) => {

    return (
        <div className={styles.contact_container} ref={props.Cref}>
            <div className={styles.contact}>
                <h2 className={styles.title}>  Contact </h2>
                <p className={styles.line}></p>
                <br></br>
                <p className={styles.description}> Any questions? send me an <a href="mailto:shirazipatricia@gmail.com">email</a> </p>
            </div>
        </div>
    )
}

const styles = {
    contact_container: css`
        // margin-top: 300px;
        background-color: #F5F5F5;
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    `,
    contact: css`
    // border: 3px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
        width: 60%;
        height: 100px;
    `,
    title: css`
        font-size: 22px;
    `,
    line: css`
        border-bottom: 1px solid grey;
        padding-bottom: 5px;
        margin: auto;
        width: 100px;
    `,
    description: css`
        font-size: 18px;
    `

}

export default Contact;