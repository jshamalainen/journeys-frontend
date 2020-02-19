import React from 'react';
import './Components.css';

class JourneyListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <span className='StyledSpan'>{this.props.label}</span>
        {this.props.journeys.map(
        (value, index) => <p key={value.id} onClick={() => this.props.onClick(value.id)}><u>{value.from} - {value.to}</u></p> )}

      </div>
    ) 
  }
 }

 
export default JourneyListing;
