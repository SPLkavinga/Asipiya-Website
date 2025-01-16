const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");
const path = require('path');


const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());



// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider
  auth: {
    user: "n.chaminducodez@gmail.com", // Replace with your email
    pass: "ehbc wrmr tuav ceay", // Replace with your app-specific password
  },
});

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your MySQL password
  database: "asipiya", // Replace with your database name
});



db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("/api/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, message, interests } = req.body;
  
  console.log('User email:', email);  // Check if the email is being received

  // Insert the form data into the email_details table
  const query = `
    INSERT INTO email_details (firstName, lastName, email, phoneNumber, message, interests)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  // Convert the interests array into a string (if it is an array)
  const interestsString = interests.join(", ");

  db.query(query, [firstName, lastName, email, phoneNumber, message, interestsString], (err, result) => {
    if (err) {
      console.error('Database error:', err); // Log error if saving to the database fails
      return res.status(500).send("Error saving data to the database");
    }

    console.log('Data saved to the database:', result);

    // Send email to both the user and your email
    const mailOptions = {
      from: email,
      to: ["n.chaminducodez@gmail.com", email], // Send to both your email and the user's email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
        Interested in: ${interestsString}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error); // Log error if sending fails
        return res.status(500).send("Error sending email");
      }
      console.log('Email sent:', info);  // Log the successful email send
      res.status(200).send("Email sent successfully and data saved");
    });
  });
});

app.get("/api/getemaildetails", (req, res) => {
  // Query to get all entries from the email_details table
  const query = "SELECT * FROM email_details";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err); // Log error if fetching fails
      return res.status(500).send("Error fetching data from the database");
    }

    console.log('Fetched data from the database:', results);

    // Send the fetched data as a JSON response 
    res.status(200).json(results);
  });
});




// API endpoint to fetch career names to the career page
app.get('/api/careers', (req, res) => {
  const query = 'SELECT name FROM careers';  // Fetch career names from the careers table
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching careers:', err);
      res.status(500).json({ error: 'Failed to fetch career data' });
    } else {
      res.json(results); // Send the career names to the frontend
    }
  });
});

// Route to get career details by title (previously name)
app.get('/api/career/:title', (req, res) => {
  const { title } = req.params;  // Get career title from the URL parameter

  console.log('Received career title:', title);  // Debugging line

  // Use the career title to query the database
  const query = `
    SELECT title, job_type, description, bullet_points ,shortdis,shortTitle
    FROM careers 
    WHERE title = ?`; // Updated column name to 'title'

  db.query(query, [title], (err, results) => {
    if (err) {
      console.error('Error fetching career details:', err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      console.log('Career not found for title:', title);  // Debugging line
      return res.status(404).send('Career not found');
    }

    // Send the career details back as JSON
    res.json(results[0]);
  });
});





// Get all career data
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM careers"; // Updated table name
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.json(results);
  });
});




// API route to save career data
app.post("/api/save", (req, res) => {
  const { title, jobType, description, bulletPoints,shortdis,shortTitle } = req.body;

  if (!title || !jobType || !description) {
    return res.status(400).send({ message: "Title, Job Type, and Description are required." });
  }

  const query = `
    INSERT INTO careers (title, job_type, description, bullet_points,shortdis,shortTitle)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [title, jobType, description, bulletPoints, shortdis,shortTitle], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send({ message: "Failed to save data" });
    }
    res.status(200).send({ message: "Career added successfully" });
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Middleware
app.use(cors());

// Set up storage with destination and filename customization
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.post('/api/submit-application', upload.single('cv'), async (req, res) => {
  const { name, email, contactNumber, position, linkedin, nic } = req.body;
  const cvFile = req.file;

  try {
    // Check if the uploaded file is a PDF
    if (cvFile && cvFile.mimetype === 'application/pdf') {
      // Insert form data into the database
      const query = `
        INSERT INTO applications (name, email, contact_number, position, linkedin, nic, cv_path)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(
        query,
        [name, email, contactNumber, position, linkedin, nic, cvFile.path],
        (err) => {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database error');
          }
        }
      );

      // Set up email with nodemailer
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'lahiru.20211349@iit.ac.lk',
          pass: 'sbxz mpde zffe dctg',
        },
      });

      const mailOptions = {
        from: 'lahiru.20211349@iit.ac.lk',
        to: 'lahiru.20211349@iit.ac.lk',
        subject: 'New Job Application',
        text: `You have received a new job application from ${name} for the position of ${position}.
        
        Contact Information:
        - Email: ${email}
        - Contact Number: ${contactNumber}
        - LinkedIn: ${linkedin}
        - NIC: ${nic}
        
        Position: ${position}`,
        attachments: [
          {
            filename: cvFile.originalname,
            path: cvFile.path,
          },
        ],
      };

      // Send email with the form details and the CV attachment
      await transporter.sendMail(mailOptions);

      res.status(200).send('Application submitted successfully');
    } else {
      return res.status(400).send('Please upload a valid PDF file');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

// API route to fetch applications from the database
app.get("/api/applications", (req, res) => {
  const query = "SELECT * FROM applications ORDER BY created_at DESC"; // Fetch all applications sorted by creation date
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).send("Error fetching data");
    }
    res.json(results); // Send the data back to the frontend as JSON
  });
});

// POST route to handle form submissions
app.post("/api/apply", upload.single("image"), async (req, res) => {
  const { name, email, contactNumber, nicNumber, linkedinProfile, position, message } = req.body;
  const file = req.file;

  try {
    // Save the form data into the career_details table
    const query = `
      INSERT INTO career_details (name, email, contactNumber, nicNumber, linkedinProfile, position, message, filePath)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    // If there is an uploaded file, save its path; otherwise, save NULL
    const filePath = file ? file.path : null;

    // Wrapping the db.query in a Promise to allow using await
    const saveDataToDb = new Promise((resolve, reject) => {
      db.query(query, [name, email, contactNumber, nicNumber, linkedinProfile, position, message, filePath], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Wait for the data to be saved to the database
    await saveDataToDb;

    console.log('Data saved to the database');

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "n.chaminducodez@gmail.com", // Replace with your email
        pass: "ehbc wrmr tuav ceay", // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: "n.chaminducodez@gmail.com",  // Your email address
      to: ["n.chaminducodez@gmail.com", email],  // Send to both your email and the user's email
      subject: `Job Application from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNumber}
        NIC Number: ${nicNumber}
        LinkedIn Profile: ${linkedinProfile}
        Position: ${position}
        Message: ${message}
      `,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path,
      }] : [],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Application submitted successfully!");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to submit the application.");
  }
});




//#######################################################################################

// Get all careers
// Fetch careers from DB
app.get('/api/careerdetails', (req, res) => {
  const query = 'SELECT id, title, job_type, description, bullet_points, shortdis, shortTitle FROM careers';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send data to frontend
    }
  });
});


// Delete a career
app.delete('/api/careerdetails/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM careers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Career deleted successfully.' });
    }
  });
});

// Update a career
app.put('/api/careerdetails/:id', (req, res) => {
  const { id } = req.params;
  const { title, job_type, description, bullet_points, shortdis, shortTitle } = req.body;
  const query = `
    UPDATE careers 
    SET title = ?, job_type = ?, description = ?, bullet_points = ?, shortdis = ?, shortTitle = ?
    WHERE id = ?`;
  db.query(query, [title, job_type, description, bullet_points, shortdis, shortTitle, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Career updated successfully.' });
    }
  });
});




