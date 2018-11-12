import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//user ID
//course CRN

const userCourseSchema = new SimpleSchema({
  user_id: Number,
  courseCRN: Number,
});

export const UserCourses = new Mongo.Collection('userCourses');

UserCourses.attachSchema(userCourseSchema);