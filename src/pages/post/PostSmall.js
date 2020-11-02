import React from 'react';
import "pages/post/post-small.sass"
import {A} from "hookrouter";
import DateFormat from "components/DateFormat";
import PropTypes from "prop-types";
import striptags from "striptags"

const removeMd = require('remove-markdown');

export default function PostSmall(props) {
    PostSmall.propTypes = {
        post: PropTypes.object.isRequired,
        isAdmin: PropTypes.bool,
    };


    const post = props.post;
    const link = props.isAdmin ? post.adminLink : post.link;

    if (post.isMassMedia) {
        return <div className={`post-small`}>
            <div className="post-small-image">
                <a href={link} target="_blank" rel="noopener noreferrer"><img src={post.previewPath} alt={post.header} className="img-preview"/></a>
            </div>
            <div className="post-small-content">
                <div><a href={link} target="_blank" rel="noopener noreferrer"><DateFormat date={post.date}/></a></div>
                <a href={link}><h5 target="_blank" rel="noopener noreferrer">{post.header}</h5></a>
                {props.isAdmin || <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">{striptags(removeMd(post.text))}</a>
                </div>}
            </div>
        </div>;
    } else {
        return <div className={`post-small`}>
            <div className="post-small-image">
                <A href={link}><img src={post.previewPath} alt={post.header} className="img-preview"/></A>
            </div>
            <div className="post-small-content">
                <div><A href={link}><DateFormat date={post.date}/></A></div>
                <A href={link}><h5>{post.header}</h5></A>
                {props.isAdmin || <div>
                    <div className="post-small-text">
                        {post.text && <A href={link}>{striptags(removeMd(post.text))}</A>}
                    </div>
                </div>}
            </div>
        </div>;
    }


}




