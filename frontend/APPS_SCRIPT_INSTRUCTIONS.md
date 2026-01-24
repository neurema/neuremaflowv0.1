# Google Apps Script Setup for Waitlist

This guide explains how to set up the Google Apps Script to connect your "Join Waitlist" form to a Google Sheet.

## 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com).
2. Create a new sheet named "Neurema Waitlist" (or any name you prefer).
3. In the first row (the header), add the following columns:
   - **Column A**: `Timestamp`
   - **Column B**: `Name`
   - **Column C**: `Email`

## 2. Open Apps Script
1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. A new tab will open with a code editor.

## 3. Add the Code
Replace any existing code in the editor (usually `function myFunction() {...}`) with the following code:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data sent from the request
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var email = data.email;
    
    // Get the active spreadsheet and the first sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append a new row with timestamp, name, and email
    sheet.appendRow([new Date(), name, email]);
    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Added to waitlist' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error JSON response
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 4. Deploy as Web App
1. Click on the **Deploy** button (blue button, top right).
2. Select **New deployment**.
3. Click the "Select type" (gear icon) next to "Select type" and choose **Web app**.
4. Fill in the details:
   - **Description**: `Waitlist API`
   - **Execute as**: `Me` (your email)
   - **Who has access**: `Anyone` (IMPORTANT: This allows your backend to send data to the script without OAuth flows).
5. Click **Deploy**.
6. You may be asked to **Authorize access**. Click "Review permissions", choose your account, and if you see a "Google hasn't verified this app" warning, click "Advanced" > "Go to [Project Name] (unsafe)" > "Allow".

## 5. Get the URL
1. Copy the **Web App URL** provided after deployment (it starts with `https://script.google.com/macros/s/...`).

## 6. Configure Environment
1. Go to your frontend project root.
2. Create or edit `.env.local`.
3. Add the URL you copied:
   ```bash
   WAITLIST_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
4. Restart your development server (`npm run dev`) to load the new environment variable.

## Testing
1. Go to your landing page.
2. Enter a name and email.
3. Click "Join Waitlist".
4. Check your Google Sheet to see the new entry!
