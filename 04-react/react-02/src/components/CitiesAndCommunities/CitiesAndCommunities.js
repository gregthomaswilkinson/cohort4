import React from 'react'
import City from './Cities'
import CityCard from './CityCard'
import './Communities.css'

class Communitytest extends React.PureComponent {
    key;
    constructor() {
    super()
        this.key = 0;
        this.state = {cities: []};

    }

    createCity = (event) => {
        event.preventDefault();
        const cities = [...this.state.cities]
        console.log(cities);
        // cities.push({
        //     name: event.target.elements.idCityName.value,
        //     lat: event.target.elements.idLatitude.value,
        //     long: event.target.elements.idLongitude.value,
        //     key: this.key,
        //     pop: event.target.elements.idPopulation.value
        // });
        cities.push(new City(event.target.elements.idCityName.value, event.target.elements.idLatitude.value, event.target.elements.idLongitude.value, this.key, event.target.elements.idPopulation.value));
        this.setState({cities});
        // community.createCard(this.cities[this.cities.length-1]);
        this.key++
        this.updateGUI();
        console.log(cities);
    }

    // updatePop = (key, popchange) => {
    //     const cities = [...this.state.cities];
    //     const index = cities.findIndex(city => city.key === key);
    //     const city = cities[index];
    //     cities[index] = {...city, pop: city.pop + popchange};
    //     this.setState({cities});
    // }

    deleteCity(cityToRemove) {
        console.log(cityToRemove)
        for (let i=0; i<this.cities.length; i++) {
            if (cityToRemove.key === this.cities[i].key) {
                this.cities.splice([i], 1);
                console.log(this);
                // community.updateGUI();
            }
        }
    }

    whichSphere(lat) {
        if (lat > 0) {
            return "This location is in the Northern Hemisphere";
        } else if (lat < 0) {
            return "This location is in the Southern Hemisphere";
        } else if (lat === 0) {
            return "It appears this location is on the Equator";
        } else {
            return "It appears this location is not on planet Earth"; 
        }
    }

    getMostNorthern() {
        // I just assume ok, first entry is the largest.
        let mostNorthernCity = this.state.cities[0];
        this.state.cities.forEach(value => {
            if (value.lat > mostNorthernCity.lat) {
                mostNorthernCity = value;
            }
        })
        return mostNorthernCity;
    }

    getMostSouthern() {
        console.log(this.cities);
        let mostSouthernCity = this.state.cities[0];
        this.state.cities.forEach(value => {
            if (value.lat < mostSouthernCity.lat) {
                mostSouthernCity = value;
            }
        })
        return mostSouthernCity;
    }
    
    getPopulation() {
        // total for all…
        console.log(this.state.cities[0]);
        let totalPopulation = 0;
        this.state.cities.forEach(value => {
            totalPopulation += value.currentPop;
        })
        console.log(totalPopulation);
        return totalPopulation;
    }

    updateGUI() {
        document.getElementById("idMostNorth").innerText = this.getMostNorthern();
        document.getElementById("idMostSouth").innerText = this.getMostSouthern();
        document.getElementById("idTotalPopulation").innerText = this.getPopulation();
    }
    


        // OLD HTML CODE TO RENDER USING THE COMMUNITIES CLASS
    render () {
        const cards = this.state.cities.map((city) => <CityCard key={city.key} city={city}/>);


    return (
        <div className="App">
            <span>City and Communities project</span><br /><br />
            <form onSubmit= {this.createCity}>
                <label htmlFor="idCityName">City name:</label>
                <input type ="text" id ="idCityName" placeholder="Name of the City" name= "name"></input><br />
                <label htmlFor="idLatitude">Latitude:</label>
                <input type ="number" id ="idLatitude" placeholder="Decimal Degrees" name= "lat"></input><br />
                <label htmlFor="idLongitude">Longitude:</label>
                <input type ="number" id ="idLongitude" placeholder="Decimal Degrees" name= "long"></input><br />
                <label htmlFor="idPopulation">Population:</label>
                <input type ="number" id ="idPopulation" placeholder="Population" name="pop"></input><br />
                <button type = "submit" id= "idInputCity">Create City</button><br /><br />
            </form>
            <div className="communities-grid-container">
                <div className="communities-grid-item">Most Northern City:<br />
                    <span id ="idMostNorth"></span>
                </div>
                <div className="communities-grid-item">Most Southern City:<br />
                    <span id ="idMostSouth"></span>
                </div>
                <div className="communities-grid-item">Total Population of all cities:<br />
                    <span id ="idTotalPopulation"></span>
                </div>
            </div><br />
            <div id="idCardSpot" className= "communities-grid-container">
            </div>
        </div>
    );
    }

}




// window.addEventListener('DOMContentLoaded', async () => {
//     let data = await functions.postData('http://127.0.0.1:5000/all')
//     console.log(data);
//     data.forEach(value => {
//         community.createCity(value.name, parseFloat(value.lat, 10), parseFloat(value.long, 10), parseFloat(value.key));
//         community.createCard(community.cities[community.cities.length-1]);
//         community.updateGUI();
//         document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
//         if (value.key >= key) key = value.key + 1;
//     })

// });

    
// let NewCity = async () => {
    // let name = document.getElementById("idCityName").value;
    // let lat = Number(document.getElementById("idLatitude").value);
    // let long = Number(document.getElementById("idLongitude").value);
    // let pop = Number(document.getElementById("idPopulation").value);

        // community.createCity(name, lat, long, key, pop);
        //console.log(community);
        // await functions.postData("http://127.0.0.1:5000/add", {name, lat, long, key, pop});

// }


export default Communitytest;