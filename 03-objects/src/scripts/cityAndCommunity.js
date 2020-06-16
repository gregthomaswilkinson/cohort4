import functions from './fetch.js'

class City {

    constructor (name, lat, long, key, pop) {
        this.name = name ? name : "unknown name"
        this.lat = lat ? lat : 0
        this.long = long ? long : 0
        this.key = key
        this.pop = pop ? pop : 0;
        this.currentPop = pop ? pop : 0;
    }

    show() {
        return `${this.name} city has a latitude of ${this.lat} a longitude of ${this.long} and has a population of ${this.pop}`
    }

    movedIn(morePeople) {
        console.log("I ran alex rules")
        return this.currentPop = this.currentPop + morePeople;
    }

    movedOut(lessPeople) {
        return this.currentPop = this.currentPop - lessPeople;
    }

    howBig(currentPop) {
        if (currentPop >= 1 && currentPop <=100) {
            return "Hamlet";
        } else if (currentPop >100 && currentPop <1000) {
            return "Village";
        } else if (currentPop >=1000 && currentPop <20000) {
            return "Town";
        } else if (currentPop >=20000 && currentPop <100000) {
            return "Large town";
        } else if (currentPop >=100000) {
            return "City";
        } else {
            return "Not sure what to do with this"
        }
        // City – a population > 100,000
        // Large town – a large town has a population of 20,000 to 100,000
        // Town – a town has a population of 1,000 to 20,000
        // Village – larger than a hamlet but smaller than a town
        // Hamlet – population 1 - 100
    }
}


class Community{

    constructor() {
        this.cities = [];
    }


    createCity(name, lat, long, key, pop) {
        this.cities.push(new City(name, lat, long, key, pop));
        console.log(this.cities);
    }

    deleteCity(cityToRemove) {
        console.log(cityToRemove)
        for (let i=0; i<this.cities.length; i++) {
            if (cityToRemove.key === this.cities[i].key) {
                this.cities.splice([i], 1);
                console.log(this);
            }
        }
    }

    whichSphere(lat) {
        // to return either the Northern Hemisphere or Southern Hemisphere
        // let selectedCity = this.cities[0];
        // this.cities.forEach(value => {
        //     if (value.name === name) {
        //         selectedCity = value;
        //     }
        // })
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
        let mostNorthernCity = this.cities[0];
        this.cities.forEach(value => {
            if (value.lat > mostNorthernCity.lat) {
                mostNorthernCity = value;
            }
        })
        return mostNorthernCity;
    }

    getMostSouthern() {
        let mostSouthernCity = this.cities[0];
        this.cities.forEach(value => {
            if (value.lat < mostSouthernCity.lat) {
                mostSouthernCity = value;
            }
        })
        return mostSouthernCity;
    }
    
    getPopulation() {
        // total for all…
        let totalPopulation = 0;
        this.cities.forEach(value => {
            totalPopulation += value.currentPop;
        })
        return totalPopulation;
        //return totalPopulation;
    }

    updateGUI() {
        document.getElementById("idMostNorth").innerText = this.getMostNorthern().name;
        document.getElementById("idMostSouth").innerText = this.getMostSouthern().name;
        document.getElementById("idTotalPopulation").innerText = this.getPopulation();
    }

    createCard(city) {
        const cardSpot = document.getElementById("idCardSpot");

        let div = document.createElement("div");

        const cityNameLabel = document.createElement("h2");
        const cityPopLabel = document.createElement("span");
        const citySizeLabel = document.createElement("span");
        const whichSphereLabel = document.createElement("span")
        const latitudeLabel = document.createElement("span");
        const longitudeLabel = document.createElement("span");
        const breakline = document.createElement("br");
        const breakline2 = document.createElement("br");
        const breakline3 = document.createElement("br");
        const popInput = document.createElement("input");
        const increasePopButton = document.createElement("button");
        const decreasePopButton = document.createElement("button");
        const removeCityButton = document.createElement("button");

        cityNameLabel.textContent = city.name;
        cityPopLabel.textContent = "Population: " + city.currentPop;
        citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop);
        whichSphereLabel.textContent = this.whichSphere(city.lat);
        console.log(cityNameLabel);
        latitudeLabel.textContent = "Latitude: " + city.lat;
        longitudeLabel.textContent = "Longitude: " + city.long;
        increasePopButton.textContent = "Increase Population"
        decreasePopButton.textContent = "Decrease Populaton"
        removeCityButton.textContent = "Remove City";

        popInput.setAttribute("type", "number");
        popInput.setAttribute("id", "idPopChange");
        popInput.setAttribute("placeholder", "Population amount");
        increasePopButton.setAttribute("type", "button");
        increasePopButton.setAttribute("id", "idIncreasePopButton");
        decreasePopButton.setAttribute("type", "button");
        decreasePopButton.setAttribute("id", "idDecreasePopButton");
        removeCityButton.setAttribute("type", "button");
        removeCityButton.setAttribute("id", "idRemoveCity");

        div.classList.add("card");

        increasePopButton.addEventListener('click', async () => {
            if(!isNaN(popInput.value)){
                city.movedIn(parseFloat(popInput.value, 10));
                //await functions.postData('http://localhost:5000/update', {key: city.key, city: city})
                cityPopLabel.textContent = "Population: " + city.currentPop;
                citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop)
                this.updateGUI();
                popInput.value = "";
            }
        })

        decreasePopButton.addEventListener('click', async () => {
            if(!isNaN(popInput.value)){
                city.movedOut(parseFloat(popInput.value, 10));
                //await functions.postData('http://localhost:5000/update', {key: cities.key, name: city})
                cityPopLabel.textContent = "Population: " + city.currentPop;
                citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop)
                this.updateGUI();
                popInput.value = "";
            }
        })

        removeCityButton.addEventListener('click', async (e) => {
            //let tempDelete = await functions.postData('http://localhost:5000/delete', {key: city.key});
            //this.removeCityButton(textBit.textContent);
            this.deleteCity(city);
            this.updateGUI();
            e.target.parentNode.remove();
        })

        div.appendChild(cityNameLabel);
        div.appendChild(cityPopLabel);
        div.appendChild(citySizeLabel);
        div.appendChild(breakline);
        div.appendChild(whichSphereLabel);
        div.appendChild(latitudeLabel);
        div.appendChild(longitudeLabel);
        div.appendChild(breakline2);
        div.appendChild(popInput);
        div.appendChild(increasePopButton);
        div.appendChild(decreasePopButton);
        div.appendChild(breakline3);
        div.appendChild(removeCityButton);
        
        cardSpot.appendChild(div);
    }
}

export {City, Community};