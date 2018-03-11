'use strict';

const ReviewManager = require('./src/ReviewManager.js');
// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'ozvsserverless-gc';  // REPLACE WITH your PROJECT-ID

/**
 * A background Cloud Function to be triggered by create event from Cloud Storage.
 * This function uses {@link ReviewManager} to create entry in data store.
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */
exports.createApprovalEntry = (event, callback) => {
  const file = event.data;

  let reviewManager = new ReviewManager(new Datastore({
    projectId: projectId,
  }));

  reviewManager.addDocument(file).then((data) => {
		callback(null, data);
	}, (error) => {
		callback('Unable to add item.', error);
	});
};
