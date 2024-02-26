const supertest = require("supertest");
const app = require("../app");

describe('user', () => {
    describe('GET a committee information set in database various stage', () => {

        it('should return a 401 for unauthorized user', async () => {
            const userInfo = {
                committeeName: "tour management",
                committeeYear: "2023",
                committeeDetail: "the committee is responsive of the calculation"
            }

            await supertest(app)
                .post("/api/v1/setCommittee")
                .send(userInfo)
                .expect(401);
        });

        // Assuming your API returns a token in the response
        const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kcmFzZWxpc2xhbTE5NDRAZ21haWwuY29tIiwibW9iaWxlIjoiMDE3MjU2MDE5NDQiLCJuYW1lIjoiUmFzZWwiLCJyb2xlIjoiYWRtaW4iLCJfaWQiOiI2NWNhNGUxMTljZDM0YTM5NjAzYjI2MjEiLCJpYXQiOjE3MDg5MzIyMjksImV4cCI6MTcwODkzNTgyOX0.47DzT-Ajf4HIjMRZ8BJRFVq64LUHnlLrZzhsEQQOsUk"

        it('should return a 404 for invalid information', async () => {
            const userInfo = {
                committeeName: "tour management",
                committeeYear: "2023",
                committeeDetail: "the committee is responsive of the calculation"
            }

            await supertest(app)
                .post("/api/v1/setCommittee")
                .set('Authorization', `Bearer ${token1}`)
                .send(userInfo)
                .expect(403);
        });

        // Assuming your API returns a token in the response
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kcmFzZWxpc2xhbTE5NDRAZ21haWwuY29tIiwibW9iaWxlIjoiMDE3MjU2MDE5NDQiLCJuYW1lIjoiUmFzZWwiLCJyb2xlIjoiYWRtaW4iLCJfaWQiOiI2NWNhNGUxMTljZDM0YTM5NjAzYjI2MjEiLCJpYXQiOjE3MDg5MzcyNzcsImV4cCI6MTcwODk0MDg3N30.XbNZzN_gtnJ4O1TXgwc1uMUzBU6KV245RrdqcmYCj60"

        it('should return a 404 for invalid information', async () => {
            const userInfo = {
                committeeName: "tour management",
                committeeYear: "2023",
                committeeDetail: "the committee is responsive of the calculation"
            }

            await supertest(app)
                .post("/api/v1/setCommittee")
                .set('Authorization', `Bearer ${token}`)
                .send(userInfo)
                .expect(400);
        });

        it('should return a 200 for valid information set in database', async () => {
            const userInfo = {
                committeeName: "tour management",
                committeeYear: "2023",
                committeeDetail: "the committee is responsive of the calculation",
                committeeDesignation: [
                    {
                        "name": "John Doe",
                        "designation": "Chairperson"
                    },
                    {
                        "name": "Jane Smith",
                        "designation": "Secretary"
                    }
                ],
            }
            const response = await supertest(app)
                .post("/api/v1/setCommittee")
                .set('Authorization', `Bearer ${token}`)
                .send(userInfo)
                .expect(200);


            //     // Use the token in subsequent requests
            //     await supertest(app)
            //         .get("/api/v1/someEndpoint")
            //         .set('Authorization', `Bearer ${token}`)
            //         .expect(200);
            // });

            // it('should return a 400 for wrong password', async () => {
            //     const validUserInfo = {
            //         email: "mdraselislam1944@gmail.com",
            //         password: "123456",
            //     }
            //     await supertest(app)
            //         .post("/api/v1/getUser")
            //         .send(validUserInfo)
            //         .expect(400);
        });
    });
});
