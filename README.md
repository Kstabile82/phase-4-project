Hiker's Hub
This is a hiking app that allows users to browse a database of hikes, add to it, see other hikers' comments and likes, and add hikes to their own bucketlist, completed list or planned list. 
This is a React front end and Rails back end, with data converted to JSON.

Usage
A user should see a homepage with a navbar that contains login, signup and hikes buttons. A user does not have to log in just to see the database of hikes. Upon signing up or logging in, though, the navbar changes to include welcome page, logout and my hikes buttons. Logged in users can add hikes from the database to their own my hikes page by clicking the "+" button. They can then set the status (bucket list, planned, completed) to the hike listing on their my hikes page. Users can also click the like button to update the hike's number of likes. 

The "Add Hike" button at the bottom of the hikes list should pull up a form, where users can add a new hike to the database. If users click "See Comments" where listed on each hike, they should see the comments that have been left. Those without any will say "No comments yet." 

Additionally, users have the option to sort and filter hikes by location, distance, likes and difficulty on the hikes page. 

On the welcome page, logged in users should see their name and a button to delete their account. Clicking that will destroy their account. Clicking Log Out will end the session and bring users back to the original homepage and navbar. 

For support, please email karina.stabile@gmail.com

Roadmap
Add photo upload option to hikes
Enable direct messaging between users

Contributing 
I am open to contributions, please email me to inquire. 

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

You can use the following commands to run the application:
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

