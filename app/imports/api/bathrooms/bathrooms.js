import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


//bathroom ID
//men or women's
//name of bathroom (ex. Keller Hall 1st floor)

/** Create a Meteor collection. */
const Bathrooms = new Mongo.Collection('Bathrooms');

/** Create a schema to constrain the structure of documents associated with this collection. */
const bathroomSchema = new SimpleSchema({
  bathroom_id: Number,
  gender: String, //men or womens
  name: String, // name of bathroom (ex. Keller Hall 1st floor)
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Bathrooms.attachSchema(bathroomSchema);

/** Make the collection and schema available to other code. */
export { Bathrooms, bathroomSchema };
