<H1 align ="center" > MERN BLOG  </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the api on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install frontend-side dependencies)
$ npm start (to start the frontend)
```

In the second terminal

- cd api and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials
- nodemon index.js to start backend
```
#  ---  Config.env  ---

MONGO_URI =
```

# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```

##  Key Features

- User registration and login
- Post searching  
- CRUD operations (Post create, read, update and delete)
- Upload user ımages 


<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers 
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 
 

![1](https://user-images.githubusercontent.com/111676859/226197211-8abc5de5-7659-4811-b28a-ef885de64267.png)
---- -
![2](https://user-images.githubusercontent.com/111676859/226197288-1f0cf951-dd30-464f-b70a-10c449fe33b4.png)
--- - 
![3](https://user-images.githubusercontent.com/111676859/226197295-e9525dd5-1346-4951-a1c8-d5620166d7aa.png)
--- - 
![4](https://user-images.githubusercontent.com/111676859/226197298-ca0f5b6e-f523-4040-98a8-b92a17bbe22e.png)
--- - 
![5](https://user-images.githubusercontent.com/111676859/226197303-5d8a1a39-07f7-409f-8614-12d0ca0b2836.png)
--- - 
![6](https://user-images.githubusercontent.com/111676859/226197307-1d95a1f6-147a-4edb-b899-449c90c07713.png)
--- - 
![7](https://user-images.githubusercontent.com/111676859/226197312-b7bf6ae6-2c05-4b1d-bc25-4262af3f04f2.png)
--- - 
![8](https://user-images.githubusercontent.com/111676859/226197316-eb387e87-9690-44ca-b138-f15b03bed7d4.png)
--- - 
![9](https://user-images.githubusercontent.com/111676859/226197324-dcbad05b-2283-4ef5-bae9-2da8d09d55c9.png)
--- - 
![10](https://user-images.githubusercontent.com/111676859/226197329-025091a0-642b-4d68-ac4e-f365e0e78e82.png)
--- - 
![11](https://user-images.githubusercontent.com/111676859/226197338-3e530bc6-e7bf-4e4a-9284-165f85be47d2.png)

## Author
- Github: [yashmudgal](https://github.com/Mudgal2001)
- Email: [yashmudgalprep2001@gmail.com](mailto:berthutapea@gmail.com)

