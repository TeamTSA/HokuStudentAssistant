import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const courseLocationSchema = new SimpleSchema({
  courseCampus: String, // MAN, KAP, MAU, KAU, WIN, WOA, HAW, HON, HIL, LEE
  courseCRN: Number, // CRNs are not unique - different campuses can have same CRN.
  locationCode: String, // Building code - ex: POST, HOLM
});

export const CourseLocations = new Mongo.Collection('courseLocations');

CourseLocations.attachSchema(courseLocationSchema);