// creating a class
class MediaInfo {
    constructor(id, title, publicationYear, value) {
        this.id = id;
        this.title = title;
        this.publicationYear = publicationYear;
        this.value = value;
    }
}

class Books extends MediaInfo {
    constructor(id, title, publicationYear, value, author, genre) {
        super(id, title, publicationYear,value);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends MediaInfo {
    constructor(id, title, publicationYear, value, director , runtime) {
        super(id, title, publicationYear,value);
        this.director = director;
        this.runtime = runtime;
    }
}

class CD extends MediaInfo {
    constructor(id, title, publicationYear, value, artist, numOfSongs) {
        super(id, title, publicationYear,value);
        this.artist = artist;
        this.numOfSongs = numOfSongs;
    }
}

class Catalog {
    constructor() {
        this.items = [];
        
    }

    addItem(...NewItems) {
        this.items.push(...NewItems);
    
    }
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id)
    }
    totalValue() {
       return this.items.reduce((total, item) => total + Number(item.value), 0)
    }
    displayCatalog() {
        
    }
}