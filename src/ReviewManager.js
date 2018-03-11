'use strict';

class ReviewManager {
	constructor(dataStore) {
		this.dataStore = dataStore;
	}

	addDocument(file) {
		// The kind for the new entity
	  const kind = 'PreApproval';
	  // The Cloud Datastore key for the new entity
	  const taskKey = this.dataStore.key(kind);

	  // Prepares the new entity
	  const task = {
	    key: taskKey,
	    data: {
	      description: file.name,
	    },
	  };

	  // Saves the entity
	  return this.dataStore
	    .save(task);
	}
}

module.exports = ReviewManager;
