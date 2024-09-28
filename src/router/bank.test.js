const supertest = require("supertest");

const app = require("../app");

describe("Test GET /users, all users", () => {
  test("Should return 200 OK status code", async () => {
    const response = await supertest(app).get("/users").expect(200);
    // expect(response).toBe(200);
  });
});

describe("Test POST /users, new users", () => {
  test("Should return 201 Created status code", async () => {
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

  test("Should return 400 Bad request formissing fields", async () => {
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
  test("Should return 200 OK status code", async () => {
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

  test("Should return 404 Not found status code", async () => {
    await supertest(app)
      .get("/users/fatKiller")
      .expect("Content-type", /json/)
      .expect(404);
  });
});

describe("Test PUT /users/:id, modify user's data", () => {
  test("Should return 200 OK status code", async () => {
    await supertest(app)
      .put("/users/1003")
      .send({
        id: 1003,
        username: "babefox",
        fullName: "Megan Fox",
        email: "foxyMegan11@gmail.com",
        password: "MeganFoxPass",
        gender: "female",
        card: "checking",
        creditCard: "",
        movements: [20000, 4000, -2500, -6000, 1200, -899, -300, -890, 2000],
        descriptionMove: [
          "Paycheck",
          "Hollywood bonus",
          "Evelyn salon",
          "Best Buy",
          "Hollywood bonus",
          "Spaguetti Factory",
          "Starbucks",
          "Apple Store",
          "Hollywood bonus",
        ],
      })
      .expect("Content-type", /json/)
      .expect(200);
  });

  test("Should return 404 Not Found status code", async () => {
    await supertest(app)
      .put("/users/1008")
      .send({
        id: 1008,
        username: "fatKiller",
        fullName: "Mega FatKiller",
        email: "fatKiller11@gmail.com",
        password: "killerFat",
        gender: "male",
        card: "checking",
      })
      .expect("Content-type", /json/)
      .expect(404);
  });

  test("Should return 401 Unauthorized status code", async () => {
    await supertest(app)
      .put("/users/1001")
      .send({
        id: 1003,
        username: "babefox",
        fullName: "Megan Fox",
        email: "foxyMegan11@gmail.com",
        password: "MeganFoxPass",
        gender: "female",
        card: "checking",
      })
      .expect("Content-type", /json/)
      .expect(401);
  });
});
