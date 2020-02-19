import React from 'react';
import './JourneyRetriever.css';
import axios from 'axios';
import Button from '../components/Button.js'
import JourneyListing from '../components/JourneyListing.js'
import JourneyDetails from '../components/JourneyDetails.js'

const BACKEND_BASE_URL="http://localhost:8888"

class JourneyRetriever extends React.Component {
    constructor(props) {
    super(props);
      this.state = {
        journeys: [],
        selected_journey: null
      }
    }
  
    // HERE: Implement click handler for "Get journeys" Button.                     
    
    handleStationClick = (journey_id) => axios(BACKEND_BASE_URL + '/journeys/' + journey_id)
                                            .then(resp => this.setState({...this.state, "selected_journey": resp.data}))
  
    render() {
      return(
        <div>
          {this.state.journeys.length > 0 &&
            <JourneyListing label = 'Journeys available' journeys = {this.state.journeys} onClick = {this.handleStationClick} />
          }
          <Button label = 'Get journeys' />
          {this.state.selected_journey != null &&
          <JourneyDetails selected_journey = {this.state.selected_journey} />
          }
      </div>
      )
    }
  }

export default JourneyRetriever;
