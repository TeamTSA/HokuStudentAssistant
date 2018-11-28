import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Create a Meteor collection. */
const Events = new Mongo.Collection('Events');

/** Create a schema to constrain the structure of documents associated with this collection. */
const EventsSchema = new SimpleSchema({
  event_id: Number,
  eventName: String,
  eventDescription: String,
  eventStartDate: Date,
  eventEndDate: Date,
  eventType: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Events.attachSchema(eventSchema);

/** Make the collection and schema available to other code. */
export { Events, EventsSchema };
