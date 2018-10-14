# OCASC Knowledge base backend

This project was created as a part of Random Hacks of Kindness, October 2018 for the Ottawa Council of School Councils.

Goal: to create a more manageable system of interaction between the Ottawa Carleton District School Board, OCASC, and parents in schools.

Current methods of communication between parents, the board, and the OCASC are difficult to manage and outdated. This project hopes to rectify this issue, thereby increasing organizational transparency and bettering general communication.


## End points

### Users
Creates new login session
POST - /login

Logout of sessions
POST - /logout

Get knowledge item
GET - /knowledge

Create new knowledge item
POST - /knowledge

Get knowledge item based on id
GET - /knowledge/:id

Put new variable into knowledge item based on id
PUT - /knowledge/:id

Delete knowledge item based on id
DELETE - /knowledge/:id

### Admin
Shows aspects of a user
GET - /user

Creates new user
POST - /user

Gets user based on id
GET - /user/:id

Puts new variable into user based on id
PUT - /user/:id

Deletes user based on id
DELETE - /user/:id

Create a new picklist - see routes/picklist.js
POST - /picklist/:id

Delete an entire picklist based on its id - see routes/picklistItems.js
DELETE - /picklistitem/:id

### Other
Returns a picklist based on its id - see routes/picklist.js
GET - /picklist/:id
