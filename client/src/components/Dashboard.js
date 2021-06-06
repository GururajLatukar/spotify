import React, { useState } from "react";
import axios from "axios";

function TrackList({ tracks }) {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>{track.name}</li>
      ))}
    </ul>
  );
}

function AlbumsList({ albums }) {
  const [tracks, setTracks] = useState([]);
  const handleSearchTracks = async (albumId) => {
    try {
      let res = await axios.get(`/api/artists/albums/tracks/${albumId}`);
      setTracks(res.data.songs.items);
    } catch (error) {}
  };
  return (
    <div>
      <ul>
        {albums.map((album) => (
          <li key={album.id} onClick={() => handleSearchTracks(album.id)}>
            <a href="#">{album.name}</a>
          </li>
        ))}
      </ul>
      <hr />
      <TrackList tracks={tracks} />
    </div>
  );
}

function ArtistList({ artistList }) {
  const [albums, setAlbums] = useState([]);
  const handleSearchAlbums = async (artistId) => {
    try {
      let res = await axios.get(`/api/artists/albums/${artistId}`);
      setAlbums(res.data.albums.items);
    } catch (error) {}
  };
  return (
    <div>
      <ul>
        {artistList.map((artist) => (
          <li key={artist.id} onClick={() => handleSearchAlbums(artist.id)}>
            <a href="#">{artist.name}</a>
          </li>
        ))}
      </ul>
      <hr />
      <AlbumsList albums={albums} />
    </div>
  );
}

function Dashboard(props) {
  const [artist, setArtist] = useState("");
  const [artistList, setArtistList] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.get(`/api/artists/${artist}`);
      setArtistList(res.data.artists.artists.items);
    } catch (error) {}
  };

  return (
    <div className="Dashboard">
      <a href="/api/logout">Logout</a>
      <p>Dashboard</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ArtistList artistList={artistList} />
    </div>
  );
}

export default Dashboard;
