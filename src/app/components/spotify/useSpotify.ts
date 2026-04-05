import { useState, useEffect } from 'react';

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: { spotify: string };
  preview_url?: string;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  images: Array<{ url: string }>;
  external_urls: { spotify: string };
  genres?: string[];
  followers?: { total: number };
}

export interface NowPlayingData {
  isPlaying: boolean;
  item?: {
    name: string;
    artists: Array<{ name: string }>;
    album: {
      name: string;
      images: Array<{ url: string }>;
    };
    external_urls: { spotify: string };
    duration_ms: number;
    progress_ms?: number;
  };
}

export function useSpotify(type: 'all' | 'now-playing' | 'top-tracks' | 'top-artists' = 'all') {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSpotifyData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/spotify?type=${type}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Spotify data');
        }

        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          setData(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSpotifyData();

    // Refresh data every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [type]);

  return { data, isLoading, error };
}
