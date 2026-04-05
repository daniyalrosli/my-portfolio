'use client';

import { useSpotify, NowPlayingData } from './useSpotify';

export function NowPlaying() {
  const { data, isLoading } = useSpotify('now-playing');
  
  const nowPlaying = data?.nowPlaying as NowPlayingData | undefined;
  const isPlaying = nowPlaying?.isPlaying;
  const track = nowPlaying?.item;

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg w-full"></div>
        <div className="space-y-2">
          <div className="h-5 bg-gray-700 rounded-sm w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded-sm w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="text-center py-6 text-gray-600">
        <div className="text-sm font-light">not playing</div>
      </div>
    );
  }

  return (
    <a
      href={track.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="group block space-y-4 cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-900 aspect-square rounded-sm">
        {track.album.images[0] && (
          <img
            src={track.album.images[0].url}
            alt={track.album.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        )}
        {isPlaying && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1 h-2 bg-white rounded-full"
                style={{
                  animation: `pulse 0.6s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-xs text-gray-500 uppercase tracking-widest">
          {isPlaying ? 'now playing' : 'last played'}
        </div>
        <h3 className="text-lg font-light text-gray-100 leading-tight group-hover:text-white transition-colors">
          {track.name}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {track.artists.map((a) => a.name).join(', ')}
        </p>
      </div>
    </a>
  );
}
