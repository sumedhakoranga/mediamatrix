// const process = require('process');
// const { IncomingForm } = require('formidable');

// exports.handler = async (event, context) => {
//   if (event.httpMethod !== 'POST') {
//     return { statusCode: 405, body: 'Method Not Allowed' };
//   }

//   const form = new IncomingForm();
//   return new Promise((resolve, reject) => {
//     form.parse(event, (err, fields, files) => {
//       if (err) {
//         reject({ statusCode: 500, body: String(err) });
//         return;
//       }
//       console.log('Uploaded file:', files.file);
//       resolve({
//         statusCode: 200,
//         body: JSON.stringify({ message: "File uploaded successfully", file: files.file }),
//       });
//     });
//   });
// };
