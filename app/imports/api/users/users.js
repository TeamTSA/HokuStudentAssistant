import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Users = new Mongo.Collection('Users');

/** Create a schema to constrain the structure of documents associated with this collection. */
const userSchema = new SimpleSchema({
  user_id: Number,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  courses: { type: Array }, // Array of course CRNs that the user is taking.
  'courses.$': { type: Number } // Each course CRN has the type Number.
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Users.attachSchema(userSchema);

/** Make the collection and schema available to other code. */
export { Users, userSchema };
