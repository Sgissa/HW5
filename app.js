// creating a base class
class MediaInfo {
    constructor(id, title, publicationYear, value) {
        this.id = id;
        this.title = title;
        this.publicationYear = publicationYear;
        this.value = value;
    }
}

class Book extends MediaInfo {
    constructor(id, title, publicationYear, value, author, genre) {
        super(id, title, publicationYear, value);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends MediaInfo {
    constructor(id, title, publicationYear, value, director, runtime) {
        super(id, title, publicationYear, value);
        this.director = director;
        this.runtime = runtime;
    }
}

class CD extends MediaInfo {
    constructor(id, title, publicationYear, value, artist, numOfSongs) {
        super(id, title, publicationYear, value);
        this.artist = artist;
        this.numOfSongs = numOfSongs;
    }
}

class Catalog {
    constructor() {
        this.items = [];
    }

    // Using rest and spread operators
    addItem(...newItems) {
        this.items.push(...newItems);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    totalValue() {
        return this.items.reduce((total, item) => total + Number(item.value), 0);
    }

    displayCatalog(title) {
        let catalogHTML = `<h3>${title}</h3>`;
        this.items.forEach(item => {
            catalogHTML += `
                <p>
                    <i>${item.title}</i> (${item.publicationYear}) - $${item.value} <br>
                    ${item instanceof Book ? `Author: ${item.author}, Genre: ${item.genre}` : ""}
                    ${item instanceof DVD ? `Director: ${item.director}, Runtime: ${item.runtime} mins` : ""}
                    ${item instanceof CD ? `Artist: ${item.artist}, Songs: ${item.numOfSongs}` : ""}
                </p>
            `;
        });

        catalogHTML += `<strong>Total Value: $${this.totalValue()}</strong>`;
        return catalogHTML;
    }
}


window.onload = function () {
    const descElements = document.querySelectorAll('.desc');

    
    const myCatalog = new Catalog();

 
    const book1 = new Book(1, "The Great Gatsby", 1925, 20, "F. Scott Fitzgerald", "Fiction");
    const dvd1 = new DVD(2, "Inception", 2010, 15, "Christopher Nolan", 148);
    const cd1 = new CD(3, "Thriller", 1982, 25, "Michael Jackson", 9);

    
    myCatalog.addItem(book1, dvd1, cd1);

    
    descElements[0].innerHTML = myCatalog.displayCatalog("Catalog Items");

   
    myCatalog.removeItem(2); // removing Inception

    
    descElements[1].innerHTML = myCatalog.displayCatalog("Updated Catalog Items");
};
