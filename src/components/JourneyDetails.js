import React from 'react';
import './Components.css';



class JourneyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='StyledJourneyDetails'>
        <JourneyDetailsRow label = 'From station: ' content = {this.props.selected_journey.from}/>
        <JourneyDetailsRow label = 'To station: ' content = {this.props.selected_journey.to}/>
        <JourneyDetailsRow label = 'Train type: ' content = {this.props.selected_journey.train}/>
      </div>
    ) 
  }
 }
 


class JourneyDetailsRow extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <span className='StyledSpan'>{this.props.label}</span>
          {this.props.content}
        </div>
      ) 
    }
   }
   
export default JourneyDetails 
