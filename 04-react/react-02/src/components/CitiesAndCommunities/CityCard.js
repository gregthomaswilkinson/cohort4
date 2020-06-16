import React, {useState} from 'react'


const CityCard = (props) => {
    const [popChange, setPopChange] = useState(0)

    let handleDelete = () => {
        props.delete(props.city.key);
    }

    let handlePopIncrease = async() => {
        props.city.movedIn(popChange);
        props.updateServer(props.city.key);
        props.popzChange();
    }

    let handlePopDecrease = async() => {
        props.city.movedOut(popChange);
        props.updateServer(props.city.key);
        props.popzChange();
    }
    

    return (
        <div className= "card">
            <h2>{props.city.name}</h2>
            <span>{"Population: " + props.city.pop}</span>
            <span>{"Town Size: " + props.city.howBig()}</span><br />
            <span>{props.city.whichSphere(props.city.lat)}</span>
            <span>{"Latitude: " + props.city.lat}</span> 
            <span>{"Longitude: " + props.city.long}</span><br />
            <input type="number" onChange={event => setPopChange(Number(event.target.value))} placeholder="Population Amount"></input>
            <button type= "button" id= "idIncreasePopButton" onClick={handlePopIncrease}>Increase Population</button>
            <button type= "button" id= "idDecreasePopButton" onClick={handlePopDecrease}>Decrease Population</button><br />
            <button type= "button" id= "idRemoveCity" onClick={handleDelete}>Remove City</button>
        </div>
        )    
}


export default CityCard