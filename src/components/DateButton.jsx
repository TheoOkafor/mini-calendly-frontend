import React, { Component } from 'react'

class DateButton extends Component {
  handleClick = (event) => {
    const { handleClick, date } = this.props;
    handleClick(date[1]);
  }
  render(){
    const { date } = this.props;
    return (
      <div className="column is-2">
        <button
          className="button date-button"
          onClick={this.handleClick}
        >
          {date[0]}
        </button>
      </div>
    )
  }
}

export default DateButton;
