import functions from './fetch.js'
let key = 0;

class City {

    constructor (name, latitudeDegrees, latitudeMinutes,latitudeSphere, longitudeDegrees, longitudeMinutes, longitudeSphere, population, censusYear) {
        this.name = name;
        this.latitudeDegrees = latitudeDegrees;
        this.latitudeMinutes = latitudeMinutes;
        this.latitudeSphere = latitudeSphere;
            if (latitudeSphere === "S") {
                this.combinedLatitude = -latitudeDegrees + "." + latitudeMinutes;
            } else {
                this.combinedLatitude = latitudeDegrees + "." + latitudeMinutes;
            }
        this.longitudeDegrees = longitudeDegrees;
        this.longitudeMinutes = longitudeMinutes;
        this.longitudeSphere = longitudeSphere;
        this.population = population;
        this.censusYear = censusYear;
        this.currentPopulation = population;
    }

    show() {
        return `${this.name} city has a latitude of ${this.latitudeDegrees}° ${this.latitudeMinutes}' ${this.latitudeSphere} a longitude of ${this.longitudeDegrees}° ${this.longitudeMinutes}' ${this.longitudeSphere} and has a population of ${this.population}`
    }

    movedIn(morePeople) {
        return this.currentPopulation = this.currentPopulation + morePeople;
    }

    movedOut(lessPeople) {
        return this.currentPopulation = this.currentPopulation - lessPeople;
    }

    howBig(currentPopulation) {
        if (currentPopulation >= 1 && currentPopulation <=100) {
            return "Hamlet";
        } else if (currentPopulation >100 && currentPopulation <1000) {
            return "Village";
        } else if (currentPopulation >=1000 && currentPopulation <20000) {
            return "Town";
        } else if (currentPopulation >=20000 && currentPopulation <100000) {
            return "Large town";
        } else if (currentPopulation >=100000) {
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


    createCity(name, latitudeDegrees, latitudeMinutes,latitudeSphere, longitudeDegrees, longitudeMinutes, longitudeSphere, population, censusYear) {

        this.cities.push(new City(name, latitudeDegrees, latitudeMinutes,latitudeSphere, longitudeDegrees, longitudeMinutes, longitudeSphere, population, censusYear));
        console.log(this.cities);
    }

    deleteCity(cityToRemove, community) {
        for (let i=0; i<community.cities.length; i++) {
            if (cityToRemove === community.cities[i].name) {
                community.cities.splice([i], 1);
                console.log(community);
            }
        }
    }

    whichSphere(community, name) {
        // to return either the Northern Hemisphere or Southern Hemisphere
        for (let i=0; i<community.cities.length; i++) {
            //console.log(community.cities.length);
            //console.log(community.cities[i].latitudeSphere);
            if (community.cities[i].name === name) {
                if (community.cities[i].latitudeSphere === "N") {
                    return "This location is in the Northern Hemisphere"
                } else if (community.cities[i].latitudeSphere === "S") {
                    return "This location is in the Southern Hemisphere"
                } else {
                    return "It appears this location is not on planet Earth"
                }
            }
        }
    }

    getMostNorthern(community) {
        let getMostNorth = []
        for (let i=0; i<community.cities.length; i++) {
            //console.log(community.cities.length);
            getMostNorth.push(community.cities[i].combinedLatitude);
            //console.log(getMostNorth);
        }
            getMostNorth = Math.max(...getMostNorth);
            console.log(getMostNorth);   
                for (let j = 0; j<community.cities.length; j++) {
                    console.log(community.cities.length);
                    if (community.cities[j].combinedLatitude == getMostNorth) {
                        console.log(community.cities[j].name);
                        return community.cities[j].name;
                    }
                }
    }
             // console.log(community.cities.length);

    getMostSouthern(community) {
        let getMostSouth = []
        for (let i=0; i<community.cities.length; i++) {
            console.log(community.cities.length);
            getMostSouth.push(community.cities[i].combinedLatitude);
            console.log(getMostSouth);
        }
            getMostSouth = Math.min(...getMostSouth);
            console.log(getMostSouth);   
                for (let j = 0; j<community.cities.length; j++) {
                    console.log(community.cities.length);
                    if (community.cities[j].combinedLatitude == getMostSouth) {
                        console.log(community.cities[j].name);
                        return community.cities[j].name;
                    }
                }
    }
    
    getPopulation(community) {
        // total for all…
        let totalPopulation = 0;
        console.log(community.cities.length);
        for (let i=0; i<community.cities.length; i++) {
            totalPopulation += community.cities[i].currentPopulation;
        } 
        return totalPopulation
        //return totalPopulation;
    }

}

export {City, Community};