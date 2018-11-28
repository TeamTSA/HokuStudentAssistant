import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


/** Create a Meteor collection. */
const bathroomLocation = new Mongo.Collection('bathroomLocation');

/** Create a schema to constrain the structure of documents associated with this collection. */
const bathroomLocationSchema = new SimpleSchema({
  bathroom_id: Number,
  locationCode: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
bathroomLocation.attachSchema(bathroomLocationSchema);

/** Make the collection and schema available to other code. */
export { bathroomLocation, bathroomLocationSchema };
