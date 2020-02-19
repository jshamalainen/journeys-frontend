import React from 'react';
import './Components.css';



class JourneyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='StyledJourneyDetails'></div>
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
