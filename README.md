#Makers Academy Week 9: Makerthon Week (Sports Ladder)
[![Test Coverage](https://codeclimate.com/github/ralake/sports_ladder/badges/coverage.svg)](https://codeclimate.com/github/ralake/sports_ladder)
[![Code Climate](https://codeclimate.com/github/ralake/sports_ladder/badges/gpa.svg)](https://codeclimate.com/github/ralake/sports_ladder)

Visit the project [here](http://sportsladder.herokuapp.com/).

Image to go here. 
    
| Languages | Technologies  | Testing Frameworks| Misc
| :-------------------------------------------- |:--------------|:-----------|:----|
| Javascript| Mongodb       | Mocha             | Grunt |
| HTML      | Expressjs     | Mocha-Casperjs    | Trello |
| CSS       | Angularjs     |
|           | Nodejs        |


###Brief

This is a week long project. Our cohort is split into groups and given a project to complete, and present on
Friday. Our team consists of: Alex Blease, Ben Conway, Rich Lake and Nick Dyer. Our teams breifing is to build
a sports ladder tournament app. 

Technologies are not specified within the brief. Technologies are to be decided by the teams based on the merits of
each technology for the project they have been given. 

insert image MVP

###Version 0: Planning Stages

In our teams initial scrum, the rules of a ladder tournament were discussed, in order to define the boundaries of
the app. 

Some initial features were discussed, and some scope for extension and imporvement for those basic features. User stories were written for each of these features and catagorised by MVP stages, and published on [TRELLO](https://trello.com/b/Xf9OmLhD/table-tennis-ladr). Additionally a versions diagram was made to create versions of the app ranging from basic to 
advanced features. Versions and their features shown below:

![MVP Diagram](https://pbs.twimg.com/media/BzUBDdhCEAAdmsp.jpg)

___________________________________________________________________
#####Version 1: Skateboard (green)

+ Feature 1: Users can see the ladder   
+ Feature 2: Users can add themselves to the ladder  
+ Feature 3: Users can swap positions on the ladder

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

#####Version 1: Skateboard

**Technology**                  

We have decided to use a MEAN stack framework as the project looks like
it would benefit from being an SPA. It will also give all team members the 
opportunity to work on a new framework. 

**Testing**               

Our initial understanding of JS frameworks, led us to believe that testing
would be challenging. Based on research in version 0, we decided upon the 
following testing suites. Acceptance Testing: Mocha, CasperJS and Chai; 
Unit Testing: Mocha, Should; API Testing: Hippie; Our test suites were 
automated using Grunt. 

**Execution**

- [x] Building initial framework, write first feature test (viewing the ladder).
- [x] Passing first test and add second feature test (adding players).
- [x] Add MongoDB and Angular for second test. Add third feature test (viewing ranks).
- [x] Passing third test. Update database model, controller and view. Add fourth test (swapping players in the ladder).
- [x] Passing fourth test, update controller and view. 
- [x] Deploy to Heroku (Version 1.0 deployed).

At this point we opted to improve our code structure and user interface before 
proceeding to Version 2's additional features. This work consisted of the
following:

- [x] Refine user control flow using dropdown box instead of test input.
- [ ] Refactoring of server-side logic from controller into model. 
- [x] Improve aesthetic of the frontend with CSS. 

####Lessons Learned

- Using a immature framework comes with many difficulties:
  - Poor documentation and other resources
  - Conflicting opinion on best practices within the community
  - Lack of TDD/BDD MEAN Stack developers and examples
- Working in an unfamiliar framework applies pressure to a team's resilience.
- It is easy to get drawn into a particular issue and lose focus on the big
  picture.
- Using Bootstrap is nice to start with, but should probably be deleted when
  you design the UI.

