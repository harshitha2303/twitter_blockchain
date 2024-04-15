import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import { ethers } from 'ethers';
import * as Constants from "../Utils/config"

function App() {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const connectToMetamask = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log(await signer.getAddress());
          const contractInstance = new ethers.Contract(Constants.contrataddress, Constants.contractAbi, signer);
          var tweets = await contractInstance.getalltweets();
          setTweets(tweets);
          console.log(tweets);
        }
        else {
          console.log("Metamask not found");
        }

      }
      catch (err) {
        console.error(err)
      }
    }
    connectToMetamask();

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/addtweet', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ tweet: tweet })
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    }

    const resp = await response.json();
    const status = resp.message;
    console.log(status);

  }

  const handleChange = async (event) => {
    setTweet(event.target.value);
  }

  const changeTweetStatus = async (tweetId) => {
    const response = await fetch('/api/changeStatus', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(tweetId),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    }

    const resp = await response.json();
    const status = resp.message;
    console.log(status);
  }

  return (
    <div>
      <div className={`${styles.container} ${styles.boldText}`}>Welcome to Decentralised Twitter</div>
      <br />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea className={styles.textarea} name="tweet" placeholder="Type your tweet here!" onChange={handleChange} value={tweet}></textarea>
          <br />
          <br />
          <input type="submit" value="Add tweet" />
        </form>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tweet ID</th>
              <th>Tweet Description</th>
              <th>Tweet Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tweets.map((tweet, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{tweet.desc}</td>
                <td>{tweet.status == 0 ? "Pending" : "Finished"}</td>
                <td>{tweet.status == 0 ? <button className={styles.button} onClick={() => changeTweetStatus(index)}>Submit</button> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
