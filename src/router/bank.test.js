const supertest = require("supertest");

const app = require("../app");

describe("Test GET /users, all users", () => {
  test("Should return 200 status code", async () => {
    const response = await supertest(app).get("/users").expect(200);
    // expect(response).toBe(200);
  });
});

describe("Test POST /users, new users", () => {});

describe("Test GET /users/:username, specific user", () => {});

describe("Test PUT /users/:id, modify user's data", () => {});
