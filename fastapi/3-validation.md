# FastApi Validation

## What is Pydantics

- A Python library used for data modeling, data parsing and has efficient error handling
- Pydantics is commonly used as a resource for data validation and how to handle data coming to our FastAPI application

Note : **\*\*** operator will pass the key/value from BookRequest() into the Book() constructor

## Example

```py
from fastapi import FastAPI, Path, Query, HTTPException
from pydantic import BaseModel, Field
from typing import Optional
from starlette import status # Included with FastAPI - it provides HTTP status codes

app = FastAPI()

class Book:
    id: int
    title: str
    description: str
    author: str
    rating: int
    published_date: int

    def __init__(self, id, title, description, author, rating, published_date):
        self.id = id
        self.title = title
        self.description = description
        self.author = author
        self.rating = rating
        self.published_date = published_date


# pydantic model - used for data validation
class BookRequest(BaseModel):
    id: Optional[int] = Field(description="ID is optional", default=None) # id is optional, and default=None
    title: str = Field(min_length=3) # title must be at least 3 characters long
    description: str = Field(min_length=1, max_length=100) # description must be at least 1 character long and at most 100 characters long
    author: str = Field(min_length=1) # author must be at least 1 character long
    rating: int = Field(gt=0, lt=6) # rating must be greater than 0 and less than 6
    published_date: int = Field(gt=1900, lt=2500) # published_date must be greater than 1900 and less than 2500

    # add example values to the schema
    model_config = {
        "json_schema_extra": {
            "example": {
                "title": "A new book",
                "author": "Paul",
                "description": "Decription of the book",
                "rating": 3,
                "published_date": 2000
            }
        }
    }


BOOKS = [
    Book(1, "Computer Science", "CS book", "paul", 5, 1900),
    Book(2, "Math", "Math book", "paul", 4, 2000),
    Book(3, "History", "History book", "sarah", 3, 2000),
    Book(4, "Physics", "Physics book", "paul", 2, 2002),
    Book(5, "Chemistry", "Chemistry book", "sarah", 3, 2003),
]


@app.get("/books", status_code=status.HTTP_200_OK)
def books():
    return BOOKS


@app.get("/books/{book_id}", status_code=status.HTTP_200_OK)
def get_one_book(book_id: int = Path(gt=0)): # Path(gt=0) - path parameter validation
    for book in BOOKS:
        if book.id == book_id:
            return book
    raise HTTPException(status_code=404, detail='book not found')


@app.get("/books/", status_code=status.HTTP_200_OK)
def get_book_by_rating(rating: int = Query(gt=0, lt=6)):# Query(gt=0, lt=6) - query parameter validation
    filtered_books = []
    for book in BOOKS:
        if book.rating == rating:
            filtered_books.append(book)
    return filtered_books

@app.get("/books/published_date/", status_code=status.HTTP_200_OK)
def get_book_by_published_date(published_date: int = Query(gt=1900, lt=2500)):# Query(gt=1900, lt=2500) - query parameter validation
    filtered_books = []
    for book in BOOKS:
        if book.published_date == published_date:
            filtered_books.append(book)
    return filtered_books


@app.post("/create-book", status_code=status.HTTP_201_CREATED)
def create_book(book: BookRequest):
    new_book = Book(**book.model_dump()) # **book.model_dump() - unpacks the dictionary into keyword arguments
    BOOKS.append(find_book_id(new_book))


def find_book_id(book: Book):
    book.id = 1 if len(BOOKS) == 0 else BOOKS[-1].id + 1
    return book


@app.put("/books/update", status_code=status.HTTP_204_NO_CONTENT)
def update_book(book: BookRequest):
    book_changed = False
    for i, b in enumerate(BOOKS):
        if b.id == book.id:
            BOOKS[i] = Book( # values must match the Book class
                id=book.id,
                title=book.title,
                description=book.description,
                author=book.author,
                rating=book.rating,
                published_date=book.published_date
            )
            book_changed = True

    if not book_changed:
        raise HTTPException(status_code=404, detail='Book not found')

@app.delete("/book/{book_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_book(book_id: int = Path(gt=0)):
    book_changed = False

    for i, _ in enumerate(BOOKS):
        if BOOKS[i].id == book_id:
            BOOKS.pop(i)
            book_changed = True
            break

    if not book_changed:
        raise HTTPException(status_code=404, detail='Book not found')

```
