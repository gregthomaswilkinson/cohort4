    class City {

        constructor (name, lat, long, key, pop) {
            this.name = name ? name : "unknown name"
            this.lat = lat ? lat : 0
            this.long = long ? long : 0
            this.key = key
            this.pop = pop ? pop : 0;
        }

        show() {
            return `${this.name} city has a latitude of ${this.lat} a longitude of ${this.long} and has a population of ${this.pop}`
        }
    
        movedIn(morePeople) {
            console.log("I ran alex rules")
            return this.pop = this.pop + morePeople;
        }
    
        movedOut(lessPeople) {
            return this.pop = this.pop - lessPeople;
        }
    
        howBig() {
            if (this.pop >= 1 && this.pop <=100) {
                return "Hamlet";
            } else if (this.pop >100 && this.pop <1000) {
                return "Village";
            } else if (this.pop >=1000 && this.pop <20000) {
                return "Town";
            } else if (this.pop >=20000 && this.pop <100000) {
                return "Large town";
            } else if (this.pop >=100000) {
                return "City";
            } else {
                return "Not sure what to do with this"
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
    }

export default City;