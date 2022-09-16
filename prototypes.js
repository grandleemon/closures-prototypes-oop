const Movie = function(title, runtime, series) {
    this.title = title
    this.runtime = runtime
    this.series = series
}

Movie.prototype.addToFavorite = function() {
    return "Added"
}

Movie.prototype.transformToHours = function() {
    const hours = Math.floor(this.runtime / 60)
    const minutes = this.runtime % 60
    return `${hours}h ${minutes}m`
}

const Series = function(title, runtime, seriesNumber) {
    Movie.call(this, title, runtime, true)
    this.seriesNumber = seriesNumber
}

Object.setPrototypeOf(Series.prototype, Movie.prototype)

const Avatar = new Movie("Avatar", 162, false)
const Sherlock = new Series("Sherlock", 88, 13)