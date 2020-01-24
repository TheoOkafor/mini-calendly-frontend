import React, { Component} from 'react';
import axios from 'axios';

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

  handleTextInput = (event) => {
    const {time } = this.props;
    this.setState({
      data: {
        message: event.target.value,
        'date_time': time.time,
        'user_id': 1,
        'mentor_id': 1,
      }
    })
  }

  handleSubmit = async () => {
    await axios.post(
      'http://127.0.0.1:8000/api/mentor/1/bookings',
      this.state.data
    )
    alert('You have successfully booked a session');
    this.setState({
      showForm: false,
    })
  }

  renderForm = () => (
    <div className="">
      <form>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Leave a message"
              onInput={this.handleTextInput}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              onClick={this.handleSubmit}
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
