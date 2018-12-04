import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


/** Create a Meteor collection. */
const Courses = new Mongo.Collection('Courses');

/** Create a schema to constrain the structure of documents associated with this collection. */
const courseSchema = new SimpleSchema({
  courseCampus: String, // MAN, KAP, MAU, KAU, WIN, WOA, HAW, HON, HIL, LEE
  courseCRN: Number, // CRNs are not unique - different campuses can have same CRN.
  courseName: String, // ex: ICS, ACC, MATH
  courseNumber: String, // ex: 101, 414, 150C
  courseLocationCode: String, // building code; ex: POST, HOLM
  courseRoomNumber: String, // ex: D204, 303
  courseScheduleMon: Boolean,
  courseScheduleTue: Boolean,
  courseScheduleWed: Boolean,
  courseScheduleThur: Boolean,
  courseScheduleFri: Boolean,
  courseStartTime: Number, // no colons, ex: 1145, 0800
  courseScheduleEndTime: Number,
  courseLattitude: Number,
  courseLongitude: Number,
}, { tracker: Tracker });

/** Attach this schema to collection. */
Courses.attachSchema(courseSchema);

/** Make the collection and schema available to other code. */
export { Courses, courseSchema };
