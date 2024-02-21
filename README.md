# Course Management System
Project for SQA (Software Quality Assurance) Course


# Tech Stack
MERN (MongoDB, ExpressJS, ReactJS, NodeJS

Fontend: ReactJS
Backend: NodeJS + ExpressJS
Database: MongoDB


# How to run
## Prerequisites

Install nodeJS from https://nodejs.org/en/download
or,
On linux:
```
sudo apt install nodejs
```


## Dependencies
Install package dependencis required for the app by entering `npm install`. This have to be entered inside frontend and backend directory each.

```
cd frontend
npm install
```

and 

```
cd backend
npm install
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

3. user management testing:

   ```bash
   cd backend
   cd controllers
   cd out
   # open user.controller.js click mouse right click and "open with Live server" button.
   ```
