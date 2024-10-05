
# Project Management Tool

This is a simple project management tool built using Node.js, Express, and MongoDB with Mongoose. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on projects.

## Features
- Add new projects
- Retrieve all projects
- Retrieve a single project by its ID
- Update existing projects
- Delete a project
- Organized in an MVC architecture
- Includes error handling and CORS support

## Technologies Used
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS
- dotenv for environment variables

## Project Structure

```
project-management-tool/
├── config/
│   └── db.js               # Database connection setup
├── controllers/
│   └── projectController.js # API request handling logic
├── models/
│   └── Project.js           # Mongoose schema for Project model
├── routes/
│   └── projectRoutes.js     # API routes
├── .env                     # Environment variables
├── server.js                # Main server file
├── .gitignore               # Files that you dont want to push to repo
├── package.json             # Project dependencies and scripts
```

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/aishwaryamensinkai/project-management-tool.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file and add your MongoDB connection string:
   ```
   For local mongodb
   MONGO_URI=mongodb://localhost:27017/projectManagementTool

   or

   For mongodb Atlas
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.coued.mongodb.net/<databasename>?retryWrites=true&w=majority&appName=Cluster0

   ```

4. Start the server:
   ```
   npm start
   ```

   The server will run on `http://localhost:5001`.

## API Endpoints

### Create a Project (POST)
```bash
curl -X POST http://localhost:5001/api/projects -H "Content-Type: application/json" -d '{"name": "Project 1", "description": "This is a test project", "status": "Not Started"}'
```

### Get All Projects (GET)
```bash
curl -X GET http://localhost:5001/api/projects
```

### Get a Project by ID (GET)
```bash
curl -X GET http://localhost:5001/api/projects/<project_id>
```

### Update a Project (PUT)
```bash
curl -X PUT http://localhost:5001/api/projects/<project_id> -H "Content-Type: application/json" -d '{"name": "Updated Project", "description": "Updated description", "status": "In Progress"}'
```

### Delete a Project (DELETE)
```bash
curl -X DELETE http://localhost:5001/api/projects/<project_id>
```

## Error Handling
If you try to access an invalid route, you will receive a 404 error:
```bash
{
    "message": "Not Found"
}
```

## Version Control
Ensure you use Git for version control, and push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

## License
This project is open-source and available under the [MIT License](LICENSE).
