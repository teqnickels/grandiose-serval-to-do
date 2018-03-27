# Grandiose-Serval
A learning project where I built a full stack to do list application. I built this project while attending The Learner's Guild and it was an assignment that had a set of specs that I needed to try to reach. I've included the original specs in this document below. 

## Learning Project Goals
  - [x] Express
  - [x] Restful Routing
  - [ ] Authentication
  - [x] Node
  - [ ] Passport
  - [ ] Bcrypt
  - [ ] Sessions
  - [ ] Cookies
  - [x] Pug
 
 ## Notes
 _I met most of the specs for the project, but didn't get to authentication. I was able to learn about authentication, Bcrypt, Sessions, and Cookies, later in another learning-based project: https://github.com/teqnickels/contacts-snapshot-starter _
 
# Installation Instructions

```
git clone https://github.com/teqnickels/grandiose-serval-to-do.git
cd grandiose-serval-to-do
npm install
npm start
visit: http://localhost:3000/
```

## File Structure
```
grandiose-serval-todo
    ├── app.js
    ├── authentication
    │   ├── checkUser.js
    │   └── hashPassword.js
    ├── database
    │   ├── db.js
    │   ├── dbUsers.js
    │   ├── dummyData.sql
    │   └── schema.sql
    ├── package.json
    ├── passport.js
    ├── public
    │   ├── images
    │   │   ├── serval1.jpg
    │   │   └── serval2.jpg
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.pug
        ├── index.pug
        ├── layout.pug
        ├── login.pug
        └── signup.pug
 ```
 
__Description__

Complete a to do list app deployed to heroku.

__Context__

Goals
- Learn how front end and back end connect.
- Learn how to dissect a new problem/challenge.
- Go through the whole process of creating and deploying a working app in a week.
- Level the project correctly into stretch zone (Goldilocks Status: Achievement Unlocked)

__Specifications__

__User Stories:__

The App: As a user...
- [x] I can create to do list items.
- [x] I can delete unwanted to do list items.
- [X] I can check items off as completed.
- [x] I can rearrange to do list items. 
- [x] I can edit the text on existing to do's.
- [x] Create the back end using node and express.
- [ ] Deploy the app to heroku. 
- [x] Create a database of to do list items.
- [x] Follow good Git team behaviors (do all your work on branches & submit pull requests for review before merging to master)
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).


__Stretch Goals/Nice to Have's:__
- [ ] JS Lint finds no mistakes
- [ ] I can create mulitple lists of to do's.
- [ ] I can log into my account.
- [x] Write the app using ES6 and deploy using babel.


