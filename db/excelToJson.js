const xlsx = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = xlsx.readFile('cachly.xlsx');

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Define the range of cells containing headers
const headersRange = worksheet['A1:D1']; // Assuming headers are in cells A1 to D1

// Extract the header values
const headers = Object.values(headersRange).map(cell => cell.v);

// Convert the worksheet to JSON, including headers
const jsonData = xlsx.utils.sheet_to_json(worksheet, {
  range: 1, // Start from row 2 to skip the headers
  header: headers
});

// Write the JSON data to a file
fs.writeFileSync('cachly.json', JSON.stringify(jsonData, null, 2));

console.log('Conversion complete. JSON data saved to output.json.');