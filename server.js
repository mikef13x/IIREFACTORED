const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/config'); // Adjust the path as necessary
const path = require('path');
const profileApi = require('./routes/api/profileApi')
const userRoutes = require('./routes/api/users')

const app = express();
const PORT = process.env.PORT || 3001;

// Your existing helpers and session setup
const helpers = {
    formatNumber: (number) => number.toLocaleString()
};

const sess = {
    secret: 'Super secret secret',
    // Other session config...
    store: new SequelizeStore({
        db: sequelize
    }),
    name: 'my-session-cookie'
};

app.use(session(sess));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/api/profile', profileApi);
app.use('/api/users', userRoutes);
// Other API routes...

// Serve the React app's index.html for any other request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});