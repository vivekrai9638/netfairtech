const request = require("supertest");
const app = require("../app");
const { userOne, userOneId, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("should create new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Ankit",
      email: "ankit@example.com",
      age: 21,
      password: "Test234!",
    })
    .expect(201);
});
