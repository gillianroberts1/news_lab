import React, { useState, useEffect } from "react";
import StoryList from "../components/StoryList";

const NewsContainer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const storyPromises = data.map((storyId) => {
            console.log(storyId)
            return fetch(
              `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
            ).then((res) => res.json());
          });
       
          
  Promise.all(storyPromises)
  .then(results => setNews(results))
  
      
  
        })
    },[])


  return (
  
  <>
  <StoryList news={news}/>
  </>
  )

};

export default NewsContainer;
