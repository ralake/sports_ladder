#Makers Academy Week 9: Makerthon Week (Sports Ladder)
[![Test Coverage](https://codeclimate.com/github/ralake/sports_ladder/badges/coverage.svg)](https://codeclimate.com/github/ralake/sports_ladder)
[![Code Climate](https://codeclimate.com/github/ralake/sports_ladder/badges/gpa.svg)](https://codeclimate.com/github/ralake/sports_ladder)

![pingponggif](http://blog.uberpong.com/wp-content/uploads/2012/10/Forrest-Gump-ping-pong-funny.gif)
    
| Languages | Technologies  | Testing Tools| Misc
| :---------------------------------------------- |:----------------------------------------------------------------|:-----------|:----|
| Javascript| [Mongodb](http://www.mongodb.org/)  | [Mocha](http://mochajs.org/)                                    | [Grunt](http://gruntjs.com/) |
| HTML      | [Expressjs](http://expressjs.com/)  | [Mocha-Casperjs](https://www.npmjs.com/package/mocha-casperjs)  | [Trello](https://trello.com/b/Xf9OmLhD/table-tennis-ladr) |
| CSS       | [Angularjs](https://angularjs.org/) | [Hippie](https://github.com/vesln/hippie)                       |
|           | [Nodejs](http://nodejs.org/)        | [Chai](http://chaijs.com/)                                      | 
|           |                                     | [Karma](http://karma-runner.github.io/0.12/index.html);


###Brief

Our Cohort has been split into groups and each given a project to complete with a presentation on
Friday. Our team consists of: [Alex Blease](https://github.com/ablease), [Ben Conway](https://github.com/Benc93), [Rich Lake](https://github.com/ralake) and [Nick Dyer](https://github.com/nickbdyer). The team's breifing is to "*build
a sports ladder tournament app.*"

Technologies are not specified within the brief - they must be decided upon by the teams based on the merits of
each technology for the project they have been given. 
     
###Version 0: Planning Stages
      
![MVP Diagram](https://pbs.twimg.com/media/BzUBDdhCEAAdmsp.jpg)
     
In our team's initial scrum, the rules of a ladder tournament were discussed, in order to define the boundaries of
the app. 
     
**Technology:** We have decided to use a MEAN (MongoDB, Express, Angular, Node) stack framework as MEAN stacks are known to lend themselves well to Single Page Applications(SPA's). Coincidentally, it will also give all team members the opportunity to work on a new framework and all the challenges that come with it. 
     
**Testing:** Our initial understanding of JS frameworks, led us to believe that testing would be challenging. Based on research in version 0, we decided upon the following testing suites: 
+ **Acceptance Testing**:  [Mocha](http://mochajs.org/); [Mocha-Casperjs](https://www.npmjs.com/package/mocha-casperjs) & [Chai](http://chaijs.com/); 
+ **Unit Testing**: [Mocha](http://mochajs.org/) & [Chai](http://chaijs.com/)
  & [Karma](http://karma-runner.github.io/0.12/index.html);
+ **API Testing**: [Hippie](https://github.com/vesln/hippie) 
      
Our test suites were automated using [Grunt](http://gruntjs.com/). 
     
Some initial features were agreed upon, and then some scope for extension/improvement of those basic features. **User stories** were written for each of these features and catagorised into versions that matched MVP stages. This was all wrapped into [Kanban Cards](http://en.wikipedia.org/wiki/Kanban_(development)) and published on [TRELLO](https://trello.com/b/Xf9OmLhD/table-tennis-ladr). 
     
This forms a solid framework on which the rest of the project can be built against. Each planned version and its features is summarised below:
      
___________________________________________________________________
#####Version 1: Skateboard (green)

+ Feature 1: Users can see the ladder   
+ Feature 2: Users can add themselves to the ladder  
+ Feature 3: Users can swap positions on the ladder

#####Version 1.5: Refactoring/Increase Angular Responsibility 

After presenting our product V1, we decided to continue to refactor the code,
in order to assist with testing. The community surrounding the MEAN stack, was
and is still undecided on the best structure for an app, not only on where
responsibilities should lie, but even on folder structure. We noted that our V1
product was not as abstracted as we thought appropriate, and in attending to
that issue realised that AngularJS could take a larger part in the logic
handling.

Our V1.5 product now places the responsibilty for the majority of the
logic with the Angular controllers, and the server side just acts to host our
API. Due to the fact that a chunk of our logic has moved to the client side, we
have introduced Karma as a testing framework.

In switching to a more active Angular side, we have also taken advantage of
Angular's $resource which allows us to render changes to the ladder
immediately, and have AJAX requests happen in the background, this has
considerably improved the user experience.

#####Version 2: Scooter (yellow)

+ Feature 4: Users can input game results to swap positions   
+ Feature 5: Users can only challenge other users within a specified range

#####Version 3: Bike (red)

+ Feature 6: Users can Sign in and Sign out of the sports ladder app  
+ Feature 7: Users can delete themeselves from the ladder

#####Version 4: Motorbike (purple)

+ Feature 8: Users can view the rules of the ladder  
+ Feature 9: Updated css from basic spec  
+ Feature 10: Users can view match history (scores, games played)
______________________________________________________________________________________
     
####Executing Version 1
      
**Execution**
     
- [x] Building initial framework, write first feature test (viewing the ladder).
- [x] Passing first test and add second feature test (adding players).
- [x] Add MongoDB and Angular for second test. Add third feature test (viewing ranks).
- [x] Passing third test. Update database model, controller and view. Add fourth test (swapping players in the ladder).
- [x] Passing fourth test, update controller and view. 
- [x] Deploy to Heroku (Version 1.0 deployed).
     
At this point we opted to improve our code structure and user interface before proceeding to Version 2's additional features. This work consisted of the following:
     
- [x] Refine user control flow using dropdown box instead of test input.
- [x] Major refactoring of server-side logic from controller into model. 
- [x] Improve aesthetic of the frontend with CSS.
     
This was the place we have reached at the point we present out projects to the rest of the Cohort. The app is not laden with features, but crucially we have a solid MVP that can be built upon easily. The code is clean, and we have a consistency in **testing coverage** that we have not observed in example MEAN stacks and tutorials on this framework. 
     
The presented product: 
     
![sportsladder herokuapp com](https://cloud.githubusercontent.com/assets/9297921/5692379/7d7723c8-98eb-11e4-8714-7b0709123e91.jpg)

####Lessons Learned

- Using an immature framework comes with some difficulties:
  - Poor documentation and lack of relevent online resources (Stackover Flow threads, tutorials etc). 
  - Conflicting opinions on best practices within the community.
  - Lack of TDD/BDD MEAN Stack developers and examples. 
- Working in an unfamiliar framework applies pressure to a team's resilience (snags are frequent and take longer to clear).
- It is easy to get drawn into a particular issue and lose focus on the big picture.
- Using Bootstrap is nice to start with, but should probably be deleted when you design the UI.

**END**

