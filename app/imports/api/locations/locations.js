import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const locationSchema = new SimpleSchema({
  location_id: Number,
  location_x: Number, // location X coordinate
  location_y: Number, // location Y coordinate
  locationName: String, // location name (ex. Keller 201)
});

export const Locations = new Mongo.Collection('locations');

Locations.attachSchema(locationSchema);
