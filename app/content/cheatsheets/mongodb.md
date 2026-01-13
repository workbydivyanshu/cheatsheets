---
title: MongoDB
description: Learn MongoDB - A NoSQL document database for flexible data storage
category: Database
---

# MongoDB Cheatsheet

**MongoDB** is a NoSQL document database that stores data in flexible JSON-like documents. Perfect for applications that need flexible schemas and easy scaling.

---

## Getting Started

### What is MongoDB?
MongoDB stores data as **documents** (similar to JSON objects) instead of tables. This flexibility lets you:
- Store nested data easily
- Change structure without migrations
- Scale horizontally across servers

### Installation & Setup

```bash
# Install MongoDB locally (macOS)
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Or install MongoDB Atlas (cloud)
# Visit: https://www.mongodb.com/cloud/atlas

# Install MongoDB Driver for Node.js
npm install mongodb
```

### Connect to MongoDB

```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    const db = client.db('myDatabase');
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Connection failed:', error);
  }
}
```

---

## Database Operations (CRUD)

### Create (Insert Documents)

```javascript
const db = client.db('myDatabase');
const users = db.collection('users');

// Insert one document
await users.insertOne({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  createdAt: new Date()
});

// Insert many documents
await users.insertMany([
  { name: 'Bob', email: 'bob@example.com', age: 30 },
  { name: 'Charlie', email: 'charlie@example.com', age: 28 }
]);
```

### Read (Find Documents)

```javascript
const users = db.collection('users');

// Find all documents
const allUsers = await users.find({}).toArray();

// Find one document
const user = await users.findOne({ email: 'alice@example.com' });

// Find with conditions
const adults = await users.find({ age: { $gte: 18 } }).toArray();

// Find specific fields (projection)
const names = await users
  .find({})
  .project({ name: 1, email: 1, _id: 0 })
  .toArray();

// Limit and skip
const page = await users
  .find({})
  .skip(10)
  .limit(5)
  .toArray();
```

### Update Documents

```javascript
const users = db.collection('users');

// Update one document
await users.updateOne(
  { email: 'alice@example.com' },
  { $set: { age: 26, updated: new Date() } }
);

// Update many documents
await users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: 'minor' } }
);

// Increment a field
await users.updateOne(
  { email: 'alice@example.com' },
  { $inc: { loginCount: 1 } }
);

// Push to array
await users.updateOne(
  { email: 'alice@example.com' },
  { $push: { tags: 'vip' } }
);
```

### Delete Documents

```javascript
const users = db.collection('users');

// Delete one document
await users.deleteOne({ email: 'alice@example.com' });

// Delete many documents
await users.deleteMany({ age: { $lt: 18 } });

// Delete all documents
await users.deleteMany({});
```

---

## Query Operators

### Comparison Operators

```javascript
// Equal
{ age: 25 }

// Not equal
{ age: { $ne: 25 } }

// Greater than
{ age: { $gt: 18 } }

// Greater than or equal
{ age: { $gte: 18 } }

// Less than
{ age: { $lt: 65 } }

// Less than or equal
{ age: { $lte: 65 } }

// In array
{ status: { $in: ['active', 'pending'] } }

// Not in array
{ status: { $nin: ['deleted', 'banned'] } }
```

### Logical Operators

```javascript
// AND (default - all conditions must match)
{ age: { $gt: 18 }, status: 'active' }

// OR (at least one condition matches)
{ $or: [{ age: { $lt: 18 } }, { status: 'suspended' }] }

// NOT
{ age: { $not: { $gt: 65 } } }

// NOR (neither condition matches)
{ $nor: [{ status: 'banned' }, { balance: { $lt: 0 } }] }
```

### Array Operators

```javascript
// Element exists in array
{ tags: 'javascript' }

// Array contains element at index
{ 'tags.0': 'javascript' }

// Array size
{ tags: { $size: 3 } }

// Element in array that matches condition
{ scores: { $elemMatch: { $gt: 80, $lt: 100 } } }

// All elements match condition
{ scores: { $all: [80, 90] } }
```

### String Operators

```javascript
// Regular expression match
{ email: { $regex: '^alice' } }

// Case-insensitive regex
{ email: { $regex: 'alice', $options: 'i' } }

// String contains
{ name: { $regex: 'Ali' } }
```

---

## Aggregation Pipeline (🟡 Intermediate)

Aggregation processes documents through stages to compute results.

```javascript
const users = db.collection('users');

// Simple aggregation
const result = await users.aggregate([
  // Stage 1: Filter
  { $match: { age: { $gte: 18 } } },
  
  // Stage 2: Transform
  { $project: { name: 1, email: 1, ageGroup: { $cond: [{$gte: ['$age', 65]}, 'senior', 'adult']} } },
  
  // Stage 3: Sort
  { $sort: { name: 1 } }
]).toArray();
```

