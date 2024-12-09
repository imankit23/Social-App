# Social Music App

A Social Music App that allows users to listen to music, interact with their friends, and share playlists. This application provides a user-friendly interface for exploring and sharing music tracks from various sources.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## About

The **Social Music App** is designed to provide users with an interactive and engaging way to discover, share, and listen to music. The app allows users to:

- Stream music from different platforms
- Share and discover playlists
- Connect with friends and interact with their music choices

This app is built using **React.js**, **Node.js**, and integrates with **Spotify API** for music streaming.

## Features

- **User Authentication:** Users can sign up and log in using their credentials.
- **Playlist Creation:** Users can create custom playlists and share them with their friends.
- **Music Streaming:** Music tracks can be streamed directly within the app from Spotify.
- **Social Integration:** Users can follow friends and see what they are listening to in real-time.
- **Search:** Users can search for songs, albums, and artists easily.
- **Responsive Design:** The app is fully responsive and works seamlessly on mobile and desktop devices.

## Tech Stack

- **Frontend:** 
  - React.js
  - Redux (for state management)
  - React Router (for navigation)
  - Axios (for making API calls)
  - React Icons (for adding icons)
  
- **Backend:** 
  - Node.js
  - Express.js (for server-side routing)
  
- **APIs Integrated:** 
  - Spotify API (for music streaming)

## Installation

Follow these steps to install and set up the project on your local machine.

### Prerequisites

- **Node.js:** Ensure that you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
- **Git:** Make sure **Git** is installed. Download it from [here](https://git-scm.com/).

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Social-App.git

2. Navigate to the project directory:
   ```bash
   cd Social-App
   npm install
   REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
   REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   npm start





This will run the application locally at http://localhost:3000.

### Usage
   -Once the app is running, you can use the following features:

    -Sign Up/Login: Users can sign up and log in using their credentials. (For now, using Firebase Authentication)
    -Search for Music: Use the search bar to find music by artist, song, or album.
    -Create Playlists: Users can create and share playlists with friends.
    -Music Streaming: Stream music directly from Spotify via API integration.
    -Follow Friends: Users can follow other users and see what they are listening to in real-time.
