import React, {Fragment} from 'react';
import LIFO from './LIFO';
import FIFO from './FIFO';
import './FIFOAndLIFO.css'

function FIFOAndLIFODisplay() {

    return(
        <Fragment>
            <h1>FIFO / LIFO Demonstration</h1><br />
            <div className="grid-container">   
                <div className= "grid-item">
                    <h1>A first-in-first-out (FIFO) Queue</h1>
                    <span>Aka the foodz I eat(otherwise it spoils)</span><br />
                    <FIFO />
                </div>
                <div className= "grid-item">
                    <h1>A Last-in-first-out (LIFO) Stack</h1>
                    <span>Like the Animes I wanna watch haha</span><br />
                    <LIFO />
                </div>
            </div>
        </Fragment>
    )
}

export default FIFOAndLIFODisplay;