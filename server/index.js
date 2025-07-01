require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Job model
const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  minSalary: String,
  maxSalary: String,
  jobType: String,
  deadline: String,
  description: String,
}, { timestamps: true });
const Job = mongoose.model('Job', jobSchema);

// Routes
app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.post('/api/jobs', async (req, res) => {
  try {
    console.log('Received job:', req.body); // Log incoming data
    const job = new Job(req.body);
    await job.save();
    console.log('Saved job:', job); // Log saved job
    res.status(201).json(job);
  } catch (err) {
    console.error('Error saving job:', err);
    res.status(500).json({ error: 'Failed to save job' });
  }
});

// Route to add dummy jobs for testing
app.post('/api/jobs/dummy', async (req, res) => {
  const dummyJobs = [
    {
      title: 'Full Stack Developer',
      company: 'Amazon',
      location: 'Chennai',
      salary: '12LPA',
      minSalary: '10',
      maxSalary: '15',
      jobType: 'FullTime',
      deadline: '2025-07-22',
      description: 'Work on scalable web applications.'
    },
    {
      title: 'Node.js Developer',
      company: 'Tesla',
      location: 'Bangalore',
      salary: '14LPA',
      minSalary: '12',
      maxSalary: '18',
      jobType: 'FullTime',
      deadline: '2025-08-01',
      description: 'Develop backend services for electric vehicles.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Swiggy',
      location: 'Hyderabad',
      salary: '10LPA',
      minSalary: '8',
      maxSalary: '12',
      jobType: 'Internship',
      deadline: '2025-09-15',
      description: 'Design user interfaces for food delivery platform.'
    }
  ];
  try {
    const jobs = await Job.insertMany(dummyJobs);
    res.status(201).json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert dummy jobs' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 