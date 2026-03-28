# Cubbit - Reddit-like Social Platform

Cubbit is a modern, real-time social platform built with React, Firebase, and Cloudinary. It features a Reddit-like interface with post creation, image uploads, voting, and real-time updates.

## 🚀 Hosting Instructions

This project is prepared for multiple hosting environments.

### 1. GitHub Integration
To upload your code to GitHub:
1.  Go to the **Settings** menu (gear icon) in the top right of the AI Studio UI.
2.  Select **"Export to GitHub"**.
3.  Connect your GitHub account and create a new repository.

### 2. Vercel (Recommended for SPA)
Vercel is the easiest way to host React applications.
1.  Push your code to GitHub.
2.  Import the repository into Vercel.
3.  Add the following **Environment Variables** in the Vercel dashboard:
    - `VITE_CLOUDINARY_CLOUD_NAME`
    - `VITE_CLOUDINARY_UPLOAD_PRESET`
    - `VITE_CLOUDINARY_API_KEY`
4.  Vercel will automatically detect the Vite project and deploy it.

### 3. Custom Node.js Hosting (Full-Stack)
If you want to host on a custom server (VPS, Heroku, etc.), use the included `server.ts`.
1.  Run `npm install`.
2.  Build the project: `npm run build`.
3.  Start the server: `npm start`.
4.  The server will serve the static files from the `dist` folder and handle SPA routing.

## 🛠 Configuration

### Firebase Setup
The Firebase configuration is currently in `src/firebase.ts`. For production, it is recommended to move these to environment variables.

### Cloudinary Setup
1.  Create a Cloudinary account at [cloudinary.com](https://cloudinary.com).
2.  Go to **Settings > Upload** and create an **Unsigned Upload Preset** named `reddit_unsigned`.
3.  Copy your **Cloud Name**, **API Key**, and **Upload Preset** to your environment variables.

### Android APK
The `public/Cubbit.apk` file is a placeholder. Replace it with your actual Android APK file to enable the download functionality in the app.

## 📦 Scripts
- `npm run dev`: Start the development server (Express + Vite).
- `npm run build`: Build the frontend for production.
- `npm start`: Start the production Node.js server.
- `npm run lint`: Check for TypeScript errors.

## 📄 License
SPDX-License-Identifier: Apache-2.0
