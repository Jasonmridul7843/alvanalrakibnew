import React from 'react';
import { Music as MusicIcon, Youtube, Headphones } from 'lucide-react';

const albums = [
  { id: '7IVPrlUHzfYTvUpnCp18AJ', title: 'Album 1' },
  { id: '3s0jZi5tc5GY2dSAEILxmT', title: 'Album 2' },
  { id: '3sQXzFsuy7uk77PpXonD77', title: 'Album 3' },
  { id: '7p4xVBHHjcbPrTIWHnCJqU', title: 'Album 4' },
];

const musicLinks = [
  { icon: MusicIcon, url: 'https://open.spotify.com/artist/0gArFuWAtmg0jxLJ5Y1a2T', label: 'Spotify' },
  { icon: MusicIcon, url: 'https://music.apple.com/us/artist/alvan-al-rakib/1638211065', label: 'Apple Music' },
  { icon: Youtube, url: 'https://www.youtube.com/channel/UChcrU22Q1FKFesDjr7thi_g', label: 'YouTube' },
  { icon: Headphones, url: 'https://tidal.com/browse/artist/36448791', label: 'Tidal' },
];

const MusicSection: React.FC = () => {
  return (
    <section id="music" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Music</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {albums.map((album) => (
            <div key={album.id} className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 fade-in">
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/album/${album.id}?utm_source=generator`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={album.title}
              ></iframe>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Listen on Your Favorite Platform</h3>
          <div className="flex justify-center space-x-6">
            {musicLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-opacity-80 transition duration-300"
              >
                <link.icon className="w-8 h-8" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;