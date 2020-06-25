//Series duration of my life.
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const thrones = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
];
//Lets find out! Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.
const lifespan = 80;
const lifeSpanInHours = 80 * 365 * 24;

function seriesLifeTime() {
  for (let i = 0; i < seriesDurations.length; i++) {
    const movieSeries = seriesDurations[i];
    const duration = 24 * movieSeries.days + movieSeries.hours;
    const percentageLifeDuration = (duration / lifeSpanInHours) * 100;
    console.log(
      movieSeries.title +
        " took " +
        percentageLifeDuration.toFixed(3) +
        "%" +
        " of my life"
    );
  }
}

seriesLifeTime(); // logs out the text found above
