import React from 'react';
import './App.scss';
import Carousel from './Carousel';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

const images = [image1, image2, image3, image4];

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Carousel images={images} cycle={true} />
    </div>
  );
};

export default App;
