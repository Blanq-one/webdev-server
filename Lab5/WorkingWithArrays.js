const todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];

export default function WorkingWithArrays(app) {
  // The ?completed filter lives here on the base route, not on /:id.
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed === "true" || completed === "false") {
      const wanted = completed === "true";
      res.json(todos.filter((todo) => todo.completed === wanted));
      return;
    }
    res.json(todos);
  });

  app.get("/lab5/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      res.status(404).json({ message: `Todo with id ${req.params.id} not found` });
      return;
    }
    res.json(todo);
  });
}
