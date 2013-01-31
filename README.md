#olin.js #4 — homework

**Due Tuesday Feb 5 before class**

We're gonna make a shitty Twitter.

## Reading

### Sessions

### The setTimeout function

## Assignment
Paul and David are going to Twitter next year. Let's see just how easy it is to do their job.

* Fork this repo to your own account
* Generate an Express app
* Create an app that has the following routes
  * GET `/` => shows a list of all the recent tweets. This page uses the javascript `setTimeout` to poll for new tweets every 2 seconds. This means that new tweets should stream in without having to refresh the page.
  * GET `/users/new` => shows a form that allows someone to input in a name for their user account. When they hit submit it should POST to `/users/new`, create a new user, and redirect to `/users/:user`
  * GET `/users/:user` => shows the user a list of their tweets along with a form that they can use to create a new tweet. When they hit the "tweet" button it should POST to `/tweets/:user` via an AJAX $.post call, if that post is successful, this tweet should also show up on their list of tweets without them refreshing the page. If that tweet fails (as in it's longer than 140 characters), an error message should be displayed to the user. 
* Create a Heroku `Procfile` like the one we made for you in previous homeworks
* Push to Heroku and add the url to the [homework sheet](https://docs.google.com/spreadsheet/ccc?key=0AjqGw-pw5UuudFhQSmJhZlRZWEhRTWcwYmxBVld6c1E#gid=3)