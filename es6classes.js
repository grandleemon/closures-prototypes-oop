class Movie {
    constructor(title, runtime, isSeries) {
        this.title = title
        this.runtime = runtime
        this.isSeries = isSeries
    }

    addToFavorite() {
        return "Added"
    }

    transformToHours() {
        const hours = Math.floor(this.runtime / 60)
        const minutes = this.runtime % 60
        return `${hours}h ${minutes}m`
    }
}

class Series extends Movie {
    constructor(title, runtime, seriesNumber) {
        super(title, runtime, true);
        this.seriesNumber = seriesNumber
    }
}

const Avatar = new Movie("Avatar", 162, false)
const Sherlock = new Series("Sherlock", 88, 13)