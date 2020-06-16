import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 21,
      counter2: 5
    };
  }

  onPushMe = () => {
    this.setState({counter: this.state.counter +1, counter2: this.state.counter2 +1})
  }
  // const [count, setCount] = useState(0);
  // const whatToSay = "Whatever!"
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h1>I am in control of this application and my name is ____{this.state.counter}</h1>
  <h3>{this.state.counter % 2 === 0 ? <EvenComponent /> : <OddComponent />}</h3>
        {/* <MyComponent whatToSay="Whatever!!" onPushMe={() => setCount(count +1)} /> */}
        <MyComponent whatToSay="Whatever!!" onPushMe={this.onPushMe} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

function App2() {
const [counter, setCounter] = useState(21);
// const [counter2, setCounter2] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h1>I am in control of this application and my name is ____{counter}</h1>
  <h3>{counter % 2 === 0 ? <EvenComponent /> : <OddComponent />}</h3>
  <MyComponent whatToSay="Whatever!!" onPushMe={() => setCounter(counter +1)} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
