import React from 'react';
import alvanBackground from '../assets/images/alvan-background.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${alvanBackground})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white fade-in">
        <h1 className="text-6xl font-bold mb-4 text-accent">Alvan Al Rakib</h1>
        <p className="text-3xl mb-8">Musician & Director</p>
        <a href="#music" className="btn btn-primary">
          Listen to My Music
        </a>
      </div>
    </section>
  );
};

export default Home;