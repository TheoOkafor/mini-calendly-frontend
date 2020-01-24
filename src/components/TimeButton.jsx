import React, { Component} from 'react'

class TimeButton extends Component {
  render(){
    const { time } = this.props;
    return (
      <div className="columns">
        <button className="button is-medium is-fullwidth">
          {time}
        </button>
      </div>
    )
  }
}

export default TimeButton;
