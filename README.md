# HokuStudentAssistant

The purpose of this app is to help students keep track of their schedules along with the convenience of locating where their classes and campus events are on a map. The map will also show locations like bathrooms and food places.

The Hoku Student Assistant App will have these three features...

# First Feature: Add Class Page
  The add class page allows the user to create their class list using class CRNs. Using the CRNs, their class list will automatically be generated on the same page, showing other details about the class such as the class name and description. The user must add courses in order for courses to be displayed on the map. 

# Second Feature: Map
  We implemented a map component to show the locations of all of a user's courses, events happening on campus, bathrooms, and even food places. The map component consists of a google map, along with checkboxes that are used to show certain markers on the map and allows you to toggle between showing the locations of courses, events, bathrooms, and food, or multiple. The map view automatically centers on the UH Manoa campus. The student classes must be added by the user in the add class page, and the classes they added are shown on that page as well. Upon adding their classes (and making sure the class checkbox is checked), the classes will appear on the map, which is located in the Map page.
  
# Third Feature: Add Event Page
  The Add Event Page allows admin users to create events that are happening on campus so that the events can be displayed on the map as well. All users will be able to see events on the map, but only admins can create events to be shown on the map. For example, if someone wanted to display a marker on the UH map for the Homecoming Picnic on the Path, they would be able to do so using the create event page, so that students would then be able to see that event on the map. 
  
# Third and a Half Feature: Calendar and course scheduler.
  We have a calendar on our map page, as well as a schedule visualizer - users can drag colored blocks aroud and label them to visualize their class schedules.

# Navigation:
The first page that will be seen is the landing page, from which the user can login or sign up. Upon doing either, you will be redirected to the map page. The map page has the map component and the calendar component. The map page is centered on the UH Manoa campus. Above the Calendar component are checkboxes that control what shows on the map. There will be four checkboxes: classes, food, bathrooms, and events. Below the calendar component has the option to navigate to the Add class page. The Add class page will have the option to add classes by CRN and a table on the right that will show the user's classes. The CRN's of the users must be added at once, there is a button that is used to add more text fields, in which the CRN's will be typed in. Upon adding classes, if the user were to go back to the map page and check the class checkbox, they will see their classes on the map to the left.
