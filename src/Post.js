import { Avatar } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import "./Post.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish"
import logo from "./image/logo.jpeg"

const  Post =  forwardRef(({displayName,username,verified,text,image,avatar},ref) => {
    const [like,setLike]=useState(0);
    const addLike = ()=>{
        let temp = like+1;
        setLike(temp);
    }
  return (
    <div className='post' ref={ref}>
        <div className="post_avatar">
        <Avatar src={logo} /></div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName} {" "}<span className='post__headerSpecial' >{verified && <VerifiedIcon className="post__badge"/>}{username}</span>
                    </h3>
                </div>
                <div className="post__headerdescription">
                        <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer"><div className='likeMain' onClick={addLike}><span>{like}</span>
            <FavoriteBorderIcon className='like' fontSize="small"/></div>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
})

export default Post