import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const userSchema = new SimpleSchema({
  user_id: Number,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

export const Users = new Mongo.Collection('users');

Users.attachSchema(userSchema);
