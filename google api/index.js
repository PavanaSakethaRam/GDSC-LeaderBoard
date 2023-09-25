const express = require('express');
const {google} = require('googleapis');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: 'v4', auth: client});

    const metadata = await googleSheets.spreadsheets.get({
        auth:auth,
        spreadsheetId: '1NDGDGMEAGCDXJXs_NranDLGHVIGTAYr5PCiwJdm3Io4'
    });

    const getrows = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId: '1NDGDGMEAGCDXJXs_NranDLGHVIGTAYr5PCiwJdm3Io4',
        range: 'Sheet1'
    });
  res.send(getrows.data.values);
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
}
);