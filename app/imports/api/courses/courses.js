import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

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
});

export const Courses = new Mongo.Collection('courses');

Courses.attachSchema(courseSchema);