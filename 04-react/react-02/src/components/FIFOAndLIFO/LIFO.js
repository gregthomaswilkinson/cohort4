import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Stack } from './FIFOAndLIFO';
import randomAnime from './randomAnime.js';


function LIFO () {
    // const [localLifo, setLocalLifo] = useState(new Stack())
    const Lifo = useRef(new Stack());
    const prevSize = useRef(0);
    const lastItemAdded = useRef(null);
    // const [Lifo, setLifo] = useState(new Stack());
    const [LifoSize, setLifoSize] = useState(0);
    // const [liArray, setRenderLi] = useState("");


    const addToLifo = () => {
        Lifo.current.push(randomAnime[Math.floor(Math.random() * randomAnime.length)].title);
        setLifoSize(Lifo.current.collection.length);
        console.log(Lifo)
    }

    const removeFromLifo = () => {
        Lifo.current.pop()
        setLifoSize(Lifo.current.collection.length);
        console.log(Lifo)
    }

    let listElement = Lifo.current.collection.map((value, i) => { 
        // return <li ref={i === Lifo.current.collection.length-1? lastItemAdded: undefined} key={i}>{value}</li>
        return <li key={i} className={i === Lifo.current.collection.length-1? "highlight": undefined}>{value}</li>
    })

    useEffect( () => {
        
        //Highlight the most recent entry into the collection
        if (LifoSize > prevSize.current) {
            console.log("Highlight ME!!!")
        // setTimeout(function() {
        //     lastItemAdded.current.className = "highlight";
        // }, 10);
        }
        prevSize.current = LifoSize;

    }, [LifoSize])

    return(
        <Fragment>
            <span>Current Stack Size: {LifoSize}</span><br />
            <span>Manipulate the Stack.</span><br />
            <button onClick={() => removeFromLifo()}>Remove an Anime</button>
            <button onClick={() => addToLifo()}>Add an Anime</button><br />
            
            <ul className="noBullets">
                {listElement}
            </ul>
        </Fragment>
    )
}

export default LIFO;