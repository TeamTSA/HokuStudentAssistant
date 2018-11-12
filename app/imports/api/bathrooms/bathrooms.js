import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//bathroom ID
//men or women's
//name of bathroom (ex. Keller Hall 1st floor)

const bathroomSchema = new SimpleSchema ({
  bathroom_id: Number,
  gender: String, // men or women
  name: String, // name of bathroom (ex. Keller Hall 1st floor)
});

export const Bathrooms = new Mongo.Collection('bathrooms');

Bathrooms.attachSchema(bathroomSchema);