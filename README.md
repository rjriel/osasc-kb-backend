# OCASC Knowledge base backend

This project was created as a part of Random Hacks of Kindness, October 2018 for the Ottawa Council of School Councils.

Goal: to create a more manageable system of interaction between the Ottawa Carleton District School Board, OCASC, and parents in schools.

Current methods of communication between parents, the board, and the OCASC are difficult to manage and outdated. This project hopes to rectify this issue, thereby increasing organizational transparency and bettering general communication.


## End points

### Users
- POST - /auth/login: Creates new login session

- POST - /auth/logout: Logout of sessions

- GET - /knowledge: Get knowledge item

- GET - /knowledge/user: Returns all (un)approved knowledge items for user

- POST - /knowledge: Create new knowledge item

- GET - /knowledge/:id :Get knowledge item based on id

- PUT - /knowledge/:id :Put new variable into knowledge item based on id

- DELETE - /knowledge/:id :Delete knowledge item based on id

### Admin
- GET - /user: Shows aspects of a user

- POST - /user: Creates new user

- GET - /user/:id :Gets user based on id

- PUT - /user/:id :Puts new variable into user based on id

- DELETE - /user/:id :Deletes user based on id

- POST - /picklist/:id :Create a new picklist - see routes/picklist.js

- DELETE - /picklistitem/:id :Delete an entire picklist based on its id - see routes/picklistItems.js

### Other
- GET - /picklist/:id :Returns a picklist based on its id - see routes/picklist.js
