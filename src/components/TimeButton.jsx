import React, { Component} from 'react'

class TimeButton extends Component {
  state = {
    showForm: false,
  }

  handleTimeButtonClick = (event) => {
    event.preventDefault();
    const { bookings, time } = this.props;
    const isBooked = bookings.find(item => item['date_time'] === time.time);
    if(isBooked){
      alert('This slot has been booked');
    } else {
      this.setState({
        showForm: true,
      })
    }
  }

  renderForm = () => (
    <div className="">
      <form>
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Leave a message"></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              >Book</button>
          </div>
        </div>
      </form>
    </div>
  )

  render(){
    const { time } = this.props;
    const { showForm } = this.state;
    return (
      <div className="margin-vertical-20">
        <div className="">
          <button
            className="button is-medium is-fullwidth"
            onClick={this.handleTimeButtonClick}
          >
            {`${time.hour}:00`}
          </button>
        </div>
        {showForm && this.renderForm()}
      </div>
    )
  }
}

export default TimeButton;
