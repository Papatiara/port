import React from 'react';
import { css } from 'emotion'

import background from '../images/back.png'
import me from '../images/image.png'
import partOfBack from '../images/backgroundpart.png'
import partTwo from '../images/partTwo.png'
import partThree from '../images/partThree.png'





const Intro = () => {
    return (
        <div>
            <div className={styles.intro1_holder}>    </div>
            <div className={styles.secondBackground}>
            {/* <div className={styles.partOne} ><img src={partOfBack} /> <img src={partTwo} /> </div> */}
              
                <div className={styles.intro2_holder}>
           
                    <img className={styles.img} src={me} />
                    <div className={styles.nameHolder}>
                        <div className={styles.myname}> PATRICIA SHIRAZI <br></br>
                            <div className={styles.description}>Full Stack Software Engineer</div>
                        </div>
                    </div>
                  
                </div>
                {/* <div className={styles.bottom} >
                    <img src={partOfBack} />
                    <img src={partThree} />
                </div> */}
            </div>
          
     
        </div>
    )
}

const styles = {
    intro2_holder: css`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    }
    `,
    secondBackground: css`
    display: none;
    @media (max-width: 1300px) {
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: #9ed0c9;
        // background-color: black;  
    `,
    img: css`
    width: 50vw;
    height: auto;
    margin:auto;
    @media (max-height: 375px) {
        height:100vh;
    }`,
    partOne: css`
    // background-color: black;  

    // position: relative;
    // margin-top: 0%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // margin-left: -10%;
    justify-content: space-between;
    overflow-x: hidden;
    `,
    bottom: css`
    // width: 10%;
    height: 100px;
    // background-color: black;
    margin-top: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    `,
    nameHolder: css`
    margin: auto;
   `,
    description: css`
    font-size: 14px;
    color: brown;
    `,
    myname: css`
    font-size: 25px;
    font-weight: bold;
    color: #cb006d;
    font-family: "Trebuchet MS", Helvetica, sans-serif
    `,
    intro1_holder: css`
    display: none;
    @media (min-width: 1300px) {
       display:block;
       height: 100vh;
       background-image: url(${background});
       background-color: #9ed0c9;
       background-repeat: no-repeat;
       width: 100%;
    }
    `,
}

export default Intro;
