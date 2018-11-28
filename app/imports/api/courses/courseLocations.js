import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const CourseLocations = new Mongo.Collection('CourseLocations');

/** Create a schema to constrain the structure of documents associated with this collection. */
const courseLocationSchema = new SimpleSchema({
  courseCampus: String, // MAN, KAP, MAU, KAU, WIN, WOA, HAW, HON, HIL, LEE
  courseCRN: Number, // CRNs are not unique - different campuses can have same CRN.
  locationCode: String, // Building code - ex: POST, HOLM
}, { tracker: Tracker });

/** Attach this schema to collection. */
CourseLocations.attachSchema(courseLocationSchema);

/** Make the collection and schema available to other code. */
export { CourseLocations, courseLocationSchema };
