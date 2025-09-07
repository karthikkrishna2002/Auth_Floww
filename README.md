# React.js & Node.js Login/Logout Flow (SQLite)

## Features
- User registration with email and password
- Login with cookie-based sessions
- Persisted session via `express-session`
- Logout and session clear
- SQLite database with `bcrypt` password hashing
- Protected `/dashboard` route on the frontend

## Project Structure
```
auth-react-node-sqlite/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   │   └── auth.js
│   ├── .gitignore
│   └── users.db (auto-created)
├── frontend/
│   ├── package.json
│   ├── webpack.config.js
│   ├── babel.config.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── AuthContext.js
│       ├── api.js
│       └── components/
│           ├── Register.js
│           ├── Login.js
│           └── Dashboard.js
└── README.md
```

## Prerequisites
- Node.js 18+

## Backend Setup
```bash
cd backend
npm install
npm start
```
- Server runs at `http://localhost:5000`
- Session cookie name: `sid`
- Health check: `GET /api/health`

### Environment Variables (optional)
- `PORT` (default 5000)
- `SESSION_SECRET` (default `supersecret-session-key`)
- `CLIENT_ORIGIN` (default `http://localhost:3000`)

## Frontend Setup
```bash
cd frontend
npm install
npm start
```
- App runs at `http://localhost:3000`
- Configure API URL with `REACT_APP_API_URL` (defaults to `http://localhost:5000/api`)

## API Overview
- `POST /api/auth/register` { email, password }
- `POST /api/auth/login` { email, password }
- `POST /api/auth/logout`
- `GET /api/auth/me`

## Deployment Notes
- Backend: Render/Heroku/Fly.io. Set `CLIENT_ORIGIN`, `SESSION_SECRET`, enable CORS and trust `sameSite: 'none'` with `secure` cookies over HTTPS.
- Frontend: Vercel/Netlify. Set `REACT_APP_API_URL` to deployed backend `https://your-api/api`.

## Database
- SQLite file `users.db` auto-created in `backend/` on first run.

## Scripts
- Backend: `npm start` (node server)
- Frontend: `npm start` (webpack dev server)

## Screens
- Register: create account; duplicate emails return 409.
- Login: sets session cookie; wrong credentials return 401.
- Dashboard: protected; shows email and logout button.


