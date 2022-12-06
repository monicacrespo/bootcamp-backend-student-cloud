# Introduction
The aim of this repository is to deploy in the cloud the Api rest backend application implemented in this [repository](https://github.com/monicacrespo/bootcamp-backend-student-rest-api-rentals) without the authentication/authorization funcionality. 

Crear una aplicación Heroku diferente.
Aqui ya directamente se puede conectar con el MongoDB Atlas creado en el paso anterior.
Crear todos los ficheros necesarios para poder realizar un despliegue automático.
Dejar en el readme la URL de la aplicación desplegada.


# Automatic deployment to Heroku with production data in MongoDB Atlas
Once we have got the app deployed in Heroku with a production database in MongoDB Atlas and it's working, we will use Github Actions as pipeline to deploy the app automatically to Heroku.

1. Create a different application on Heroku website.
 On your back folder's terminal, follow these steps:
Download Heroku cli
Credentials to login in Heroku

2. 
Build Docker image : `docker build -t rental-store-app:1 .`

Note that use multi-stage builds to decrease this size, with only the necessary info


Create an auth token to login inside Github Action job:
`heroku authorizations:create -d bootcamp-backend-student-cloud`
Add Auth token to git repository secrets:
On your github repository, settings/secrets/actions

We will add HEROKU_APP_NAME as secret too:
We need Heroku app name as identifier Heroku deployment.

create the Github Actions:

./.github/workflows/cd.yml


Push image to internal Heroku registry.


`docker run --name rental-container --rm -d -p 3002:3001 rental-store-app:1`

The application just deployed can be found in this [URL](https://rental-manual-deployment-mongo.herokuapp.com/api/listingsAndReviews)
