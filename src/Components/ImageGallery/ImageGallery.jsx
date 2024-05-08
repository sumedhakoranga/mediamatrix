import React, { useState, useEffect } from 'react';

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]); 
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100); 
  const [fit, setFit] = useState('contain');
  const [position, setPosition] = useState('center'); 
  const [format, setFormat] = useState('webp'); 
  const [quality, setQuality] = useState(75); 

 const buildImageUrl = () => {
  const imagePath = selectedImage.url.substring(selectedImage.url.lastIndexOf('/'));
  const url = `https://cheerfull.netlify.app/.netlify/images/d=${imagePath}&w=${width * 10}&h=${height * 10}&fit=${fit}&position=${position}&fm=${format}&q=${quality}`;
  console.log(url); 
  return url;
};


  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            style={{ width: '10%', cursor: 'pointer', border: '2px solid black' }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '60%', minHeight: '300px', padding: '10px', border: '5px dashed blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <img
            src={buildImageUrl()}
            alt={selectedImage.alt}
            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '10px' }}
            onError={(e) => { e.target.onerror = null; e.target.src = '/img2.png'; }}
          />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>
              Adjust Width:
              <input
                type="range"
                min="10"
                max="300"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </label>
            <label>
              Adjust Height:
              <input
                type="range"
                min="10"
                max="300"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <label>
              Format:
              <select value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="webp">WebP</option>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
                <option value="gif">GIF</option>
              </select>
            </label>
            <label>
              Fit:
              <select value={fit} onChange={(e) => setFit(e.target.value)}>
                <option value="contain">Contain</option>
                <option value="cover">Cover</option>
                <option value="fill">Fill</option>
              </select>
            </label>
            <label>
              Position:
              <select value={position} onChange={(e) => setPosition(e.target.value)}>
                <option value="center">Center</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </label>
            <label>
              Quality:
              <input
                type="range"
                min="1"
                max="100"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
