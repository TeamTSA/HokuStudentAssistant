import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const courseSchema = new SimpleSchema({
  courseCRN: Number, // ID number for courses
  courseAbbrev: String, // like ICS 414
  courseLongName: String, // like Software Engineering II
});

export const Courses = new Mongo.Collection('courses');

Courses.attachSchema(courseSchema);