 ### [![AlexKent](https://user-images.githubusercontent.com/20374208/75432997-f5422100-5957-11ea-87a2-164eb98d83ef.png)](https://www.minepi.com/AlexKent) Support me joining PI Network app with invitation code [AlexKent](https://www.minepi.com/AlexKent) [![AlexKent](https://user-images.githubusercontent.com/20374208/75432997-f5422100-5957-11ea-87a2-164eb98d83ef.png)](https://www.minepi.com/AlexKent)   
  
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
   
| Expenses | Add Expense        
|:-:|:-:|   
| ![msedge_2020-01-03_16-18-43](https://user-images.githubusercontent.com/20374208/71728053-c40c0f80-2e44-11ea-8715-8e5d2a68509f.png) | ![msedge_2020-01-03_16-18-53](https://user-images.githubusercontent.com/20374208/71728054-c53d3c80-2e44-11ea-8ac3-f397cdbc240c.png)
 |
    
   
# How start the application          
     
1 To run the application locally in development you can use :      
> npm run start_local   

It will actually start `webpack-dev-server` on the port `9000` (which you can convfigure through `wepack.config.js`) :
 
> http://127.0.0.1:9000/

2 To run the application on production mode i have used [Heroku](https://dashboard.heroku.com/) .

## Tutorial on how to deploy in Heroku  
  
  1. You have to create an account. 

  ![image](https://user-images.githubusercontent.com/20374208/71727446-edc43700-2e42-11ea-8852-4555a5824b9a.png)


  2. You have to install [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)

  3. You have to login with heroku cli :

     `heroku login`

  4.  Create app in heroku :

      `heroku create my-app-name-here`

  5.  Set Heroku Environment keys (copy pasta from `.env.development`) comma separated us you can see in the picture below :


     ```  
        //Pattern
        heroku config:set KEY=VALUE 
     ```
![Code_2020-01-03_16-25-13](https://user-images.githubusercontent.com/20374208/71728456-ccb11580-2e45-11ea-8f6d-991ee22b9cd2.png)


  6.   There you got a new remote for Heroku from now and then you can just use :

        `git push heroku master`  

  7. You can view your app remote url in console or in the Heroku Dashboard :

  ![msedge_2020-01-03_16-04-21](https://user-images.githubusercontent.com/20374208/71727376-b9e91180-2e42-11ea-97a8-bda054567cb0.png)

  8. Visit the site and get excited [Expentour](https://expentour.herokuapp.com/)

     

3 To run the application with tests 

> //TODO not yet ready


## Tutorial for Firebase

As database we are using [Firebase](https://firebase.google.com/) . We are having two seperate databases ,
one for [`testing`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.test#L9) and one for [`development/production`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.development#L8) .

![image](https://user-images.githubusercontent.com/20374208/71729134-a1c7c100-2e47-11ea-92b1-a266644c5b5f.png)


You can see the credentials at : [`.env.development`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.development#L8) and [`.env.test`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.test#L9)  i left intetionally there working keys so you can run your app locally.

How you can get your own firebase api keys for your own project ? 

1. Create Google Account and go to Firebase
2. Add a Project (ex. MyAwesomeProject )
3. For that project add an new web app so you can get keys :

![msedge_2020-01-03_15-44-18](https://user-images.githubusercontent.com/20374208/71726625-5a8a0200-2e40-11ea-8152-930350b8f7a3.png)

4. Then there your have your new credentials which you can add on the [`.env.development`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.development#L8) or [`.env.test`](https://github.com/goxr3plus/Expentour/blob/0ecc5a62b107885220f4052a0acabc1f840cdc7a/.env.test#L9) file :

![2020-01-03_15-51-02](https://user-images.githubusercontent.com/20374208/71726803-e308a280-2e40-11ea-899d-43e4c2a85a31.gif)

5. You are ready .



# Technologies used 

> Firebase       (7.6.1)     [Link](https://github.com/firebase/firebase-js-sdk)

> Babel          (7.8.1)     [Link](https://github.com/babel/babel)

> React          (16.12)    [Link](https://github.com/facebook/react)

> Webpack        (4.41.5)    [Link](https://github.com/webpack/webpack)

> Bootstrap      (4)    [Link](https://react-bootstrap.github.io/getting-started/introduction/)

> SCSS  (6.0.0)     [Link](https://github.com/sass/sass)

