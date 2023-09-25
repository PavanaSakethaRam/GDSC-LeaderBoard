const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const metadata = await googleSheets.spreadsheets.get({
      auth: auth,
      spreadsheetId: '1NDGDGMEAGCDXJXs_NranDLGHVIGTAYr5PCiwJdm3Io4'
    });

    const response = await googleSheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: '1NDGDGMEAGCDXJXs_NranDLGHVIGTAYr5PCiwJdm3Io4',
      range: 'Sheet1'
    });

    // Extract rows and remove the first row (headings)
    const dataWithoutHeadings = response.data.values.slice(1);

    // Sort the rows by score (assuming score is in the third column)
    const sortedRows = dataWithoutHeadings.sort((a, b) => {
      const scoreA = parseInt(a[2]) || 0;
      const scoreB = parseInt(b[2]) || 0;
      return scoreB - scoreA; // Sort in descending order
    });

    res.send(sortedRows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
