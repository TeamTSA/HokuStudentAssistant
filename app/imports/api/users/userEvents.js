import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//user ID
//event ID

const userEventSchema = new SimpleSchema({
  user_id: Number,
  event_id: Number,
});

export const UserEvents = new Mongo.Collection('userEvents');

UserEvents.attachSchema(userEventSchema);