# WhatsNext

A vehicle stats tracker built with NextJS

    CD client - npm run dev
    CD server - npm start

## Server Documentation

[Postman Routes](https://documenter.getpostman.com/view/7725077/TVKJwtnP)

Create an account, signin, add a vehicle (make, modelType, and miles required), view all user vehicles, delete a vehicle by ID, update a vehicle by ID

## Environment Variables

### Server

MongoURI - local or to Atlas shard
JWT_KEY - a secret string of your choosing

### Client

NODE_ENV - development

## Todos

- fix cookie issue
- convert server into serverless lambda functions in NextJS
- styling
- logic for useful car statistics
- finish remaining routes in CarStats client
