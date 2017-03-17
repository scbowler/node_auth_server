# NodeJS Auth Server

> A simple auth server that uses NodeJs and MongoDB. The server utilizes JSON Web Tokens (JWT) for user authentication. Available actions are: sign-in, sign-out, and create user.

## Installation

> *NOTE*: You must have a MongoDB setup and running on your system for this to work. Visit <a href="https://www.mongodb.com/" target="_blank">HERE</a> for info on setting up a MongoDB.
>
>1. Clone or Fork then Clone this repo
>    - `git clone https://github.com/scbowler/node_auth_server.git`
>1. Change to the newly created directory
>    - `cd node_auth_server`
>1. Install packages
>    - `npm install`
>1. Rename the `config.rename.js` file to `config.js`
>    - `mv config.rename.js config.js`
>1. Start MongoDB (*If not already running*)
>    - `mongod`
>1. Start server
>    - `npm run dev`