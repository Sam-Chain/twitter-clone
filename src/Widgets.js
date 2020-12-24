import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed,  } from 'react-twitter-embed'
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happenning</h2>

                <TwitterTweetEmbed tweetId={"1310580236933836801"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="reactjs"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={""}
                    options={{ text: "reactjs is awesome", via: "React" }}
                />


            </div>
        </div>
    )
}

export default Widgets
