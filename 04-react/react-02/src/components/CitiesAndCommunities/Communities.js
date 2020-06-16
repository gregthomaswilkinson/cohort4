import City from './Cities'
import functions from './Fetch'


class Community{

    constructor() {
        this.cities = [];
    }


    async createCity (name, lat, long, key, pop) {
        this.cities.push(new City(name, lat, long, key, pop));
        await functions.postData("http://127.0.0.1:5000/add", {name, lat, long, key, pop});
        console.log(this.cities);
    }

    async deleteCity (key) {
        console.log(key)
        for (let i=0; i<this.cities.length; i++) {
            if (key === this.cities[i].key) {
                this.cities.splice([i], 1);
                await functions.postData("http://127.0.0.1:5000/delete", {key});
                console.log(this);
            }
        }
    }

    async updateServer (key) {
        for (let i=0; i<this.cities.length; i++) {
            if (key === this.cities[i].key) {
                await functions.postData("http://127.0.0.1:5000/update", this.cities[i]);
            }
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
            totalPopulation += value.pop;
        })
        return totalPopulation;
    }

    //HANDLED BY THE CITYCARD COMPONENT JUST HERE FOR REFERENCE UNTIL I DECIDE TO DELETE IT
    
    // createCard(city) {
    //     const cardSpot = document.getElementById("idCardSpot");

    //     let div = document.createElement("div");

    //     const cityNameLabel = document.createElement("h2");
    //     const cityPopLabel = document.createElement("span");
    //     const citySizeLabel = document.createElement("span");
    //     const whichSphereLabel = document.createElement("span")
    //     const latitudeLabel = document.createElement("span");
    //     const longitudeLabel = document.createElement("span");
    //     const breakline = document.createElement("br");
    //     const breakline2 = document.createElement("br");
    //     const breakline3 = document.createElement("br");
    //     const popInput = document.createElement("input");
    //     const increasePopButton = document.createElement("button");
    //     const decreasePopButton = document.createElement("button");
    //     const removeCityButton = document.createElement("button");

    //     cityNameLabel.textContent = city.name;
    //     cityPopLabel.textContent = "Population: " + city.currentPop;
    //     citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop);
    //     whichSphereLabel.textContent = this.whichSphere(city.lat);
    //     console.log(cityNameLabel);
    //     latitudeLabel.textContent = "Latitude: " + city.lat;
    //     longitudeLabel.textContent = "Longitude: " + city.long;
    //     increasePopButton.textContent = "Increase Population"
    //     decreasePopButton.textContent = "Decrease Populaton"
    //     removeCityButton.textContent = "Remove City";

    //     popInput.setAttribute("type", "number");
    //     popInput.setAttribute("id", "idPopChange");
    //     popInput.setAttribute("placeholder", "Population amount");
    //     increasePopButton.setAttribute("type", "button");
    //     increasePopButton.setAttribute("id", "idIncreasePopButton");
    //     decreasePopButton.setAttribute("type", "button");
    //     decreasePopButton.setAttribute("id", "idDecreasePopButton");
    //     removeCityButton.setAttribute("type", "button");
    //     removeCityButton.setAttribute("id", "idRemoveCity");

    //     div.classList.add("card");

    //     increasePopButton.addEventListener('click', async () => {
    //         if(!isNaN(popInput.value)){
    //             city.movedIn(parseFloat(popInput.value, 10));
    //             //await functions.postData('http://localhost:5000/update', {key: city.key, city: city})
    //             cityPopLabel.textContent = "Population: " + city.currentPop;
    //             citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop)
    //             this.updateGUI();
    //             popInput.value = "";
    //         }
    //     })

    //     decreasePopButton.addEventListener('click', async () => {
    //         if(!isNaN(popInput.value)){
    //             city.movedOut(parseFloat(popInput.value, 10));
    //             //await functions.postData('http://localhost:5000/update', {key: cities.key, name: city})
    //             cityPopLabel.textContent = "Population: " + city.currentPop;
    //             citySizeLabel.textContent = "Town Size: " + city.howBig(city.currentPop)
    //             this.updateGUI();
    //             popInput.value = "";
    //         }
    //     })

    //     removeCityButton.addEventListener('click', async (e) => {
    //         //let tempDelete = await functions.postData('http://localhost:5000/delete', {key: city.key});
    //         //this.removeCityButton(textBit.textContent);
    //         this.deleteCity(city);
    //         this.updateGUI();
    //         e.target.parentNode.remove();
    //     })

    //     div.appendChild(cityNameLabel);
    //     div.appendChild(cityPopLabel);
    //     div.appendChild(citySizeLabel);
    //     div.appendChild(breakline);
    //     div.appendChild(whichSphereLabel);
    //     div.appendChild(latitudeLabel);
    //     div.appendChild(longitudeLabel);
    //     div.appendChild(breakline2);
    //     div.appendChild(popInput);
    //     div.appendChild(increasePopButton);
    //     div.appendChild(decreasePopButton);
    //     div.appendChild(breakline3);
    //     div.appendChild(removeCityButton);
        
    //     cardSpot.appendChild(div);
    // }
}

export default Community;

