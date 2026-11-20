import calculate from "./calculate.js";

export default function PathParameters(app) {
  app.get("/lab5/add/:a/:b", (req, res) => {
    calculate(res, "add", req.params.a, req.params.b);
  });
  app.get("/lab5/subtract/:a/:b", (req, res) => {
    calculate(res, "subtract", req.params.a, req.params.b);
  });
  app.get("/lab5/multiply/:a/:b", (req, res) => {
    calculate(res, "multiply", req.params.a, req.params.b);
  });
  app.get("/lab5/divide/:a/:b", (req, res) => {
    calculate(res, "divide", req.params.a, req.params.b);
  });
}
