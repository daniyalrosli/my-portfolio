import { NextRequest, NextResponse } from 'next/server';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
}

async function getNowPlaying(access_token: string) {
  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) {
      // No content - nothing is playing
      return {
        isPlaying: false,
        item: null,
      };
    }

    if (response.status === 200) {
      const song = await response.json();
      return {
        isPlaying: song.is_playing,
        ...song,
      };
    }

    return null;
  } catch (error) {
    console.error('getNowPlaying error:', error);
    return null;
  }
}

async function getTopTracks(access_token: string) {
  try {
    const response = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=5&time_range=medium_term`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await response.json();
    return data.items || [];
  } catch {
    return [];
  }
}

async function getTopArtists(access_token: string) {
  try {
    const response = await fetch(`${TOP_ARTISTS_ENDPOINT}?limit=5&time_range=medium_term`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await response.json();
    return data.items || [];
  } catch {
    return [];
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';

    const { access_token, error } = await getAccessToken();

    if (error) {
      return NextResponse.json({ error: 'Failed to get access token' }, { status: 401 });
    }

    if (type === 'now-playing' || type === 'all') {
      const [nowPlaying, topTracks, topArtists] = await Promise.all([
        getNowPlaying(access_token),
        type === 'all' ? getTopTracks(access_token) : Promise.resolve([]),
        type === 'all' ? getTopArtists(access_token) : Promise.resolve([]),
      ]);

      return NextResponse.json({
        nowPlaying,
        ...(type === 'all' && { topTracks, topArtists }),
      });
    }

    if (type === 'top-tracks') {
      const topTracks = await getTopTracks(access_token);
      return NextResponse.json({ topTracks });
    }

    if (type === 'top-artists') {
      const topArtists = await getTopArtists(access_token);
      return NextResponse.json({ topArtists });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    console.error('Spotify API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
