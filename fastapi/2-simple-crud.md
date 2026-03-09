# Simple CRUD

## What is CRUD

CRUD is an acronym for Create, Read, Update, and Delete.

## Why do we need CRUD?

CRUD is a basic set of operations that are required for any application.

## Example

```py
from fastapi import FastAPI

app = FastAPI()

books = []

@app.post("/books")
def create_book(book: dict):
    books.append(book)
    return {"message": "Book created successfully"}

@app.get("/books")
def read_books():
    return books

# Use path parameter to get a specific book
@app.get("/books/{book_id}")
def read_book(book_id: int):
    return books[book_id]

# Use query parameter to get a specific book
@app.get("/books")
def read_books(book_id: int):
    return books[book_id]

@app.put("/books/{book_id}")
def update_book(book_id: int, book: dict):
    books[book_id] = book
    return {"message": "Book updated successfully"}

@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    del books[book_id]
    return {"message": "Book deleted successfully"}

```
