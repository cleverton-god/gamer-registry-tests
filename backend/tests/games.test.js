const request = require("supertest");
const app = require("../backend/server");

test("teste básico", () => {
  expect(1 + 1).toBe(2);
});