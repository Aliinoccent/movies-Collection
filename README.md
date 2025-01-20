Movie Collection Application
A full-stack web application that allows users to register, log in, and manage their movie collections with features like authentication, adding movies, updating movie details, and storing movie images on a server.

Features:
User Authentication: JWT-based authentication for secure login and signup.
Password Encryption: Passwords are encrypted using bcrypt for security.
Movie Management: Authenticated users can add, update, and view movie collections.
Image Storage: Movie images are stored locally on the server using multer.
Dashboard: After logging in, users are redirected to a dashboard where they can manage their movie data.
Frontend: Built using React.js with a modular component structure.
Tech Stack:
Backend: Node.js with Express
Frontend: React.js (Component-based structure)
Authentication: JWT (JSON Web Tokens)
Password Encryption: bcrypt
File Upload: multer (for handling image uploads)
Database: MongoDB (or your preferred database)
Project Setup & Installation:
Prerequisites:
Node.js (v14+)
MongoDB (or another database if used)



Clone the Repository:
bash
Copy
Edit

git clone https://github.com/yourusername/movieApp_DB.git
cd movieApp_DB

Start the Application:
Backend:

bash
Copy
Edit
cd backend
npm start


Frontend;
bash
Copy
Edit
cd frontend
npm start

Frontend Flow:
Login/Signup: Users can sign up and log in, with JWT stored in local storage.
Dashboard: Authenticated users are redirected to the dashboard where they can view, add, and update movies.
Add/Update Movie: Users can add new movies and update movie details (title, year, image, etc.).
Frontend Setup:
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Start the React development server:

bash
Copy
Edit
npm start
This will launch the app on http://localhost:3000.

You can now interact with the frontend and authenticate with the backend API.

State Management:

For simple state management, React's useState and useEffect hooks are used.
You can consider using Context API or Redux for more complex state management if needed.
API Endpoints:
User Authentication:
POST /api/auth/signup: Create a new user.
Body: { "email": "user@example.com", "password": "password123" }
POST /api/auth/login: Login and get a JWT token.
Body: { "email": "user@example.com", "password": "password123" }
GET /api/auth/profile: Get user profile information (requires authentication).
Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
Movie Management (Requires Authentication):
GET /api/movies: Get all movies for the authenticated user.


Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
POST /api/movies: Add a new movie to the collection.


Body: { "title": "Movie Title", "year": 2025, "image": "image.jpg" }
PUT /api/movies/:id: Update an existing movie's title, year, and image.


Body: { "title": "Updated Title", "year": 2026 }
DELETE /api/movies/:id: Delete a movie from the collection.


Image Upload:
POST /api/movies/upload: Upload a movie image using multer.
Contributing:
Fork the repository
Create a new branch: git checkout -b feature-name
Make your changes and commit them: git commit -m 'Add feature'
Push to your branch: git push origin feature-name
Open a pull request to the main repository.
License:

