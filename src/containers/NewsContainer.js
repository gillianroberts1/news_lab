const { useState, useEffect } = require("react")

const NewsContainer = () => {

    const [news, setNews] = useState([])

    

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then( res => res.json())
        .then (data => setNews(data))
    }, [])
}

    const newsList = news.map((story) => {
        return (
            fetch(story).then(res => res.json)
            .then(data => {data.map((storyId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/{storyId}.json`)
            .then (res => res.json())
           
            
            })

    

    

    // Promise.all(storyPromises)
    


        
    

// const newsList = news.map((story) => {
//     return fetch()

// })
return (
    
        <>
        {newsList}
        </>
    )
}


export default NewsContainer