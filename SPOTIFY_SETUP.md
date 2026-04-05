# Spotify Integration Setup Guide

This guide will help you set up the Spotify API integration for your portfolio to display your currently playing track, top tracks, and top artists.

## Step 1: Create a Spotify Application

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (create one if needed)
3. Click "Create an App"
4. Accept the terms and create the app
5. You'll see your **Client ID** and **Client Secret** - save these

## Step 2: Set Up Spotify Authorization

After creating your app, you need to obtain a refresh token. Here's how:

### Option A: Using the Authorization Code Flow (Recommended)

1. Replace the following values in the URL and open it in your browser:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-top-read
```

2. You'll be redirected to a URL with an authorization code. Copy the `code` parameter.

3. Open your terminal and run:

```bash
curl -X POST https://accounts.spotify.com/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=CODE_FROM_STEP_2&redirect_uri=http://localhost:3000/api/spotify/callback&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
```

4. From the response, copy the `refresh_token` value.

### Option B: Using a Refresh Token Generator

You can also use this online tool: [Spotify Refresh Token Generator](https://www.spotify.com/us/account/apps/)

## Step 3: Set Environment Variables

Create a `.env.local` file in the root of your Next.js project:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID
SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN=YOUR_REFRESH_TOKEN
```

**Important**:

- `NEXT_PUBLIC_SPOTIFY_CLIENT_ID` starts with `NEXT_PUBLIC_` so it's exposed to the browser (this is safe for a public app)
- The other two variables are private and only used on the server side
- Never commit this file to version control

## Step 4: Set Up Redirect URI (Optional but Recommended)

1. Go back to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click on your app
3. Go to "Edit Settings"
4. Add these Redirect URIs:
   - `http://localhost:3000` (for local development)
   - `https://yourdomain.com` (for production)
   - `https://yourdomain.com/api/spotify/callback` (if using callback flow)

## Step 5: Required Scopes

The integration uses these Spotify API scopes:

- `user-read-currently-playing` - To display what you're currently playing
- `user-top-read` - To display your top tracks and artists

These are already configured in the authorization URL above.

## Troubleshooting

### "Failed to get access token"

- Check that your Client ID, Client Secret, and Refresh Token are correct
- Ensure they're in the `.env.local` file
- Verify the refresh token hasn't expired (tokens can expire if not used for a while)

### Data not showing up

- Check browser console for errors
- Verify the API route is accessible at `/api/spotify`
- Make sure the Spotify app permissions are granted

### Getting a new Refresh Token

If your refresh token expires, repeat Step 2 to generate a new one.

## Testing Locally

1. Add the environment variables to `.env.local`
2. Start your dev server: `npm run dev`
3. Navigate to your homepage
4. You should see the Spotify widget with your currently playing track, top tracks, and top artists

## Deployment

When deploying to production:

1. Set the same environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Other platforms: Check their documentation for environment variables

2. Make sure to update the Redirect URI in Spotify Developer Dashboard to your production domain

## Privacy Note

The integration only reads your Spotify data. It does not modify anything or have access to sensitive information beyond currently playing track and top items. Your refresh token is never exposed to the client.
