### 1. Saving the Model in Google Cloud Storage
- create bucket
- upload model tf.js to bucket
- The model url is called by the .env file
### 2. Building Web Service
- clone folder Cloud Computing
- initialize project and install libraries
```
npm init --y
npm install @google-cloud/firestore @hapi/hapi @tensorflow/tfjs-node dotenv node-fetch
npm install nodemon --save-dev
```
- run server
```
npm run start:dev
```
### 3. Application Testing Using Postman in Local
- POST http://localhost:3000/predict
- in the Body section of the data form, key = image, value = upload image
- SEND
- display the result in JSON
### 4. Deploy to Google Cloud Run
- build Dockerfile
- build docker image
```
docker build -t gcr.io/capstone-buahsayur/debusa-app:latest .
```
- testing in local
```
docker run -p 3000:3000 -e PORT=3000 gcr.io/capstone-buahsayur/debusa-app:latest
```
- push image to Artifact Registry
```
docker push gcr.io/capstone-buahsayur/debusa-app:latest
```
- go to Cloud Run in GCP and create service with it
