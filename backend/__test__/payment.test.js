const supertest = require("supertest")
const app = require("../app")


describe('Payment', () => {
    describe('Send a Post request to payment API and check if it pass', () => {
        it('should return a 404 for an unknown email', async () => {
            const userMessage1 = {
                gateway: "bKash",
                amount: "1000",
                currency: "BDT"
            }
            await supertest(app)
                .post("/api/v1/setPayment") 
                .send(userMessage1)
                .expect(200);
        });

        it('send wrong information and recieve unsuccess', async () => {
            const wrongMessageInfo = {
                amount: "mdraselislam1944@gmail.com",
                currency: "12345",
            }
            await supertest(app)
                .post("/api/v1/setPayment") 
                .send(wrongMessageInfo)
                .expect(200);
        });
        it('send incorrect rout and recieve 404', async () => {
            const validUserInfo = {
                gateway: "bKash",
                amount: "1000",
                currency: "BDT",
            }
            await supertest(app)
                 .post("/api/v1/setPayment") 
                .send(validUserInfo)
                .expect(404);
        });


       it('Send GET request and recieve HTTP OK', async () => {

        await supertest(app)
            .get("/api/v1/getPayment") 
            .expect(200);
    });
    });
});
