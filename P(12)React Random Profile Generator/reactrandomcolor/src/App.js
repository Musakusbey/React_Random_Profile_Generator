import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "./styles.scss";

const App = () => {
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfilName] = useState("");
  const [profileCell, setProfilCell] = useState("");
  const [profileEmail, setProfilEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfilCell(res.data.results[0].cell);
      setProfilEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picturelarge);
      setProfilName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <div className="profileContainer">
        <img id="img" src={profileImage} />
        <h1>{profileName}</h1>
        <p>{profileEmail}</p>
        <p>{profileCell}</p>
        <button onClick={profileData} class="button">
          {" "}
          Click For New Profile
          <div class="button__horizontal"></div>
          <div class="button__vertical"></div>
        </button>
      </div>
    </div>
  );
};
export default App;
