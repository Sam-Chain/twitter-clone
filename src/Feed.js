import React from 'react'
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox'
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h3> Home</h3>
            </div>
            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
