# Best Practices

## Database & Performance
- It's better to store small objects
- We can create custom indexes for faster searching/access to collections of objects

## Serverless ideas
- Offer the user a way to export data using FileSystem
- Export/import data using QR codes (it is possible to store small amounts of data in QR codes - up to 5KB)
- Blockchain-based data storage

## Being a good citizen
- Don't store what you don't need or won't use
- Clear the storage when it is not needed anymore
- Capture quota errors and clear data if needed
- Offer the user a way to get user-generated content outside the app

## Data sync
- In case you also store data on the server, many sync algorithms are available
- Master Service Workers and sync API
- Think about the version and data migration strategies

## Security
- Remember all browser data storage is public
- It's insecure by definition
- Don't store private or sensitive data
- If you store authentication data, it should be a short-lived token that can be revoked easily
- 