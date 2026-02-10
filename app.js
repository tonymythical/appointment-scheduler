import express from "express";

const app = express();

const PORT = 3333;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });


const appointments = [];

app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirmation', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
})

app.get('/admin', (req, res) => {
  res.send(appointments);
});

app.post('/submit-appointment', (req, res) => {
  
  const appointment = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date()
  };
  
  appointments.push(appointment);
  
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});