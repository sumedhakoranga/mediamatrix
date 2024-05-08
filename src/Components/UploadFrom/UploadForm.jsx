// import React, { useState } from 'react';
// import axios from 'axios';

// function UploadForm() {
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState('');

//   const onFileChange = event => {
//     const file = event.target.files[0];
//     if (file) {
//       setFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('File uploaded successfully');
//       console.log('Server responded with:', response.data);
//     } catch (error) {
//       console.error('Upload error:', error);
//       alert('Error uploading file');
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="file" onChange={onFileChange} />
//       {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '100px', height: 'auto' }} />}
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// export default UploadForm;
