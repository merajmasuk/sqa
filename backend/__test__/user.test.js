const supertest = require("supertest");
const app = require("../app");

describe('user', () => {
    describe('GET a user with valid login information', () => {
        it('should return a 400 for an unknown email', async () => {
            const userInfo = {
                email: "mdraselislam19424@gmail.com",
                password: "1234",
            }
            await supertest(app)
                .post("/api/v1/getUser") 
                .send(userInfo)
                .expect(404);
        });
        it('should return a 200 for valid login information', async () => {
            const validUserInfo = {
                email: "mdraselislam1944@gmail.com",
                password: "1234",
            }
            await supertest(app)
                .post("/api/v1/getUser") 
                .send(validUserInfo)
                .expect(200);
        });
        it('should return a 400 for wrong password', async () => {
            const validUserInfo = {
                email: "mdraselislam1944@gmail.com",
                password: "123456",
            }
            await supertest(app)
                .post("/api/v1/getUser") 
                .send(validUserInfo)
                .expect(400);
        });
    });
});



