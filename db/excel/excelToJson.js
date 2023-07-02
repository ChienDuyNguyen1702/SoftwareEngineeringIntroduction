// Import thư viện xlsx
const XLSX = require('xlsx');
const fs = require('fs');

// Đường dẫn đến tệp tin Excel (.xlsx) cần đọc
const filePath = 'testcovid.xlsx';

// Đọc tệp tin Excel và chuyển đổi thành đối tượng JSON
const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Ghi đối tượng JSON vào tệp tin mới
fs.writeFile('testcovid.json', JSON.stringify(jsonData), (err) => {
  if (err) {
    console.error('Lỗi khi ghi file:', err);
  } else {
    console.log('Tạo file'+filePath+'JSON thành công!');
  }
});