### Common Pipeline Stages

```javascript
// $match - Filter documents
{ $match: { status: 'active' } }

// $project - Select/transform fields
{ $project: { name: 1, email: 1, _id: 0 } }

// $group - Group by field and aggregate
{ $group: { _id: '$status', count: { $sum: 1 }, avgAge: { $avg: '$age' } } }

// $sort - Sort documents
{ $sort: { createdAt: -1 } }

// $limit - Limit number of documents
{ $limit: 10 }

// $skip - Skip documents
{ $skip: 20 }

// $lookup - Join with other collections
{
  $lookup: {
    from: 'posts',
    localField: '_id',
    foreignField: 'userId',
    as: 'userPosts'
  }
}

// $unwind - Flatten array field
{ $unwind: '$tags' }
```

### Example: Complex Aggregation

```javascript
const stats = await users.aggregate([
  // Find active users over 18
  { $match: { status: 'active', age: { $gte: 18 } } },
  
  // Group by country and get stats
  {
    $group: {
      _id: '$country',
      count: { $sum: 1 },
      avgAge: { $avg: '$age' },
      emails: { $push: '$email' }
    }
  },
  
  // Sort by count descending
  { $sort: { count: -1 } },
  
  // Get top 5
  { $limit: 5 },
  
  // Rename _id field
  { $project: { country: '$_id', count: 1, avgAge: 1, _id: 0 } }
]).toArray();
```

---

## Indexing

Indexes speed up queries significantly.

```javascript
const users = db.collection('users');

// Create single field index
await users.createIndex({ email: 1 });

// Create unique index (no duplicates)
await users.createIndex({ email: 1 }, { unique: true });

// Create compound index (multiple fields)
await users.createIndex({ country: 1, city: 1 });

// Create text index for full-text search
await users.createIndex({ name: 'text', description: 'text' });

// Create TTL index (auto-delete after time)
await sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// List indexes
const indexes = await users.listIndexes().toArray();
console.log(indexes);

// Drop index
await users.dropIndex('email_1');
```

---

## Transactions (🟡 Intermediate)

Multi-document transactions ensure consistency.

```javascript
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    const usersCol = db.collection('users');
    const accountsCol = db.collection('accounts');
    
    // Transfer money between accounts
    await usersCol.updateOne(
      { _id: userId1 },
      { $inc: { balance: -100 } },
      { session }
    );
    
    await usersCol.updateOne(
      { _id: userId2 },
      { $inc: { balance: 100 } },
      { session }
    );
    
    // Log transaction
    await accountsCol.insertOne(
      { from: userId1, to: userId2, amount: 100 },
      { session }
    );
  });
} finally {
  await session.endSession();
}
```

---

## Data Modeling Best Practices

### Embedding vs References

```javascript
// EMBEDDING - nest related data (good for small, related data)
{
  _id: ObjectId(),
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'NYC',
    zip: '10001'
  }
}

// REFERENCE - link to other documents (good for large, shared data)
{
  _id: ObjectId(),
  name: 'Alice',
  addressId: ObjectId('...')
}
```

### Schema Validation

```javascript
await db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email'],
      properties: {
        name: { bsonType: 'string' },
        email: { bsonType: 'string' },
        age: { bsonType: 'int', minimum: 0, maximum: 120 },
        tags: { bsonType: 'array', items: { bsonType: 'string' } }
      }
    }
  }
});
```

---

## Mongoose (ODM for MongoDB) (🟡 Intermediate)

Object Document Mapper makes MongoDB easier.

```javascript
const mongoose = require('mongoose');

// Connect
await mongoose.connect('mongodb://localhost:27017/myDatabase');

// Define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create model
const User = mongoose.model('User', userSchema);

// Create document
const user = await User.create({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

// Find documents
const users = await User.find({ age: { $gte: 18 } });

// Update
await User.updateOne({ _id: user._id }, { age: 26 });

// Delete
await User.deleteOne({ _id: user._id });
```

---

## Best Practices

1. **Use indexes on frequently queried fields** - Speeds up reads significantly
2. **Validate data with schema validation** - Ensure data integrity
3. **Use transactions for multi-document updates** - Maintain consistency
4. **Embed small, related data** - Query efficiency
5. **Reference large, shared data** - Avoid duplication
6. **Use projection to limit fields** - Reduce data transfer
7. **Monitor slow queries** - Use explain() to analyze query performance
8. **Use connection pooling** - Better performance with multiple queries

---

## Summary

MongoDB is **flexible, scalable, and developer-friendly**:
- **Document-oriented** - store JSON-like documents
- **Flexible schema** - change structure anytime
- **Powerful queries** - find, filter, aggregate data
- **Indexes** - fast queries on large datasets
- **Transactions** - ensure consistency across documents
- **Scalable** - replicate and shard data across servers

Perfect for modern web applications, APIs, and real-time data!
