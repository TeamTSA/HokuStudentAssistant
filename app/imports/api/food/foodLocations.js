import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const foodLocationSchema = new SimpleSchema({
  foodPlace_id: Number,
  locationCode: String,
});

export const Events = new Mongo.Collection('foodLocations');

Events.attachSchema(foodLocationSchema);