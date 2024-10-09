import React from 'react';
import { Parallax } from 'react-parallax';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <Parallax
        bgImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        strength={500}
        bgClassName="opacity-30"
      >
        <div className="h-auto py-20">
          <div className="parallax-content">
            <h2 className="section-title">About Me</h2>
            <div className="max-w-4xl mx-auto text-center px-4">
              <p className="mb-4">
                I'm Alvan Al Rakib, also known as Rakibul Islam, a rising music producer and composer from Bangladesh, currently based in Atlanta, USA. My musical journey began in the vibrant streets of Dhaka, where I was captivated by the lively festivals filled with traditional music and rhythmic beats.
              </p>
              <p className="mb-4">
                My work primarily spans genres such as EDM and melodic techno, crafting enchanting beats and captivating melodies. I'm deeply influenced by albums like "Titanium" by David Guetta and works by Anyma, which reflect the energy and creativity that inspire my productions.
              </p>
              <p className="mb-4">
                One of my proudest achievements is my track "About You," which reached the No. 1 position on Canada's Deezer chart for 19 consecutive days. Other notable works include singles like "Lose Control" and "Mask Life," showcasing my versatility as a beat maker and music producer.
              </p>
              <p>
                In recent years, I've expanded my artistic vision by directing and producing several music videos, including "Love or Die" and "Blue Sky." My goal is to create music that resonates on a profound level, believing in the transformative power of sound to inspire and unite people across the globe.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default About;