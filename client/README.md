
Prisoner Skills

A web app designed to place employers in contact with skilled workers who are currently serving prison sentences.

Deployed at:
https://lambda-prisoner-skills.herokuapp.com/

Landing pages:

Jacob McFaul: https://nostalgic-wilson-aa9ec9.netlify.com/

Isaac Houle: https://amazing-wozniak-539f92.netlify.com/

Zechariah Drinkhall: https://priceless-lewin-ca2764.netlify.com/


Frontend built by Jacob Bryan

Backend built by Daren Larson

Landing pages built by Zechariah Drinkhall, Isaac Houle, and Jacob McFaul


MVP Features Breakdown:

This app contains two user types. A prison admin (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view posted profiles by prison.

    Home Page (For potential employer) - No need to log in. Contains a list of prisons who have posted prisoner profiles. Each prison is laid out in a grid format, with the name of the prison, number of people available to work (total number of entries a given prison admin has submitted),  and the physical address/location of the prison.Clicking on a prison takes you to the prisoner profile page.

    Prisoner Profile page MAPPED LIST: Accessed from the home page, non-logged in users can view the list of profiles created by the prison they clicked on.
    
    use bootstrap cards to show each profile on the list.
    have option to list by skill, or list by facility


    Single Profile Page SINGLE ITEM ON LIST: Users can click on a single post to read more of the description.

    Home Page  (For a prison) - If no profile is created, be sure to allow a prison to create a profile and add it to the list of prisons on the general home page. After an admin logs in, they are directed to a page where they can see the people’s profiles they’ve created in a list view, and have options to create new one.

    Create profile page: An admin can create a prisoner’s profile. Should include name, availability (permissions to work in prison only or able to have work leave), and list of skills and/or previous work experience. The profile can be edited and deleted after creation.

    Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

Stretch Goal: A single user could search for prisons by entering their zip code and defining a search radius. An admin can upload a pdf of a prisoner’s resume. A single user can click a contact us form to inquire about a prisoner.

