import React, { useState, useRef, Fragment } from 'react';
import { Queue } from './FIFOAndLIFO';
import randomFood from './randomFood.js';

function FIFO () {
    const Fifo = useRef(new Queue());
    const [FifoSize, setFifoSize] = useState(0);

    const addToFifo = () => {
        Fifo.current.push(randomFood[Math.floor(Math.random() * randomFood.length)].food);
        setFifoSize(Fifo.current.collection.length);
        console.log(Fifo);
    }
    const removeFromFifo = () => {
        Fifo.current.shift();
        setFifoSize(Fifo.current.collection.length);
        console.log(Fifo);
    }

    let listElement = Fifo.current.collection.map((value, i) => {
        return <li key={i} className={Fifo.current.collection.length === Fifo.current.collection.length-i? "highlight": undefined}>{value}</li>
    })

    return(
        <Fragment>
            <span>Current Queue Size: {FifoSize}</span><br />
            <span>Manipulate the Queue.</span><br />
            <button onClick={() => removeFromFifo()}>Remove Some Foodz</button>&nbsp;
            <button onClick={() => addToFifo()}>Add Some Foodz</button>
        
            <ul className="noBullets">
                {listElement}
            </ul>
        </Fragment>
    )
}

export default FIFO;