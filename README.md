## Course Management System

Project for SQA (Software Quality Assurance) Course

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
  - [API Documentation](#api-documentation)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Description
#### Tech Stack

MERN (MongoDB, ExpressJS, ReactJS, NodeJS

Fontend: ReactJS
Backend: NodeJS + ExpressJS
Database: MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (at least version 18)
- [npm](https://www.npmjs.com/) (at least version 9)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdraselislam1944/sqa.git

   cd frontend
   npm install -f
   npm run dev

   cd ..
   cd backend
   npm install -f
   npm start
   ```

**NOTE:** The backend requires a special `.env` file to run properly, this contains various secret keys, database authentications etc. For security this has been exempted from the GitHub repository. Please contact one of the repository maintainers for the access.

### Testing

2. For testing, enter the following command:

   ```bash
   npm test
   ```

### JSdoc

3. user management testing:

   ```bash
   cd backend
   cd controllers
   cd out
   # open user.controller.js click mouse right click and "open with Live server" button.
   ```

