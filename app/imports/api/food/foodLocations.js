import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const FoodLocations = new Mongo.Collection('FoodLocations');

/** Create a schema to constrain the structure of documents associated with this collection. */
const foodLocationSchema = new SimpleSchema({
  foodPlace_id: Number,
  locationCode: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
FoodLocations.attachSchema(foodLocationSchema);

/** Make the collection and schema available to other code. */
export { FoodLocations, foodLocationSchema };
