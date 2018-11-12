import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const eventSchema = new SimpleSchema({
  event_id: Number,
  eventName: String,
  eventDescription: String,
  eventStartDate: Date,
  eventEndDate: Date,
  eventType: String, // ex. Athletic, fairs, etc.
});

export const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);