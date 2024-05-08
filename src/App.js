import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';

function App() {
   const images = [
    { url: '/assets/Images/img1.avif', alt: 'Description for image 1' },
    { url: '/assets/Images/img2.jpg', alt: 'Description for image 2' },
    { url: '/assets/Images/img3.jpg', alt: 'Description for image 3' },
    { url: '/assets/Images/img4.jpg', alt: 'Description for image 3' },
  ];
  return (
    <>
    <h1>My Image Gallery</h1>
    <ImageGallery images={images}/>
    </>
  );
}

export default App;
