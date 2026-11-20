const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2026-12-10",
  completed: false,
  score: 0,
};

const moduleObj = {
  id: "M101",
  name: "Introduction to Node.js",
  description: "Build HTTP servers with Node.js and Express",
  course: "CS4550",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.send(assignment.title);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObj);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.send(moduleObj.name);
  });
}
