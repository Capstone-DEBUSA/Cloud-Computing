### 1. Saving the model in google cloud storage
- create bucket
- upload model tf.js to bucket
- The model url is called by the .env file
### 2. Building Web Service
- clone folder Cloud Computing
- initialize project and install libraries
```
npm init --y
npm install @hapi/hapi @tensorflow/tfjs-node@4.14.0 @google-cloud/firestore dotenv
npm install nodemon --save-dev
```
- run server
```
npm run start:dev
```
### 3. Application Testing Using Postman in local
- POST http://0.0.0.0:3000/predict
- in the Body section of the data form, key = image, value = upload image
- SEND
- display the result in JSON
