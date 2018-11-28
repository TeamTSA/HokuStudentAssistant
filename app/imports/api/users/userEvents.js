import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

//user ID
//event ID

/** Create a Meteor collection. */
const UserEvents = new Mongo.Collection('UserEvents');

/** Create a schema to constrain the structure of documents associated with this collection. */
const userEventSchema = new SimpleSchema({
  user_id: Number,
  event_id: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
UserEvents.attachSchema(userEventSchema);

/** Make the collection and schema available to other code. */
export { UserEvents, userEventSchema };
