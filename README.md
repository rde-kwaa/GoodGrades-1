# Good Grades   [![CircleCI](https://circleci.com/gh/rde-kwaa/GoodGrades/tree/master.svg?style=svg&circle-token=89cb641d483622d9806976e3ad3095d55aa1d800)](https://circleci.com/gh/rde-kwaa/GoodGrades/tree/master)

## Summary

Good Grades is a communications platform for students to connect to tutors and receive assistance with problematic subject  matter.

Students can book available tutors for both remote and face-to-face sessions.

Students are able to contact a tutor for immediate assitance when they need it.


This is the client for our Good Grades project. We keep the server for this project in a seperate repo (https://github.com/jde-agr/GoodGradesServer).


## Project Objectives

* Solving the problem of poor effectiveness when tutoring in person (offline) in a way that is cost effective and beneficial to both the student and tutor (**main objective**)

* Creating a web application that can allow a tutor and student to connect (online) and have tutoring sessions done remotely (**accessibility**)

* Having a means to distinguish between a student and a tutor and the different functionalities they have access to (**user management**, **user roles**)

* Enabling a tutor and student to easily maneuver around the application (**intuitive**, **UI/UX**)

* Simplify the process of making/booking tutoring sessions, as well as having an overview of tutor sessions that are open/booked (**views**, **filtering**)

* Dynamic data is necessary in order to have accurate indications of when a slot has been made/has been booked (**web sockets**)

* Please feel free to look at the [project proposal](./resources/WeThinkCode_Request_for_proposal.pdf) given to us for this project (Note: We have blacked out contact details for the sake of privacy)

## Prerequisites
You will need the following in order to help install and configure all the necessary packages and database setup.

> PostgreSQL
>
> Node
>
> NPM

## PostgreSQL Database Setup
We assume that you have PostgreSQL installed and make use of the default user to configure our database.

First enter PostgreSQL's shell using the command
```sh
$ psql postgres
```
Within the shell, we create a database for our project called **good_grades**, as well as the user who will manage this database called **good_grades_user** with the password **p@ssword1** and give them all privileges in order to have full CRUD accessibility to the database. 

>Please note that this is hardcoded into our code for the sake of easy setup and is not something one would do realistically as it is unsafe to store credentials with your source code (bad coding practice).
>

```sh
$ CREATE DATABASE good_grades;
$ CREATE USER good_grades_user WITH ENCRYPTED PASSWORD 'p@ssword1';
$ GRANT ALL PRIVILEGES ON DATABASE good_grades TO good_grades_user;
```

You can now exit the PostgreSQL shell using the command
```sh
$ \q
```

## GoodGrades Server Setup
The server side is kept in a seperate repo (https://github.com/jde-agr/GoodGradesServer). Please refer to it's README file for instructions on setting up the server.
 

### Server Side (SQL)

We need to install all the dependencies by using the command
```sh
$ npm install
```

Once all the dependencies have been installed, we can proceed to running the actual server by using the command
```sh
$ npm start
```
The server will run on port **5000** when run on **localhost**

### Client Side
First clone the repo using
```sh
$ git clone https://github.com/Onex101/GoodGrades.git
```
You can see the **main** folder structure is as follows (only listing files and folders relevant for the SQL implementation of this project):
```
GoodGrades 
│
│   README.md
│   server.js
│   
└───src
│   │
│   └───authentication
│   │
│   └───components
│   │
│   └───views
│
│   App.css
│   App.js
│   index.css
│   index.js
│   serviceWorker.js
│   socketEvents.js
```

We would need to have both the **server side** and **client side** running at the **same time**. This is because our server is responsible for serving the relevant data that our client side needs in order to operate.

We need to install all the dependencies by using the command
```sh
$ npm install
```

Once all the dependencies have been installed, we can proceed to running our client using the scripts explained below.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm start`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Testing
We have both a staging and production version of the client running on Heroku. Hence we'd test our client on our staging version to see if our changes would work live.

We tested our client by following the user journey that both a student and a tutor would experience when using our application.

If everthing ran smoothly on our staging server, we'd deploy our changes to production. If not, we would fix these changes locally, push to staging and begin our testing procedure once again.

