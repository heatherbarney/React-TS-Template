# React/Typescript Template

A starter template for React/Typescript apps with boilerplate for static testing and CI pipeline through GitHub Actions.

## Description

This repo is intended to provide a solid template for myself and other developers to start from in building out new React/Typescript apps with pre-built integrations of a number of important tools to aid in the development process.

## Features

All branches include:

* Code formatting with Prettier
* Linting with Eslint
* Type checking with Typescript and tsc
* Commit linting with Commitlint
* Precommit hooks with Husky and Lint-staged
* Testing setup with Jest and React Testing Library
* CI workflows with Github Actions
* Dev server with hot module reloading via Vite
* Production bundling via Vite/Rollup

## Other Branches

Other branches of the project extend the main template in various ways.

* docker-dev - provides a containerized development environment with hot module reloading
    * Create a new Docker image on your Dockerhub account by running the following command in the terminal:  
    `docker build -f Dockerfile-dev -t [your dockerhub username here]/react-template .`
    * In docker-compose-dev-hot.yml, append [your Dockerhub username here]/react-template as the image on line 4.
    * To spin up the container, type `npm run docker-dev` in the command line.

## Getting Started

To get started, simply click the green "Use this template" button on the repo's main page to create a new repo with the same files and folders. 

## Make It Your Own!

Edit the rules for static testing to suit your own personal preferences.

* Code formatting rules: prettierrc.json
* Linting rules: eslintrc.json
* Type checking rules: tsconfig.json
* Commit linting rules: commitlint.config.js
