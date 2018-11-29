import { UserCourses } from '../../api/users/userCourses.js';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.username} (${data.courseCRN})`);
  UserCourses.insert(data);
}

/** Initialize the collection if empty. */
if (UserCourses.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('UserCourses', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return UserCourses.find({ username: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('UserProfilesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserCourses.find();
  }
  return this.ready();
});
