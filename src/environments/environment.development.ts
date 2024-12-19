export const environment = {
  production: false,
};

export const config = {
  clientId: 'b82d81cab3f34476880a1dbed5ad6799',
  authUrl: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-email',
    'user-read-private',
  ],
};
