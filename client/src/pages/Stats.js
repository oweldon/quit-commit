import React, { Component } from 'react';

class Stats extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h4>You've been smoking for {this.props.user.yearsSmoked} years</h4>
          <h4>You've smoked  {this.props.user.cigsPerDay} cigs per day</h4>
          <h1>Stats page</h1>
        </div>);
    }
    else {
      return (<p>Stats page</p>);
    }
  }
}

export default Stats;
