import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const bathroomLocationSchema = new SimpleSchema ({
  bathroom_id: Number,
  location_id: Number,
});

export const BathroomLocations = new Mongo.Collection('bathroomLocations');

BathroomLocations.attachSchema(bathroomLocationSchema);