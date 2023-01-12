const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const port = 8080;

const empList = [
  {
    name: "mahesh",
    dept: "IT",
    id: 1,
    date_of_joining: "2011/10/21",
  },
  {
    name: "suresh",
    dept: "HR",
    id: 2,
    date_of_joining: "2010/10/21",
  },
  {
    name: "ramesh",
    dept: "IT",
    id: 3,
    date_of_joining: "2009/10/21",
  },
  {
    name: "yogesh",
    dept: "FINANCE",
    id: 4,
    date_of_joining: "2021/10/11",
  },
  {
    name: "jignesh",
    dept: "IT",
    id: 5,
    date_of_joining: "2001/10/01",
  },
  {
    name: "aneesh",
    dept: "HR",
    id: 6,
    date_of_joining: "2015/10/08",
  },
  {
    name: "akhilesh",
    dept: "FINANCE",
    id: 7,
    date_of_joining: "2021/10/21",
  },
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/employeList", (req, res) => {
  res.json(empList);
});

app.get("/employee/:id", (req, res) => {
  let emp = empList[parseInt(req.params.id) - 1];

  res.json(emp);
});

app.post("/updateList", (req, res) => {
  console.log("reqqqq:", req.body);
  res.status(201).send("Updated User");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
