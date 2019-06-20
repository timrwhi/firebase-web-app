# What is this?
It's the scaffolding for a Firebase-based CRUD web app. Why? I was tired of getting bogged down with setup when starting a new project.

## Setup
1. Create a new file called `firebaseConfig.json` and paste the config object Firebase gives you. It should look something like this:
```
{
  "apiKey": "XXX",
  "authDomain": "my-app.firebaseapp.com",
  "databaseURL": "https://my-app.firebaseio.com",
  "projectId": "my-app",
  "storageBucket": "my-app.appspot.com",
  "messagingSenderId": "XXX",
  "appId": "XXX"
}
```
2. Edit the `name` property inside `package.json` and `now.json` to reflect the name of your project.

## Development
Run `yarn dev` to spin up a development server at `localhost:3000`

## Deploy
Deployments are made via [now.sh](https://zeit.co/now), so you'll need an account.
Then, run `yarn deploy` to build and deploy the app.
