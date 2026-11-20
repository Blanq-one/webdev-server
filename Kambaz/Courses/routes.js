import db from "../Database/index.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    res.json(db.courses);
  });

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    res.json(db.modules.filter((module) => module.course === courseId));
  });
}
