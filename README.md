# URL Shortener
A URL Shortener Application build with React JS, Python Flask, and Firebase Data Base.

## Project Citation
1. The project idea has been gathered from a Software Engineer, UmaAbu, through his Full Stack Coding Project Ideas
2. The codes, for the sections of the Projects exists in Git Hub, but I didn't clone it directly. Rather learned the tools and then implemented them.


The project is composed of two folders, client and server

## client
This is single page react app written with bootstrap that takes the long URL from a user, stores it in a database (firebase database) and gives the user a generated
mini url. 

### Dependencies
1. Firebase Project Account
2. Firebase Database in Project Account
3. Firebase config in index.js line 12. (The config is deleted for security ppurpose, it can be found under the Firebase Project,  Project Overview > Project settings > General > Your Apps)

### Running client Locally
1. `npm install` To install dependencies (Be sure you have a firebase account)
2. `npm start`

## server
This is a python flask web server that listens for calls made with the generated URL, goes to the database, fetches the long URL then redirects the user to the
long URLS page.

### Dependencies
1. Firebase Project Account
2. Firebase Database in Project Account
3. Firebase service account json key file (ServiceAccountKey.json) in server/app/main.py line 12 (Regenarate it, following, Project Overview > Project settings > Service accounts > Python > Generate new private key)
4. Firebase Database URL in server/app/main.py line 11 (the databaseURL can be found in, Realtime Database > Data, The URL you see at the center of the page, "https://......firebaseio.com/")

### Running Server Locally
1. Create a virtual environment in the server folder (python3 -m venv venv); if not created/existed
2. Run `pip install -r requirements.txt` in the terminal, to install all the requirements required to run the server
3. Activate virtual environment (`source venv/bin/activate` for mac and `venv/Scripts/activate` for windows)
4. Besure you have the ServiceAccountKey.json in server. 
5. `python wsgi.py`

The flask app is also set up to run the production version the react app. The build should be locatedin the app folder for this to work!

### To get the whole system running after running "Client" and "Sever" locally
1. Run the "Client" locally, shorten a url in the "Client" site, following the link
2. Run the "Server" locally and parallely on the other terminal, then copy the link in that terminal
3. Paste the link copied from the Server's in a browser, having the last portion of the shortened URL or the preferred alias, following the link after the "/". 
4. The link will redirect to the main URL that has been shortened

## So many hassels woulnd't be required, if I would have deployed it to a clouds like Heroku or Azure. However, to avoid the cost, I choose not to deploy it. If it was deployed, the short-url generated would have rediercted us to the Web page of the Long URL.

Happy coding!
