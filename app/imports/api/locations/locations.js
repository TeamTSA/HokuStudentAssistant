import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Locations = new Mongo.Collection('Locations');

/** Create a schema to constrain the structure of documents associated with this collection. */
const locationSchema = new SimpleSchema({
  locationCode: String, // ex: POST, HOLM
  locationName: String, // location name (ex. Physical Science Building)
  location_x: Number, // location X coordinate
  location_y: Number, // location Y coordinate
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Locations.attachSchema(locationSchema);

/** Make the collection and schema available to other code. */
export { Locations, locationSchema };
