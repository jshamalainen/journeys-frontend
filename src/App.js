import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function Display(props) {
  return(
    <div>
      <span className='StyledSpan'>{props.label}</span>
      {props.content}
    </div>
  ) }

function Button(props) {
  return (
    <button className='StyledButton' onClick = {props.onClick}>
    {props.label}
    </button>
  ) }

class JourneyRetriever extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: [],
      selected_station: null
    }
  }

  /*  BONUS
  handleClick() {
    axios('http://localhost:8888/journeys').then(data => this.setState( { data }))
  }
  */

  handleClick = () => axios('http://localhost:8888/journeys')
                      .then(resp => this.setState(state =>  ({ ...state, "journeys": resp.data })))

  handleStationClick = (journey_id) => axios('http://localhost:8888/journeys/' + journey_id)
                                          .then(resp => this.setState({...this.state, "selected_station": resp.data}))

  render() {
    return(
      <div>
        {this.state.journeys.length > 0 &&
          <Display label = 'Journeys available' content = {
              this.state.journeys.map(
                (value, index) => <p key={value.id} onClick={() => this.handleStationClick(value.id)}><u>{value.from} - {value.to}</u></p>
              )
          }/>
        }
        <Button label = 'Get journeys' onClick={this.handleClick}/>
        {this.state.selected_station != null &&
        <div className='StyledDiv'>
          <Display label = 'From station: ' content = {this.state.selected_station.from}/>
          <Display label = 'To station: ' content = {this.state.selected_station.to}/>
          <Display label = 'Train type: ' content = {this.state.selected_station.train}/>
        </div>
        }
    </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <JourneyRetriever />
      </header>
    </div>
  );
}

export default App;
