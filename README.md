# Course Management System
Project for SQA (Software Quality Assurance) Course

## Table of Contents

- [Project Name](#Online course management)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Testing](#testing)
  - [JSdoc](#jsdoc)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Description
#### Tech Stack

# Tech Stack
MERN (MongoDB, ExpressJS, ReactJS, NodeJS)

Fontend: ReactJS
Backend: NodeJS + ExpressJS
Database: MongoDB


# How to run
## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (at least version 18)
- [npm](https://www.npmjs.com/) (at least version 9)


## Dependencies
Install package dependencis required for the app by entering `npm install`. This have to be entered inside frontend and backend directory each.

```
cd frontend
npm install -f
cd ../backend
npm install -f
```

Clone the repository:

   ```bash
   git clone https://github.com/merajmasuk/sqa.git
   ```


## Build & Run
After installing necessary dependencies, start the app by running the nodemon service.

On backend directory,
```
npm start
```

On frontend directory,
```
npm run dev
```

**NOTE:** The backend requires a special `.env` file to run properly, this contains various secret keys, database authentications etc. For security this has been exempted from the github repository. Please contact one of the repository maintainers for the access.

### Testing

2. For testing, enter the following command:

   ```bash
   npm test
   ```

### JSdoc

3. Frontend:

```
cd frontend/src/pages/<page>/out
```

backend: 
```bash
   cd backend/controllers/out
   # open user.controller.js click mouse right click and "open with Live server" button.
```

### Unit test

```
cd backend
npm test
```

### CICD
Use ngrok for online jenkins payload
