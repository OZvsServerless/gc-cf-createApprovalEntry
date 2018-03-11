# gc-cf-createApprovalEntry
This codebase is created to experiment with G Cloud's Cloud Functions. The goal is to create a background cloud function which is triggered by bucket events. 

## Setup
- Create or Select the Google Platform Project.
- Install Gcloud sdk (details see https://cloud.google.com/sdk/docs/)
- Enable Billing and Cloud Function API (if you haven't already) from Console.
- Install "beta" component for gcloud sdk (this is important to allow deployment of function. Note: Cloud Functions are in beta at the time of development). Run the following command
  gcloud components update &&
  gcloud components install beta

- Install NodeJS and NPM
Note: Setup a service account to access data store. (details see https://cloud.google.com/datastore/docs/reference/libraries)
- Clone the repo
- Run "npm install"

## Deploy
Run the following command to deploy the function. Since this is a background function, we also need to mention the trigger source and event. 

gcloud beta functions deploy createApprovalEntry --trigger-resource [YOUR_TRIGGER_BUCKET_NAME] --trigger-event google.storage.object.finalize

## Unit Tests
Run "npm test" to execute unit tests

## Functional Tests
See https://cloud.google.com/functions/docs/emulator
