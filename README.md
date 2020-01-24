# mini-calendly-frontend

A React-based mini version of calendly
![mini-calendly](https://user-images.githubusercontent.com/31534129/73093337-97e12d00-3ede-11ea-9f0a-c0c867537c23.png)

## About
When the calendar is first opened, an API call gets mentor information containing the mentor details, his/her openings and the bookings by his/her mentees.
Every booking is recorded to the database via an API call. After every booking, the mentor information gets fetch again to update the state with the fresh data.

#### Known Issues
1. The app sends the same notification regardless of whether the booking was successful or not. A better implementation will notify the user about failures that may have occurred in the process.
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
