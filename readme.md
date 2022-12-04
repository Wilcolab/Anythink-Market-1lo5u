# Welcome to the Anythink Market repo (powered by [Wilco](https://www.trywilco.com))

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Clone the repo
```
git clone https://github.com/ObelusFamily/Anythink-Market-1lo5u
```

2. Install [Docker](https://docs.docker.com/get-docker/)
- to verify docker insatllation run the following commands in your terminal
```
docker -v

docker-compose -v
```

3. Run from your project root the docker composer up
```
docker-compose up
```
If Docker is working correctly, the backend should be running and able to connect to your local database.
Let's test this by pointing your browser to http://localhost:3000/api/ping

Now, it’s time to check the frontend and make sure it’s connected to the backend.

If everything is working properly, you’ll be able to create a new user on http://localhost:3001/register
