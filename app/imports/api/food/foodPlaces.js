import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const FoodPlace = new Mongo.Collection('FoodPlace');

/** Create a schema to constrain the structure of documents associated with this collection. */
const foodPlaceSchema = new SimpleSchema({
  foodPlaceName: String,
  foodPlaceDescription: String,
  foodPlaceType: String,
  foodPlaceLocation: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
FoodPlace.attachSchema(foodPlaceSchema);

/** Make the collection and schema available to other code. */
export { FoodPlace, foodPlaceSchema };
