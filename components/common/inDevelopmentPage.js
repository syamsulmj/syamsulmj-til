import React, { useState, useEffect } from 'react';
import Styles from '/styles/common/InDevelopmentPage.module.scss';

const InDevelopmentPage = () => {
  const [memesUrl, setMemesUrl] = useState("");

  useEffect(async () => {
    await getRandomMemes();
  }, []);

  const getRandomMemes = async () => {
    await fetch("https://meme-api.herokuapp.com/gimme/ProgrammerHumor/1")
      .then(response => response.json())
      .then(data => {
        let previewElement = data.memes[0].preview.length - 1;

        setMemesUrl(data.memes[0].preview[previewElement])
      });
  }

  return (
    <div className={Styles.inDevPage}>
      <div className={Styles.title}>
        <span>This page is still in development</span>
        <br />
        <span>Stay Tuned!</span>
        <div className={Styles.specialText}>
          Enjoy some random memes instead!
        </div>
      </div>
      <div className={Styles.randomMemes}>
        {memesUrl === "" ? (
          <div className={Styles.loader}><div></div><div></div></div>
        ) : (
          <img alt="random-memes" src={memesUrl} />
        )}
      </div>
    </div>
  )
}

export default InDevelopmentPage;
