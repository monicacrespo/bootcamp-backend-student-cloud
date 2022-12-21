# Introduction
The aim of this repository is to deploy in the cloud the Api rest backend application implemented in this [repository](https://github.com/monicacrespo/bootcamp-backend-student-rest-api-rentals) without the authentication/authorization funcionality. 


# Manual deployment the MongoDB to Heroku
Once we have the app deployed in Heroku in API mock mode and it's working, we will deploy the MongoDB in this case in MongoDB Atlas the official cloud site.

1. Create a different application on Heroku, but following the same steps to deploy it.
2. Create a production database in MongoDB Atlas by following the steps listed [here](https://github.com/Lemoncode/bootcamp-backend/tree/main/00-stack-documental/05-cloud/02-deploy/03-mongo-deploy).

    In summary, in the main cluster page, we will see:

    * Configure Network Access. By default, MongoDB Atlas only allows access to configured IPs, let's add a new rule to allow all IPs: 0.0.0.0./0
    * Configure Database Access. Add a new user and copy the user and the autogenerated password. We will use them in the MongoDB Connection URI. Also, configure the "readWrite" specific privilege at "databaseName" it is associated with. Leaving collection blank will grant this role for all collections in the database.
    * See mongo connection URI. Go to "Deployment>Database" and in your cluster click "Connect". A window will pop-up. Choose "Connect your application to your cluster using MongoDB's native drivers". Copy the url listed.
    * See collections and documents.

3. Go to your development app workspace and replace MONGODB_URI env variable in `./back/.env` file with MongoDB Atlas provided value.
    ```
    MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<databaseName>?retryWrites=true&w=majority
    ```
    Note that you need to change the password and add the name of the database.

4. Insert data (different to the mock one) in MongoDB Atlas using a console-runner.

    I have created a console runner called `create-listings.runner.ts` within back>src>console-runners>create-listings.runner.ts, and modify the index.ts in that folder to be able to select it.

    On your back folder's terminal run the following command: `npm run start:console-runners`. And select `create-listings`. 

5. Add config vars on Heroku like this:
  - API_MOCK = false
  - STATIC_FILES_PATH = "./public"
  - CORS_ORIGIN = false
  - AUTH_SECRET = "yourauthsecret"
  - MONGODB_URI = "yourmongodbUri"

  The application just deployed can be found in this [URL](https://rental-manual-deployment-mongo.herokuapp.com/api/listingsAndReviews)

  # AWS S3 storage
  Please see the details in `manual-deployment-mock` branch.