'use client';

import { useSpotify, SpotifyArtist } from './useSpotify';

export function TopArtists() {
  const { data, isLoading } = useSpotify('top-artists');
  const artists = data?.topArtists as SpotifyArtist[] | undefined;

  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-800 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (!artists || artists.length === 0) {
    return <div className="text-gray-600 text-sm font-light opacity-50">loading...</div>;
  }

  return (
    <div className="space-y-2">
      {artists.map((artist, i) => (
        <a
          key={artist.id}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 py-2.5 px-4 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-900/50 backdrop-blur-sm transition-all duration-200"
        >
          <div className="text-xs text-gray-600 font-light mt-0.5">{String(i + 1).padStart(2, '0')}</div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-light text-gray-200 truncate group-hover:text-white transition-colors">
              {artist.name}
            </h4>
            {artist.genres && artist.genres.length > 0 && (
              <p className="text-xs text-gray-500 truncate">
                {artist.genres.slice(0, 2).join(', ')}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
