import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


/** Create a Meteor collection. */
const eventLocations = new Mongo.Collection('eventLocations');

/** Create a schema to constrain the structure of documents associated with this collection. */
const eventLocationSchema = new SimpleSchema({
  event_id: Number,
  locationCode: String, // ex POST, HOLM
}, { tracker: Tracker });

/** Attach this schema to the collection. */
eventLocations.attachSchema(eventLocationSchema);

/** Make the collection and schema available to other code. */
export { eventLocations, eventLocationSchema };
