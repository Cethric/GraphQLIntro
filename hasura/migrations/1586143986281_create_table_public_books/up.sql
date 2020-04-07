CREATE TABLE Books
(
    Author TEXT NOT NULL,
    Title  TEXT NOT NULL,
    PRIMARY KEY (Title),
    UNIQUE (Author, Title)
);
