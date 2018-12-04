import { Meteor } from 'meteor/meteor';
import { Courses } from '../../api/courses/courses';
import { Locations } from '../../api/locations/locations';
import { Bathrooms } from '../../api/bathrooms/bathrooms';
import { FoodPlace } from '../../api/food/foodPlaces';


/**
 * Generic function used to load definitions from the settings.*.json file.
 * @param name The field in the settings file containing the entity definitions.
 * @param collection The collection whose define method will be called on each definition.
 */
function initEntity(name, collection) {
  const definitions = Meteor.settings.initialEntities[name] || [];
  if (collection.find().count() === 0) {
    console.log(`Initializing ${definitions.length} ${name}`);
    definitions.map(definition => collection.insert(definition));
  }
}

//here is an edit to restat server

/**
 * Define entities at system startup.  Locations must be defined first
 */
Meteor.startup(() => {
  if (Meteor.settings.initialEntities && Meteor.settings.initialEntities.enabled) {
    //initEntity('Locations', Locations);
    initEntity('Courses', Courses);
    //initEntity('Bathrooms', Bathrooms);
    //initEntity('FoodPlaces', FoodPlace)
  }
});