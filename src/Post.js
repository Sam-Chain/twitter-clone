import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishIcon from '@material-ui/icons/Publish';
function Post({
    displayName,
    username,
    verified,
    timestamp,
    image,
    avatar
}) {
    return (
        <div className="post">

            <div className="post__avatar">
                <Avatar alt="" src=""  className="theAvatar"/>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Saddam merah <span className="post__headerSpetial">
                                <VerifiedUserIcon className="post__badge"/> @saddam1993
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build twitter-clone</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/media/EirsC-7XsAEyB6-?format=jpg&name=small" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderOutlinedIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>

        </div>
    )
}

export default Post
