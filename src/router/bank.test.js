const supertest = require("supertest");

const app = require("../app");

describe("Test GET /users, all users", () => {
  test("Should return 200 status code", async () => {
    const response = await supertest(app).get("/users").expect(200);
    // expect(response).toBe(200);
  });
});

describe("Test POST /users, new users", () => {
  test("Should return 201 created status code", async () => {
    await supertest(app)
      .post("/users")
      .send({
        username: "marcusFenix",
        fullName: "Marcus Fenix",
        email: "marcusF@gmail.com",
        password: "marcuspass",
        gender: "male",
        card: "student",
      })
      .expect("Content-type", /json/)
      .expect(201);
  });

  test("Should catch missing fields", async () => {
    await supertest(app)
      .post("/users")
      .send({
        username: "",
        fullName: "Marcus Fenix",
        email: "marcusF@gmail.com",
        password: "marcuspass",
        gender: "",
        card: "student",
      })
      .expect("Content-type", /json/)
      .expect(400);
  });
});

describe("Test GET /users/:username, specific user", () => {});

describe("Test PUT /users/:id, modify user's data", () => {});
