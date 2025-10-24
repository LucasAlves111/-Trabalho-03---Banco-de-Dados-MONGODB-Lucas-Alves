library-api/
│
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection setup
│   │
│   ├── models/
│   │   ├── Author.js             # Author schema
│   │   ├── User.js               # User schema
│   │   ├── Book.js               # Book schema
│   │   └── Loan.js               # Loan schema
│   │
│   ├── routes/
│   │   ├── authorRoutes.js       # Author endpoints
│   │   ├── userRoutes.js         # User endpoints
│   │   ├── bookRoutes.js         # Book endpoints
│   │   └── loanRoutes.js         # Loan endpoints
│   │
│   ├── controllers/
│   │   ├── authorController.js   # Author business logic
│   │   ├── userController.js     # User business logic
│   │   ├── bookController.js     # Book business logic
│   │   └── loanController.js     # Loan business logic
│   │
│   └── app.js                    # Express/Fastify app setup
│
├── scripts/
│   └── resetCollections.js      # Script to clear collections
│
├── .env                          # Environment variables (don't commit!)
├── .env.example                  # Example env file (commit this)
├── .gitignore                    # Files to ignore in git
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
├── routes.http                   # API test scenarios
└── server.js                     # Entry point to start server
```

## 📝 Explanation of Each Folder/File:

### **src/config/**
- Database connection configuration

### **src/models/**
- Mongoose schemas for each collection (Authors, Users, Books, Loans)

### **src/routes/**
- Define all API endpoints (GET, POST, etc.)
- Each file handles routes for one resource

### **src/controllers/**
- Business logic for each operation
- Controllers handle what happens when a route is called

### **scripts/**
- Utility scripts like resetting the database

### **Root files:**
- **server.js**: Starts your application
- **app.js**: Sets up Express/Fastify with middleware and routes
- **.env**: Your actual secrets (MongoDB URI, port, etc.)
- **.env.example**: Template showing what variables are needed
- **package.json**: Lists dependencies and npm scripts

