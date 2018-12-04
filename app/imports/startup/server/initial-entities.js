import { Meteor } from 'meteor/meteor';
import { Courses } from '../../api/courses/courses';
import { Locations } from '../../api/locations/locations';
import { Bathrooms } from '../../api/bathrooms/bathrooms';
import { FoodPlace } from '../../api/food/foodPlaces';
import { _ } from 'meteor/underscore';


/**
 * Returns the definition array associated with collectionName in the restoreJSON structure.
 * @param restoreJSON The restore file contents.
 * @param collection The collection of interest.
 */
function getDefinitions(restoreJSON, collection) {
  return _.find(restoreJSON.collections, obj => obj.name === collection).contents;
}

/**
 * Given a collection and the restoreJSON structure, looks up the definitions and invokes define() on them.
 * @param collection The collection to be restored.
 * @param restoreJSON The structure containing all of the definitions.
 */
function restoreCollection(collection, restoreJSON) {
  console.log(`the collection name is ${collection._name}`);
  const definitions = getDefinitions(restoreJSON, collection._name);
  console.log(`Defining ${definitions.length} ${collection._name} documents.`);
  _.each(definitions, definition => collection.insert(definition));
}

Meteor.startup(() => {
  /** Only initialize database if it's empty. */
  const collectionList = [Locations, Courses];
  /*const totalDocuments = _.reduce(collectionList, function reducer(memo, collection) {
    return memo + collection.count();
  }, 0);
  */
  const fileName = Meteor.settings.public.initialDatabaseFileName;
  console.log(`Restoring database from file ${fileName}.`);
  //const jsontext = Assets.getText(fileName);
  //console.log(`Json text is ${jsontext}`);
  const restoreJSON = JSON.parse(Assets.getText(fileName));
  console.log(`successful parse`);
  _.each(collectionList, collection => {
    if (collection.find().count() === 0) {
      restoreCollection(collection, restoreJSON);
    }
  });
});

//restrat serer
