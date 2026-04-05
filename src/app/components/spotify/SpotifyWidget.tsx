'use client';

import { NowPlaying } from './NowPlaying';

export function SpotifyWidget() {
  return (
    <section>
      <div>
        <h2 className="text-xl font-light text-gray-100 mb-6 tracking-tight">spotify</h2>
        <NowPlaying />
      </div>
    </section>
  );
}
