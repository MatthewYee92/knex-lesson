'use strict';

// Import and initialize knex:


// Select the lowest rating of any movie (just the value not the movie object)
function lowestScore() {
  // knex code here
}
// lowestScore() //uncomment this to run query


// Select the id, title, and score of the single lowest scoring movie in the table.
function lowestScoreMovie() {

}
// lowestScoreMovie()


// Select the title, kind and name from all movies with awards
function getAllMoviesAndAwards() {

}
// getAllMoviesAndAwards()


// Select the title, role, name and birthed_at of every actor in the database.
function getActorMovies() {

}
// getActorMovies()


// Add an actor to the actors table
// Follow this example object:
const newActor = {
  name: 'Roger Schmidt',
  birthed_at: '9999-09-19T00:00:00.000Z'
}

function addActor() {

}
// addActor()

// Now select all actors
// You should see the new actor you just added!
function getActors() {

}
// getActors()


// Add a new actor to the actors table but only if the name does not already exist
// - First query the actors table to see if the name exists
// - If name does not exist, insert new actor object
const newActor2 = {
  name: 'Captain Galvanize',
  birthed_at: '9999-09-19T00:00:00.000Z'
}

function addActorUnique() {

}
// addActorUnique()
