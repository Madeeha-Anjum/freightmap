# Welcome to the freight map repository  

<img src="demo.gif" width="full" height="300" />
<div align="center">

![Static Badge][NodeJS_Badge]
![Static Badge][TypeScript_Badge]

![Static Badge][ESLint_Badge]
![Static Badge][Prettier_Badge]

[View Swagger Documentation](https://editor.swagger.io/?url=https://raw.githubusercontent.com/PranavB6/timeey-server/main/src/docs/openapi.yaml)

</div>

## :star2: Project Purpose and Objectives

The main goal of this project is to create a simple and easy to use time tracking application using Google Sheets to store all the data. This is aimed to managers who want to track their employees' time.

This is the backend of the application. It is a REST API that is used to communicate with the Google Sheets API. You can find the frontend [here](https://github.com/Madeeha-Anjum/timeey-time-client). This project is built on NodeJS using the ExpressJS framework.

## :chart_with_upwards_trend: Future Plans

- [ ] Deploy to GCP Cloud Run

## :sunrise: Getting Started

0. (Prerequisites)
   - Install [NodeJS](https://nodejs.org/en/download/) and npm (included with NodeJS)
   - Copy the `.env.example` file and rename it to `.env`. Fill in the values for the environment variables.
1. Clone the repository cd into client directory
2. Run `pnpm install` to install all dependencies
3. Run `pnpm run dev` to start the server in development mode (this will build the project and start the server in watch mode)
4. Open `http://localhost:5173` in your browser to view the application

### :broom: Linting / Formatting

NOTE: The project is automatically linted and formatted on commit using Husky and Lint-Staged.

## :eyes: Technologies Used

- [React](https://reactjs.org/)
  - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/)
  - A superset of JavaScript that adds static typing to the language
- [Google Maps API]( https://developers.google.com/maps/documentation/javascript/overview)
  - A library that allows you to easily interact with Google Maps APIs

### :broom: Linting / Formatting Technologies

- [ESLint](https://eslint.org/)
  - A linter used to lint the project
- [Prettier](https://prettier.io/)
  - A code formatter used to format the project

[ESLint_Badge]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[Prettier_Badge]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
