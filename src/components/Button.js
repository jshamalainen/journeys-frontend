import React from 'react';
import './Components.css';

class Button extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
     return (
      <button className='StyledButton' onClick = {this.props.onClick}>
      {this.props.label}
      </button>
    ) }
}

export default Button;
