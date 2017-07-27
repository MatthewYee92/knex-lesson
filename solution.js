'use strict';

// Import and initialize knex:
const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);


// Select the lowest rating of any movie (just the value not the movie object)
function lowestScore() {
  knex('movies')
    .min('score')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err)
    })
}
// lowestScore()


// Select the id, title, and score of the single lowest scoring movie in the table.
function lowestScoreMovie() {
  knex('movies')
    .select('id', 'title', 'score')
    .orderBy('score', 'ASC')
    .first()
    .then((result) => {
      console.log(result)
      process.exit(1)
    })
    .catch((err) => {
      console.log(err)
    })
}
// lowestScoreMovie()


// Select the title, kind and name from all movies with awards
function getAllMoviesAndAwards() {
  knex('movies')
    .select('title', 'kind', 'name')
    .innerJoin('awards', 'awards.movie_id', 'movies.id')
    .then((result) => {
      console.log(result);
      process.exit(1)
    })
    .catch((err) => {
      console.log(err)
    })
}
// getAllMoviesAndAwards()


// Select the title, role, name and birthed_at of every actor in the database.
function getActorMovies() {
  knex('movies')
    .select('title', 'role', 'name', 'birthed_at')
    .innerJoin('actors_movies', 'actors_movies.movie_id', 'movies.id')
    .innerJoin('actors', 'actors_movies.actor_id', 'actors.id')
    .then((result) => {
      console.log(result);
      process.exit(1)
    })
    .catch((err) => {
      console.log(err);
      process.exit(1)
    })
}
// getActorMovies()


// Add an actor to the actors table
// Follow this example object:
const newActor = {
  name: 'Roger Schmidt',
  birthed_at: '9999-09-19T00:00:00.000Z'
}

function addActor() {
  knex('actors')
    .insert(newActor)
    .then((result) => {
      console.log(result)
      process.exit(1)
    })
    .catch((err) => {
      console.log(err)
    })
}
// addActor()

// Now select all actors
// You should see the new actor you just added!
function getActors() {
  knex('actors')
    .then((result) => {
      console.log(result)
      process.exit(1)
    })
    .catch((err) => {
      console.log(err)
    })
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
  knex('actors')
    .where('name', newActor2.name)
    .first()
    .then((result) => {
      console.log(result)
      if (result !== undefined) {
        console.log('actor name already in database!');
        process.exit(1)
      }

      return knex('actors').insert(newActor2)
    })
    .then((actor) => {
      console.log('Inserted!', actor);
      process.exit(1)
    })
    .catch((err) => {
      console.log(err)
      process.exit(1)
    })
}
// addActorUnique()
