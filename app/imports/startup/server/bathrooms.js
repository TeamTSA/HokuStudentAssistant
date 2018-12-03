import { Bathrooms } from '../../api/bathrooms/bathrooms.js';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.username} (${data.courseCRN})`);
  Bathrooms.insert(data);
}

/** Initialize the collection if empty. */
if (Bathrooms.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Bathrooms', function publish() {
  if (this.userId) {
    return Bathrooms.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('BathroomsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Bathrooms.find();
  }
  return this.ready();
});
