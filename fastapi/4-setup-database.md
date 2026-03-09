## Setup Database

Install sqlalchemy and sqlite

```bash
pip install sqlalchemy
pip install sqlite
```

::: code-group

```py [database.py]
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./<database_name>.db"

# connect_args={"check_same_thread": False} is only for sqlite
# "check_same_thread": false is used to allow multiple threads to access the database
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

```

```py [models.py]
from sqlalchemy import Column, Integer, String, Boolean
from database import Base

class Todo(Base):
    __tablename__ = "todos"
    # index=True allows for faster lookup
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    completed = Column(Boolean, default=False)
```

:::
