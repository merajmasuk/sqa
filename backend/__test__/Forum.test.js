const supertest = require("supertest");
const app = require("../app");

describe('Forum', () => {
    describe('Send a Post request to forum API and check if it pass', () => {
        it('should return a 404 for an unknown email', async () => {
            const userMessage1 = {
                name: "Abdul Mukit",
                email: "mdabdulmukit98@gmail.com",
                message: "Hello World Haliban"
            }
            await supertest(app)
                .post("/api/v1/setForum") 
                .send(userMessage1)
                .expect(200);
        });

        it('send wrong information and recieve unsuccess', async () => {
            const wrongMessageInfo = {
                email: "mdraselislam1944@gmail.com",
                password: "12345",
            }
            await supertest(app)
                .post("/api/v1/setForum") 
                .send(wrongMessageInfo)
                .expect(200);
        });
        it('send incorrect rout and recieve 404', async () => {
            const validUserInfo = {
                name: "Habib",
                email: "habib@gmail.com",
                message: "123456",
            }
            await supertest(app)
                 .post("/api/v1/setForums") 
                .send(validUserInfo)
                .expect(404);
        });


       it('Send GET request and recieve HTTP OK', async () => {
        
        await supertest(app)
            .get("/api/v1/getForum") 
            .expect(200);
    });
    });
});