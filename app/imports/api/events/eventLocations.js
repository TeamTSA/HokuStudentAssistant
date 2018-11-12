import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const eventLocationSchema = new SimpleSchema ({
  event_id: Number,
  locationCode: String, // ex: POST, HOLM
});

export const EventLocations = new Mongo.Collection('eventLocations');

EventLocations.attachSchema(eventLocationSchema);