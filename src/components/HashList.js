import React from 'react'

const HashList = ( {tags, deleteTag} ) => {

    const emotions = ['🤣', '😊', '😇', '😋', '🤪', '🥳', '🤩', '😎', '🤓', '😄']
    const emotionDispatcher = () => emotions[Math.floor(Math.random() * (emotions.length))]

    if (window.location.hash === "") {
        return (
            <li>URL Hash Tags: If you don't have any, click <span className="has-text-weight-bold">below</span> to load my favorite coding technologies of this month! 🤓
                <ul>
                    {tags.map(tag =>
                        <li key={tags.indexOf(tag)}><a href="/#react.js,node.js,express,mongoose,jest,jsonwebtoken,axios,figma">Please add one or more tags to the baseURL (i.e. /#tag1,tag2,tag3)</a></li>
                    )}
                </ul>
            </li>
        )
    } else {
        return (
            <li>URL Hash Tags: Click on <span className="has-text-weight-bold">any</span> tag to quickly delete it! (Convinient) 😇
                <ul>
                    {tags.map(tag =>
                        <li key={tags.indexOf(tag)}><button className="button is-white is-capitalized" onClick={deleteTag}>{emotionDispatcher()} {tag}</button></li>
                    )}
                </ul>
            </li>
        )
    }
}

export default HashList
