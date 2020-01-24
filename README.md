# mini-calendly-frontend

A React-based mini version of calendly

## About
Ideally, the openings available for a calendar would be added by a mentor and come from the backend. In this app, I used the seed data from the `data.json` file for the available openings.
The data from this data.json file is refined and grouped by months to make more usable data for use in the calendar view.

When the calendar is first opened, an API call gets mentor information containing the mentor details, his/her openings and the bookings by his/her mentees.
Every booking is recorded to the database via an API call. After every booking, the mentor information gets fetch again to update the state with the fresh data.

#### Known Issues
1. This app only makes a shallow check. It uses the last data fetched from the backend to determine whether a calendar opening has been booked or not. A better implementation is when the time button is clicked, a call to the backend confirms whether the slot is still open or not.
2. The app sends the same notification regardless of whether the booking was successful or not. A better implementation will notify the user about failures that may have occurred in the process.
3. Currently, alert boxes are used to notify the user. A better implementation is to use custom notification components.

## Getting Started

Clone this [repo](https://github.com/TheoOkafor/mini-calendly-frontend.git)

```bash
git clone https://github.com/TheoOkafor/mini-calendly-frontend.git
```

#### Dependencies
To install the dependencies run
```bash
yarn
```


### Running the app
To run the app
```node
yarn start
```

### Running tests
To run test
```node
yarn test
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
