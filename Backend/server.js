const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = 10;
const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: 'https://nurarisya.github.io',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});


db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('Connected to MySQL');
});


app.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    console.log('Incoming registration:', req.body);

    const sql = "INSERT INTO users (first_name, last_name, email, userpassword) VALUES (?, ?, ?, ?)";

    bcrypt.hash(password.toString(), salt, (err, hash) => {
        if (err) {
            console.error("Hashing error:", err);
            return res.json({ success: false, message: "Error hashing password" });
        }

        // Insert into `users` with hashed password
        db.query(sql, [firstName, lastName, email, hash], (err, result) => {
            if (err) {
                console.error("Registration error:", err);
                return res.json({ success: false, message: "Email may already be in use or other error." });
            }

            const newUserID = result.insertId;

            const sqlApplicant = `
                INSERT INTO applicant(userID, applicantUsername, applicantPassword, applicantFirstName, applicantLastName, applicantEmail)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            const applicantValues = [newUserID, email, hash, firstName, lastName, email];

            db.query(sqlApplicant, applicantValues, (err2, result2) => {
                if (err2) {
                    console.error("Applicant insertion error:", err2);
                    return res.json({ success: false, message: "Failed to insert into applicant table." });
                }

                return res.json({ success: true, message: "User registered successfully" });
            });
        });
    });
});

//login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.json({ success: false, message: "DB error" });

        if (results.length === 0) {
            return res.json({ success: false, message: "No user found" });
        }

        const user = results[0];

        bcrypt.compare(password.toString(), user.userpassword, (err, match) => {
            if (err) return res.json({ success: false, message: "Bcrypt error" });
            if (!match) return res.json({ success: false, message: "Incorrect password" });

            const token = jwt.sign({ id: user.userID, email: user.email }, "jwt-secret-key", { expiresIn: "1d" });

            // inside /login route
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,     // use true only for HTTPS
                sameSite: 'None'
            });

            return res.json({ success: true, message: "Login successful" });
        });
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ success: true, message: "Logged out" });
});

app.get('/', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token found' });
    }

    try {
        const user = jwt.verify(token, "jwt-secret-key");
        return res.status(200).json({ success: true, user });
    } catch (err) {
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }
});

const PORT = process.env.PORT || 8081; // use Render's port or fallback for local dev
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
