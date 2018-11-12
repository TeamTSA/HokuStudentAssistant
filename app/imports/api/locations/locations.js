import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const locationSchema = new SimpleSchema({
  locationCode: String, // ex: POST, HOLM
  locationName: String, // location name (ex. Physical Science Building)
  location_x: Number, // location X coordinate
  location_y: Number, // location Y coordinate
});

export const Locations = new Mongo.Collection('locations');

Locations.attachSchema(locationSchema);
