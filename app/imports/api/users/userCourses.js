import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


/** Create a Meteor collection. */
const UserCourses = new Mongo.Collection('UserCourses');

/** Create a schema to constrain the structure of documents associated with this collection. */
const userCourseSchema = new SimpleSchema({
  username: String,
  courses: { type: Array }, // Array of course CRNs that the user is taking.
  'courses.$': { type: Number } // Each course CRN has the type Number.
}, { tracker: Tracker });

/** Attach this schema to the collection. */
UserCourses.attachSchema(userCourseSchema);

/** Make the collection and schema available to other code. */
export { UserCourses, userCourseSchema };
