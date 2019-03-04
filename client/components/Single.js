import React from 'react';
import Photo from './photo';
import Comments from './Comments'; 


const Single = React.createClass({
    render() {

        const { postId } = this.props.params;
        //index of the post
        // he got that by looking at dev tools as he cloicked on a post then mapped it out
        const i = this.props.posts.findIndex((post) => post.code === postId)
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || []; // created this here where the commnets live to pass it to the Comments component
        
        // get us the post
        return (
            <div className="single-photo">
            <Photo i={i} post={post} {...this.props}/>
            {/* {...this.props} passes all of the props but allows you to take what you need */}
            <Comments postComments={postComments} {...this.props}/>
            </div>

        )
    }
})

export default Single; 