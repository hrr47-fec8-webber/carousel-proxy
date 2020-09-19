# Booked Proxy

Welcome to Booked, a vacation rental booking website! This repo contains the proxy server that renders all modules.
![Alt text](./screenshots/PageGif.gif?raw=true "Full Page")


## Related Projects

  - https://github.com/hrr47-fec8-webber/carousel-service
  - https://github.com/hrr47-fec8-webber/booking-service
  - https://github.com/hrr47-fec8-webber/reviews-service
  - https://github.com/hrr47-fec8-webber/moreplacestostay-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

A proxy server for Booked, a vacation rental booking website. Once the server is running, directing the browser to http://localhost:3000/:id will render location data for the associated ID. Each service must be running individually. All services contain at least 100 primary records, so the url will work for any ID between 1 and 100, inclusive.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Express 4.17.1

Please clone all repos listed under Related Projects and follow each ReadMe carefully before running the proxy server!

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Running the Proxy

Once all services are ready and databases and servers are up an running, from within the root directory:

```sh
npm start
```

Direct the browser to http://localhost:3000/:id, passing in 1, 2, or 3 to see data associated with the particular location id.

## Views

### Full Page

![Alt text](./screenshots/edit.png?raw=true "Full Page")
