# API Request Methods

```py
from fastapi import FastAPI, Depends, HTTPException, Path
from TodoApp import models
from .models import Todos
from TodoApp.database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
from starlette import status

app = FastAPI()

# Create database
models.Base.metadata.create_all(bind=engine)

# Get a database session and close it after the request
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

# Annotated is used to add metadata to a type - Dependency Injection
db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/", status_code=status.HTTP_200_OK)
def read_all(db: db_dependency):
  return db.query(Todos).all()

@app.get("/todo/{todo_id}", status_code=status.HTTP_200_OK)
def read_todo(db: db_dependency, todo_id: int = Path(gt=0)):
  todo_model = db.query(Todos).filter(Todos.id == todo_id).first()
  if todo_model is not None:
    return todo_model
  raise HTTPException(status_code=404, detail='Todo not found')
```
