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

  test("Should return 400 bad request formissing fields", async () => {
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

describe("Test GET /users/:username, specific user", () => {
  test("Should return 200 status code", async () => {
    const response = await supertest(app).get("/users/ianmng");

    expect(response.body).toMatchObject({
      id: 1001,
      username: "ianmng",
      fullName: "Ian Nava",
      email: "ianmng@gmail.com",
      password: "mybankpass",
      gender: "male",
      card: "student",
      creditCard: "",
      movements: [920.55, 9000, 20000, -5000, -100, 10000, -450, -3400],
      descriptionMove: [
        "Product sold",
        "Paycheck",
        "Product sold",
        "Liverpool",
        "KFC",
        "Product sold",
        "P.F. Changs",
        "Bar Margaritas",
      ],
    });
  });

  test("Should return 404 status code", async () => {
    await supertest(app)
      .get("/users/fatKiller")
      .expect("Content-type", /json/)
      .expect(404);
  });
});

describe("Test PUT /users/:id, modify user's data", () => {});
