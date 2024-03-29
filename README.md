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

## Getting Started

To get started, simply click the green "Use this template" button on the repo's main page to create a new repo with the same files and folders. Clone the new repo, then run ```npm install``` followed by ```npm run prepare``` to enable Husky's pre-commit hooks.

## Make It Your Own!

Edit the rules for static testing to suit your own personal preferences.

* Code formatting rules: prettierrc.json
* Linting rules: eslintre.json
* Type checking rules: tsconfig.json
* Commit linting rules: commitlint.config.js
