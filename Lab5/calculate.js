const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function toNumber(value) {
  if (typeof value !== "string" || value.trim() === "") return NaN;
  return Number(value);
}

// Sends the result as a string, or a 400 with a message for bad input.
// res.send(42) would be treated as a status code, hence String(result).
export default function calculate(res, operation, rawA, rawB) {
  // Object.hasOwn keeps inherited names like toString, constructor, and
  // __proto__ from being treated as operations.
  if (typeof operation !== "string" || !Object.hasOwn(operations, operation)) {
    res
      .status(400)
      .send(
        `Unknown operation "${operation}". Use add, subtract, multiply, or divide.`
      );
    return;
  }
  const a = toNumber(rawA);
  const b = toNumber(rawB);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    res.status(400).send("Both a and b must be numbers.");
    return;
  }
  if (operation === "divide" && b === 0) {
    res.status(400).send("Cannot divide by zero.");
    return;
  }
  res.send(String(operations[operation](a, b)));
}
