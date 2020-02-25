import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const key = 'title';
const list = [
  {
    [key]: 'React',
    url: 'https://reactjs.org',
    target: '_blank',
    objectID: 0
  },
  {
    [key]: 'Redux',
    url: 'https://redux.js.org',
    target: '_blank',
    objectID: 1
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }  

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList});
  }
  restoreAll() {
    this.setState({list});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
          {this.state.list.map( item => 
            <div key={item.objectID}> 
            <span><a className="App-link" href={item.url} target={item.target} rel="noopener noreferrer">
            Learn {item.title}
            </a> 
            </span>
            <span>
              <button onClick={()=> this.onDismiss(item.objectID)}
              type="button">Dismiss</button>
            </span>
            </div>
          )} 
              <button onClick={()=> this.restoreAll()}
              type="button">Restore All</button>
      </header>
    </div>
  );
  }
}

export default App;
