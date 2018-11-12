import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const foodPlaceSchema = new SimpleSchema({
  foodPlace_id: Number,
  foodPlaceName: String,
  foodPlaceDescription: String,
  foodPlaceType: String,
});

export const Events = new Mongo.Collection('foodPlaces');

Events.attachSchema(foodPlaceSchema);