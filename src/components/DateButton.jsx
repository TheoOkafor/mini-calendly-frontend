import React, { Component} from 'react'

class DateButton extends Component {
  render(){
    const { date } = this.props;
    return (
      <div className="column is-1">
        <button className="button">
          {date}
        </button>
      </div>
    )
  }
}

export default DateButton;
