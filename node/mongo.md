# MongoDB

- MongoDB is a **NoSQL database** designed for high performance, scalibility and flexibility.
- It stores data in a **document-oriented** format calles BSON (Binary JSON)

1. Document Oriented Storage

MongoDB stores data in flexible, JSON like documents, which means:

- Data is store in **key-value pairs** inside documents
- Fields can vary from document to documents (schema flexibility)
- Documents are **self-contained**, meaning related data is stored together rather than split across tables

```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "age": 29,
  "email": "johndoe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}

```

2. Collections instead of tables

- **Documents** are grouped into **collections** (similar to tables in SQL)

3. Schema flexibility

MongoDB is **schemaless**, You can have documents with different fields inside the same collection.

```json:line-numbers
{
  "name": "Alice",
  "age": 25
}
```

```json:line-numbers
{
  "name": "Bob",
  "skills": ["JavaScript", "MongoDB"]
}

```

Both documents belong to the same collection but have different fields.

## When to Use MongoDB?

### ✅ Best suited for:

- Real-time applications (e.g., chat apps, social media)
- Big Data & Analytics
- E-commerce platforms
- IoT & Sensor data
- Content Management Systems (CMS)

### 🚫 Avoid MongoDB if:

- You need complex transactions with strict ACID compliance (SQL databases are better for banking systems).
- Your data structure is highly relational (e.g., a system with lots of joins).

## MongoDB tools

- Mongo Atlas - Using Mongo online (free tier)
- Mongo Compass - Local GUI for Mongo
- Mongosh - Mongo command line
