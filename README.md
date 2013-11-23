# Accenture Digital Signage Frontend

## Prerequisites
* [Git](http://git-scm.com/downloads)
* [NodeJS and npm](http://nodejs.org/download/)
* [Heroku Toolbelt](https://toolbelt.heroku.com/)
* [A Heroku user account](https://devcenter.heroku.com/articles/quickstart) (see step 1,2 and 3)


## Getting started
```
git clone https://github.com/ismarslomic/ads-cms-frontend.git
cd ads-cms-frontend
heroku login // only first time
git clone git@heroku.com:ads-cms-frontend.git distHeroku
npm install
grunt build:heroku
cd distHeroku
node server
```

You should be able to see the ADS CMS by open a web browser and go to [http://localhost:5000/](http://localhost:5000/)

## Grunt tasks
All of these tasks should be ran from the root folder of the project.
* ``` grunt build:heroku ``` - builds and optimization of the code in app folder. Destination folder is distHeroku
* ``` grunt deploy:heroku ``` - build and deploy of distHeroku folder to Heroku application [ads-cms-frontend](http://ads-cms-frontend.herokuapp.com/)
* ``` grunt run:heroku ``` - scales the Heroku application to 1 dyno and runs it in the web browser
* ``` grunt stop:heroku ``` - scales the Heroku application down to 0 dyno and stops the application

## Backend
* https://github.com/ismarslomic/ads-cms-backend

## Heroku
* Heroku application: http://ads-cms-frontend.herokuapp.com/
* Heroku GIT: git@heroku.com:ads-cms-frontend.git
