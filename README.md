The purpose of this repo is to provide a simple back-end to support a GraphQL workshop.

## Install

This project uses [Yarn](https://www.npmjs.com/package/yarn) for dependency management for the [Node.js](https://nodejs.org/en/) applications.  Developers should ensure they having the latest released versions of Yarn and Node installed globally on their machines.  

[Instructions for installing Node](https://nodejs.org/en/download/)
[Instructions for installing Yarn](https://yarnpkg.com/lang/en/docs/install) 

Ensure you are running Node versions > 10 locally before proceeding (can be confirmed by running `node -v` at the command line).

To install project dependencies, run 
`yarn`

## How to use

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn start
```

This will start the server and GraphQL Playground locally.  It will be available at [http://localhost:3000](http://localhost:3000)

## Example Queries

```query {
  episodes(name:"Winter") {
    id
    name
    season
    number
    airdate
    airtime
    runtime
    image {
      medium
    }
  }
}```

```
query {
  translate(targetLanguage:"minion", text: "GraphQL is rad af") {
    text
    translated
    translation
  }
}
```