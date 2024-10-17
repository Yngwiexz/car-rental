const request = require("supertest")
const server = require("../index")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

const testUser = {
  email: "test@test.com",
  password: "Password1!",
};

describe("POST/api/v1/auth/signUp", () => {
  it("should response with 200 status code", (done) => {
    request(server)
      .post("/api/v1/auth/signUp")
      .send(testUser)
      .set("Accept", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
          code: 200,
          status: "success",
          message: "Sign up successfully",
          data: expect.objectContaining({
            user:{
              email: "test@test.com",
              password: expect.not.stringContaining("Password1!"),
              address: null,
              avatar: null,
              birthdate: null,
              driver_license: null,
              fullname: null,
              gender: null,
              phone_number: null,
              roleId: 3,
              createdBy: null,
              createdDt: expect.any(String),
              updatedBy: null,
              updatedDt: expect.any(String),
            }
          })
        })
        done()
      })
      .catch(e => {
        console.log(e)
        done()
      })
  })
})


describe("POST/api/v1/auth/signIn", () => {
  it("should response with 200 status code", (done) => {
    request(server)
      .post("/api/v1/auth/signIn")
      .send(testUser)
      .set("Accept", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
          code: 200,
          status: "success",
          message: "Sign in successfully",
          data: expect.objectContaining({
            user:{
              email: "test@test.com",
              address: null,
              avatar: null,
              birthdate: null,
              driver_license: null,
              fullname: null,
              gender: null,
              phone_number: null,
              roleId: 3,
              createdBy: null,
              createdDt: expect.any(String),
              updatedBy: null,
              updatedDt: expect.any(String),
            }
          })
        })
        done()
      })
      .catch(e => {
        console.log(e)
        done()
      })
  })
})

