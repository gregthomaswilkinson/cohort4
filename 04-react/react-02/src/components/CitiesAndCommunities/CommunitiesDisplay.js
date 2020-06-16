import React from 'react';
import Community from './Communities';
import CityCard from './CityCard';
import randomCity from './RandomCityData';
import City from './Cities';
import './Communities.css';



const controller = new Community();

class CommunitiesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: controller.cities,

            key: 1,
            name: "",
            lat: "",
            long: "",
            pop: "",

            mostNorthern: "",
            mostSouthern: "",
            totalPop: 0,
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/all')
          .then(res => res.json())
          .then(
            (result) => {
              result.forEach(element => {
                controller.cities.push(new City(element.name, element.lat, element.long, element.key, element.pop));
                this.handleUpdate();
                this.setState({key: this.state.key + 1});
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    //Grabs inputs and puts them into State  
    getCityName = (event) => {
        this.setState({name: event.target.value});
    }

    getCityLat = (event) => {
        this.setState({lat: event.target.value});
    }

    getCityLong = (event) => {
        this.setState({long: event.target.value});
    }

    getCityPop = (event) => {
        this.setState({pop: event.target.value});
    }

    //Gets random city and populates input fields with random city data
    handleGetRandomCity = () => {
        let randomNumber = Math.round(Math.random() * (randomCity.length-1));
        // console.log(randomNumber);
        
        this.setState({name: randomCity[randomNumber].name});
        this.setState({lat: randomCity[randomNumber].lat});
        this.setState({long: randomCity[randomNumber].long});
        this.setState({pop: randomCity[randomNumber].pop});
    }


    //Creates new city from input data
    handleCreateCity = () => {
        // event.preventDefault();
        // const cities = [...this.state.cities]
        console.log(this.state.cities);
        // cities.push({
        //     name: event.target.elements.idCityName.value,
        //     lat: event.target.elements.idLatitude.value,
        //     long: event.target.elements.idLongitude.value,
        //     key: this.key,
        //     pop: event.target.elements.idPopulation.value
        // });
        controller.createCity(this.state.name, Number(this.state.lat), Number(this.state.long), Number(this.state.key), Number(this.state.pop));
        this.handleUpdate();
        this.setState({key: this.state.key+1});
        console.log(this.state.cities);
    }

    //Deletes city
    handleDeleteCity = (key) => {
        controller.deleteCity(key);
        console.log(key);
        this.handleUpdate();
    }

    handleUpdateServer = (key) => {
        controller.updateServer(key);
        // this.handleUpdate();
    }


    //Handles automatic updates for most Northern city, most Southern city and total population of all cities
    handleUpdate = () => {
        this.setState({mostNorthern: controller.getMostNorthern()?.name});
        this.setState({mostSouthern: controller.getMostSouthern()?.name});
        this.setState({totalPop: controller.getPopulation()});
    }

    //Clears text input fields after new city is created
    resetInput = () => {
        this.setState({name: ""});
        this.setState({lat: ""});
        this.setState({long: ""});
        this.setState({pop: ""});
    }

    componentWillUnmount() {
        controller.cities=[];
    }

    render () {

        let cards = this.state.cities.map((city, i) => 
        <CityCard key={city.key} city={city} delete={this.handleDeleteCity} popzChange={this.handleUpdate} updateServer={this.handleUpdateServer} />
        )
  
        return (
            <div className="App">
                <h1>City and Communities project</h1><br /><br />
                <div>
                    <label>City name:</label>
                    <input type ="text" id ="idCityName" placeholder="Name of the City" value ={this.state.name} onChange={this.getCityName} ></input><br />
                    <label>Latitude:</label>
                    <input type ="number" id ="idLatitude" placeholder="Decimal Degrees" value ={this.state.lat} onChange={this.getCityLat}></input><br />
                    <label>Longitude:</label>
                    <input type ="number" id ="idLongitude" placeholder="Decimal Degrees" value ={this.state.long} onChange={this.getCityLong}></input><br />
                    <label>Population:</label>
                    <input type ="number" id ="idPopulation" placeholder="Population" value ={this.state.pop} onChange={this.getCityPop}></input><br />
                    <button type = "button" id= "idInputCity" onClick= {this.handleCreateCity}>Create City</button>
                    <button type = "button" id= "idInputCity" onClick= {this.handleGetRandomCity}>Random City Data</button><br /><br />
                </div>
                <div className="communities-grid-container">
                    <div className="communities-grid-item">Most Northern City:<br />
                        <span id ="idMostNorth">{this.state.mostNorthern}</span>
                    </div>
                    <div className="communities-grid-item">Most Southern City:<br />
                        <span id ="idMostSouth">{this.state.mostSouthern}</span>
                    </div>
                    <div className="communities-grid-item">Total Population of all cities:<br />
                        <span id ="idTotalPopulation">{this.state.totalPop}</span>
                    </div>
                </div><br />
                    {cards}
                <div id="idCardSpot" className= "communities-grid-container">
                    {cards}
                </div>
            </div>
        );
    }
}

export default CommunitiesDisplay;

//FORM SAMPLE FOR POSSIBLE USE IN THE FUTURE
/* <form onSubmit= {this.handleCreateCity}>
<label htmlFor="idCityName">City name:</label>
<input type ="text" id ="idCityName" placeholder="Name of the City" name= "name"></input><br />
<label htmlFor="idLatitude">Latitude:</label>
<input type ="number" id ="idLatitude" placeholder="Decimal Degrees" name= "lat"></input><br />
<label htmlFor="idLongitude">Longitude:</label>
<input type ="number" id ="idLongitude" placeholder="Decimal Degrees" name= "long"></input><br />
<label htmlFor="idPopulation">Population:</label>
<input type ="number" id ="idPopulation" placeholder="Population" name="pop"></input><br />
<button type = "submit" id= "idInputCity">Create City</button><br /><br />
</form> */