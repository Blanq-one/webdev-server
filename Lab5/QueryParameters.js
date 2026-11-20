import calculate from "./calculate.js";

export default function QueryParameters(app) {
  app.get("/lab5/calculator", (req, res) => {
    const { operation, a, b } = req.query;
    calculate(res, operation, a, b);
  });
}
