# crudapi-using-expressjs-nodejs-mongodb
# CRUD API

A simple REST API for managing records, built with Node.js, Express.js and MongoDB (Mongoose).

## Setup
1. `npm install`
2. Start MongoDB locally
3. `npm start`

Server runs on `http://localhost:9000`.

## Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | /first | Get all records |
| GET | /first/:id | Get one record |
| POST | /first | Create a record |
| PATCH | /first/:id | Update a record |
| DELETE | /first/:id | Delete a record |

## Example body
{ "name": "Pranjal", "tech": "node", "sub": true }
