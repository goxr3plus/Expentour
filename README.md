---
<h3 align="center" > Expentour ( <a href="https://expentour.herokuapp.com/" target="_blank">Demo</a>  )</h3>
<p align="center">
<img src="https://user-images.githubusercontent.com/20374208/70062715-3c39a800-15ef-11ea-8eb6-0b6dbace367a.png">
</p>
<p align="center">
<sup>
<b>Calculate Expenses </b>
</sup>
</p>

---

| Add Expense | Expenses
|:-:|:-:|
| ![chrome_2019-12-03_17-04-42](https://user-images.githubusercontent.com/20374208/70062720-4065c580-15ef-11ea-880d-b4f529d79259.png) | ![chrome_2019-12-05_18-16-26](https://user-images.githubusercontent.com/20374208/70253422-da627500-178b-11ea-946b-efaf95688a92.png) |


# How start the application

1 To run the application locally in development you can use :
> npm run start_local

It will actually start `webpack-dev-server` on the port `9000` (which you can configure through `wepack.config.js`) :

> http://127.0.0.1:9000/

2 To run the application on production mode i have used [Heroku](https://dashboard.heroku.com/) .

-----Tutorial on how to deploy in Heroku---------
  
  1. You have to create an account.

  ![image](https://user-images.githubusercontent.com/20374208/71727446-edc43700-2e42-11ea-8852-4555a5824b9a.png)


  2. You have to install [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)

  3. You have to login with heroku cli :

     `heroku login`

  4.  Create app in heroku :

      `heroku create my-app-name-here`

  5.   There you got a new remote for Heroku from now and then you can just use :

        `git push heroku master`  

  6. You can view your app remote url in console or in the Heroku Dashboard :

  ![msedge_2020-01-03_16-04-21](https://user-images.githubusercontent.com/20374208/71727376-b9e91180-2e42-11ea-97a8-bda054567cb0.png)

  7. Visit the site and get excited [Expentour](https://expentour.herokuapp.com/)

     

3 To run the application with tests 

> //TODO not yet ready


## Tutorial for Firebase

As database we are using [Firebase](https://firebase.google.com/) . We are having two seperate databases ,
one for testing and one for development/production .

You can see the credentials at :

`.env.test` and `.env.development` i left intetionally there working keys so you can run your app locally.

How you can get your own firebase api keys for your own project ? 

1. Create Google Account and go to Firebase
2. Add a Project (ex. MyAwesomeProject )
3. For that project add an new web app so you can get keys :

![msedge_2020-01-03_15-44-18](https://user-images.githubusercontent.com/20374208/71726625-5a8a0200-2e40-11ea-8152-930350b8f7a3.png)

4. Then there your have your new credentials which you can add on the `.env.development` or `.env.test` file :

![2020-01-03_15-51-02](https://user-images.githubusercontent.com/20374208/71726803-e308a280-2e40-11ea-899d-43e4c2a85a31.gif)

5. You are ready .



# Technologies used 

> Firebase       (7.6.1)     [Link](https://github.com/firebase/firebase-js-sdk)

> Babel          (7.7.7)     [Link](https://github.com/babel/babel)

> React          (16.12)    [Link](https://github.com/facebook/react)

> Webpack        (4.41)    [Link](https://github.com/webpack/webpack)

> Bootstrap      (4)    [Link](https://react-bootstrap.github.io/getting-started/introduction/)

> SCSS  (6.0.0)     [Link](https://github.com/sass/sass)

