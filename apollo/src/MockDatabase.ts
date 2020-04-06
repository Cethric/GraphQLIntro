import {IDatabase} from "./data/IDatabase";
import {Book} from "./types/book";

class MockDatabase implements IDatabase {
    private static readonly bookCollection: Book[] = [
        {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
        },
        {
            title: 'Jurassic Park',
            author: 'Michael Crichton',
        },
    ];

    book(title: string): Book | null {
        return MockDatabase.bookCollection.find((book) => {
            if (book.title === title) {
                return book;
            }
            return undefined;
        }) || null;
    }

    books(): Book[] {
        return MockDatabase.bookCollection;
    }

    insertBook(title: string, author: string): boolean {
        if (this.book(title) !== null) {
            return false;
        }
        return MockDatabase.bookCollection.push({
            title,
            author
        }) !== 0;
    }

}

export {
    MockDatabase,
};
