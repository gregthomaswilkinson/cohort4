import React from 'react';
import './App.css';
import Menu from './components/Menu';
import HomePage from './HomePage';
import TicTacToe from './components/TicTacToe'
import AccountsDisplay from './components/Accounts/AccountsDisplay';
import CommunitiesDisplay from './components/CitiesAndCommunities/CommunitiesDisplay';
import LinkedListDisplay from './components/LinkedList/LinkedListDisplay';
import FIFOAndLIFODisplay from './components/FIFOAndLIFO/FIFOAndLIFODisplay';
import API from './components/api/api.js';
import ThemeContextProvider from './contexts/ThemeContext';
// import Settings from './components/Settings/Settings'
import ThemeToggle from './components/Settings/Settings';
// import AccountController from './components/Accounts';




class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      imageclick: 0,
      
    };
  }

  handleClick = (number) => {
    this.setState({imageclick: number
    });
  }

  
  render() {
    return (
      <div className="App">
        <Menu handleClick={this.handleClick} />
        <ThemeContextProvider>
          {this.state.imageclick === 0 && <HomePage />}
          {this.state.imageclick === 1 && <TicTacToe />}
          {this.state.imageclick === 2 && <AccountsDisplay />}
          {this.state.imageclick === 3 && <CommunitiesDisplay />}
          {this.state.imageclick === 4 && <LinkedListDisplay />}
          {this.state.imageclick === 5 && <FIFOAndLIFODisplay />}
          {this.state.imageclick === 6 && <API />}
          {this.state.imageclick === 7 && <ThemeToggle />}
        </ThemeContextProvider>
      </div>
    );
  }
}


export default App;
