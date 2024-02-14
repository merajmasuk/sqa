const express = require('express');
const http = require('http');
const querystring = require('querystring');
const app = express();

// Express middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/sendSms', async (req, res) => {
    // Get the data from the request
    const { token, to, message } = req.body;

    // Construct the POST data
    const postData = querystring.stringify({
        token,
        to,
        message
    });

    const options = {
        hostname: 'api.greenweb.com.bd',
        path: '/api.php',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const smsReq = http.request(options, function (smsRes) {
        let data = '';

        smsRes.setEncoding('utf8');

        smsRes.on('data', function (chunk) {
            data += chunk;
        });

        smsRes.on('end', function () {
            console.log('SMS Response:', data);
            res.send(data); // Send the SMS response to the client
        });
    });

    smsReq.on('error', function (e) {
        console.error('Problem with SMS request:', e.message);
        res.status(500).send('Error sending SMS');
    });

    smsReq.write(postData);
    smsReq.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
