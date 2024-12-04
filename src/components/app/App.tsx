import React, { useState } from "react"

// import './App.scss';


import classes from '@/style/App.module.scss';
import { Outlet, Link } from "react-router-dom";
import Contacts from "@/pages/Contacts";
import logo from '@/assets/logo.png';
import me from '@/assets/12440387_162305257466167_8552812834446675255_o.jpg';
import People from "@/assets/people.svg";
import slot from "@/assets/pngwing.png";

// Tree Shaking
const TODO = (ars: number) => {
    console.log("TODO");
}


export const App = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrese = () => setCounter((counter) => counter + 1);

    TODO(1234);

    // if (PLATFORM === "desktop") {
    //     return <div>Platform - Descktop</div>
    // }

    // if (PLATFORM === "mobile") {
    //     return <div>Platform - Mobile</div>
    // }

    // if (ENV === 'development') {
    //     //do somethingы
    // }


    return (
        <div className={classes.main} data-test={'App.testId'}>
            <div>
                <h1>PLATFORM={PLATFORM}</h1>
                <div>
                    <img src={logo} alt="logo" />
                    <img width={100} height={100} src={me} alt="Me" />
                </div>
                <div>
                    <People color={"green"} width={100} height={100} fill={"yellow"} />
                </div>
                <div>
                    <Link to={'/about'}>About</Link>
                    <br />
                    <Link to={'/shop'}>Shop</Link>
                    <br />

                    <button onClick={handleIncrese} className={classes.btn}>increase</button>
                    <div className={classes.title}>Hello</div>
                    <div>Counter: {counter}</div>
                    <div id="detail">
                        <Outlet />
                    </div>
                    <Contacts />
                </div >
            </div>
            <div className={classes.img}>
                <img src={slot} alt="slot" className={classes.slot} />
            </div>

        </div>
    )
}