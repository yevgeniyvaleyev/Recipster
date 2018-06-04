# Recipster app
The application fetched data from public API and shows items list. User can view details of the item by clicking on item.

# Installation

### Client
Use `npm install` in folder `client` to install needed dependencies 

### Dev server
Use `npm install` in folder `server` to install needed dependencies 

# Start

Dev server and client have to be started for correct work of the app.

### Client
Run `npm start` in `client` folder to start the client
For production build run `npm run build`

### Client
Run `npm start` in `server` folder to start dev server

# Test

Run `npm test` to do snapshot testing of components

# Environment

The application was developed and tested on `node v8.1.2`
 
# Decisions and difficulties

- Some open API have cross-origin resource sharing restrictions, so I added own dev server.
- I had some problems making react-router-redux working with persist, I decided to avoid using react-router-redux, since it does not give vaslue to this specific application.
- For bigger application I would add Typescript
- During testing appeared that react-flaxbox-grid@^2.0.0 has some problems with modules import, I had to use earlier version. Version ^2 requires farther investigation.  