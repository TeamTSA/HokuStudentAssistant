import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const courseLocationSchema = new SimpleSchema({
  courseCRN: Number,
  location_id: Number,
});

export const CourseLocations = new Mongo.Collection('courseLocations');

CourseLocations.attachSchema(courseLocationSchema);